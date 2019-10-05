import { useState, useEffect } from "react";

const useIspreloaded = () => {
  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaded(false);
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
