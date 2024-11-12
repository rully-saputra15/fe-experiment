import React, { PropsWithChildren } from "react";
import { flushSync } from "react-dom";
import "./viewTransition.css";

const ViewTransitionPage = () => {
  const [showImage, setShowImage] = React.useState(false);

  const handleHover = () => {
    document.startViewTransition(() => {
      setShowImage(true);
    });
  };

  return (
    <ViewTransition>
      <button onMouseEnter={handleHover}>Click</button>
      <div id="image">
        {showImage && (
          <img
            className="aspect-auto w-72"
            src="https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65ea99845e53084280471b71_most%20beautiful%20landscapes%20in%20the%20world.webp"
          />
        )}
        {showImage && (
          <img
            className="aspect-auto w-72"
            src="https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65ea99845e53084280471b71_most%20beautiful%20landscapes%20in%20the%20world.webp"
          />
        )}
      </div>
    </ViewTransition>
  );
};

const ViewTransition: React.FC<PropsWithChildren> = ({ children }) => {
  React.useEffect(() => {
    if (!document.startViewTransition) return;
    document.startViewTransition(() => {
      console.log("transition");
    });
  }, []);

  return children;
};

export default ViewTransitionPage;
