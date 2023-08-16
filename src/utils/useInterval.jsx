import { useEffect, useRef } from 'react';

export const useInterval = (cb, delay = 1000) => {
    const savedCb = useRef();
    
    useEffect(() => {
      savedCb.current = cb;
    }, [cb]);
  
    useEffect(() => {
      if(delay !== null) {
        const interval = setInterval(() => {
          savedCb.current();
        }, delay);
  
        return() => clearInterval(interval);
      }
    }, [delay]);
  };