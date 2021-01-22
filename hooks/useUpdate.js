import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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

useUpdate.propTypes = {
    callback: PropTypes.func.isRequired,
    dependences: PropTypes.array.isRequired
};

export default useUpdate;