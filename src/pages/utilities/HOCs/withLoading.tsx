import React from "react";

const withLoading =
  (Component: React.ComponentType<{ userId: string }>) => (userId: string) => {
    return (props: any) => {
      return <Component {...props} userId={userId} />;
    };
  };

export default withLoading;
