import React from "react";
import { User } from "../../types/utilities";
import { fetchUsers } from "../../api/faker";
import WebWorker from "../../webWorker";
import worker from "../../app.worker";

const UtilitiesPage = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);
  const webWorker = React.useRef(new WebWorker(worker));

  React.useEffect(() => {
    (async () => {
      const res = await fetchUsers();
      setUsers(res);
    })();
  }, []);

  React.useEffect(() => {
    webWorker.current.addEventListener("message", (event) => {
      setUsers(event.data);
    });
    return () => {
      webWorker.current.terminate();
    };
  }, [webWorker]);

  const handleSort = () => {
    webWorker.current.postMessage({ users, type: "asc" });
  };
  return (
    <div className="p-2">
      <button onClick={handleSort}>Sort</button>
      {users?.map((user) => {
        return (
          <p>
            {user.commentCount} - {user.name}
          </p>
        );
      })}
    </div>
  );
};

export default UtilitiesPage;
