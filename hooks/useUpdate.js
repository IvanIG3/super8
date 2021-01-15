import { useEffect, useRef } from 'react';

const useUpdate = (callback, dependences) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            callback();
        } else {
            didMount.current = true;
        }
    }, dependences);
};

export default useUpdate;