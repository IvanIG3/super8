const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
    },
    env: {
        tmdbURL: 'https://api.themoviedb.org/3',
        tmdbSmallImageURL: 'https://image.tmdb.org/t/p/w300',
        tmdbMediumImageURL: 'https://image.tmdb.org/t/p/w780',
        tmdbBigImageURL: 'https://image.tmdb.org/t/p/w1280',
        defaultLanguage: 'es-ES',
    },
    images: {
        domains: [
            'image.tmdb.org',
        ],
    },
});