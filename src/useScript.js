import { useEffect } from 'react';

const useInjectToScrolly = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useInjectToScrolly;