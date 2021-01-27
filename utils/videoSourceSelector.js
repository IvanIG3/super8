
export default (key, source) => {
    switch(source) {
        case 'youtube':
            return `https://www.youtube.com/watch?v=${key}`;
    }
};