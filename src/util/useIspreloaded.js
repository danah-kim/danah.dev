import { useState, useEffect } from "react";

const useIspreloaded = () => {
  const [isPreloaded, setIsPreloaded] = useState("is-preload");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaded(null);
    }, 100);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return isPreloaded;
};

export default useIspreloaded;
