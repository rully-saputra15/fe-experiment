type UseWebWorkerReturn<T> = {
  webWorker: React.RefObject<Worker>;
  result: T | null;
};
