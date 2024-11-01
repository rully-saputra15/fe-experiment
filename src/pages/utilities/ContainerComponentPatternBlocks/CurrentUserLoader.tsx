import React, { PropsWithChildren } from "react";

const CurrentUserLoader: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "Rully",
    job: "Dev",
  });
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ user: typeof user }>(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
