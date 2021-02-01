const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
    },
    env: {
        tmdbURL: 'https://api.themoviedb.org/3',
        tmdbSmallImageURL: 'https://image.tmdb.org/t/p/w342',
        tmdbBigImageURL: 'https://image.tmdb.org/t/p/w780',
        tmdbOriginalImageURL: 'https://image.tmdb.org/t/p/original',
        tmdbProfileURL: 'http://image.tmdb.org/t/p/h632',
        defaultLanguage: 'es-ES',
    },
    images: {
        domains: [
            'image.tmdb.org',
        ],
    },
});