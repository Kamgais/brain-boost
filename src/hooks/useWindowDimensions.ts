import { useState, useEffect } from 'react';

export function useWindowDimensions() {
    const isClient = useIsClient();
    let width = 0;
    let height = 0;

    if(isClient) {
        width = window.innerWidth;
        height = window.innerHeight
    }
 const [windowDimensions, setWindowDimensions] = useState({
    width,
    height
 });

 useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width,
        height
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
 }, []);

 return windowDimensions;
}


export const useIsClient = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    },[])

    return isClient;
}