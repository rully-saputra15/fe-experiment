import React, { PropsWithChildren } from "react";
type Props = {
  onFinish: (data: Record<string, string>) => void;
};
const Onboarding: React.FC<PropsWithChildren<Props>> = ({
  children,
  onFinish,
}) => {
  const [onBoardingData, setOnBoardingdata] = React.useState({});
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const arrayOfChildren = React.Children.toArray(children);
  const currentChild = arrayOfChildren[currentIndex];

  const goToNext = (stepData: Record<string, string>) => {
    const updatedData = {
      ...onBoardingData,
      ...stepData,
    };

    if (currentIndex < arrayOfChildren.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      onFinish(updatedData);
    }
    setOnBoardingdata(updatedData);
  };

  if (
    React.isValidElement<{
      goToNext?: (stepData: Record<string, string>) => void;
    }>(currentChild)
  ) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};

export default Onboarding;
