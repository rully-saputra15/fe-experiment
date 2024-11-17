import React from "react";
import { User } from "../../types/utilities";
import { fetchUsers } from "../../api/faker";
import WebWorker from "../../webWorker";
import worker from "../../app.worker";
import CurrentUserLoader from "./ContainerComponentPatternBlocks/CurrentUserLoader";
import UserInfo from "./ContainerComponentPatternBlocks/UserInfo";
import Onboarding from "./OnboardingComponent/Onboarding";
import withLoading from "./HOCs/withLoading";

type StepProps = {
  goToNext?: (data: Record<string, string>) => void;
};

const defaultGoToNext = (data: Record<string, string>) => {};
const StepOne = ({ goToNext = defaultGoToNext }: StepProps) => {
  return (
    <>
      <div>Step One</div>
      <button onClick={() => goToNext({ name: "John" })}>Next</button>
    </>
  );
};

const StepTwo = ({ goToNext = defaultGoToNext }: StepProps) => {
  return (
    <>
      <div>Step Two</div>
      <button onClick={() => goToNext({ age: "23" })}>Next</button>
    </>
  );
};

const StepThree = ({ goToNext = defaultGoToNext }: StepProps) => {
  return (
    <>
      <div>Step Three</div>
      <button onClick={() => goToNext({ hobby: "coding" })}>Next</button>
    </>
  );
};

/** HOCS */
const NewComp = ({ userId }: { userId: string }) => {
  return <div>new comp {userId}</div>;
};

const NewCompWithUserId = withLoading(NewComp)("123");
const UtilitiesPage = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const webWorker = React.useRef<Worker>(new WebWorker(worker) as Worker);

  React.useEffect(() => {
    (async () => {
      const res = await fetchUsers();
      setUsers(res);
    })();
  }, []);

  React.useEffect(() => {
    webWorker.current.addEventListener("message", (event) => {
      setIsLoading(false);
      setUsers(event.data);
    });
    return () => {
      webWorker.current.terminate();
    };
  }, [webWorker]);

  const handleSort = () => {
    setIsLoading(true);
    webWorker.current.postMessage({ users, type: "asc" });
  };

  // const _sort = () => {
  //   setUsers((prevState) =>
  //     prevState.sort((a: User, b: User) => a.commentCount - b.commentCount)
  //   );
  // };
  return (
    <div className="p-2">
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <br />
      <Onboarding onFinish={(data) => console.log(data)}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </Onboarding>
      <NewCompWithUserId />
      <br />
      {/* <button onClick={handleSort}>Sort</button> */}
      {/* {isLoading && <p>Loading...</p>}
      {!isLoading &&
        users?.map((user) => {
          return (
            <p key={user.id}>
              {user.commentCount} - {user.name}
            </p>
          );
        })} */}
    </div>
  );
};

export default UtilitiesPage;
