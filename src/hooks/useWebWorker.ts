import React from "react";

const useWebWorker = <T>(): UseWebWorkerReturn<T> => {
  const webWorker = React.useRef<Worker>(null);
  const [result, setResult] = React.useState<T | null>(null);

  React.useEffect(() => {
    webWorker.current?.addEventListener("message", (event) => {
      setResult(event.data);
    });
    return () => {
      webWorker.current?.terminate();
    };
  }, []);
  return { webWorker, result };
};

export default useWebWorker;
