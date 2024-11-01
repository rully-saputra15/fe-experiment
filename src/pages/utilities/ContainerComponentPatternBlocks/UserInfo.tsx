import React from "react";

const UserInfo: React.FC<{
  user?: {
    name: string;
    job: string;
  };
}> = ({
  user = {
    name: "",
    job: "",
  },
}) => {
  return <div>{user.name}</div>;
};

export default UserInfo;
