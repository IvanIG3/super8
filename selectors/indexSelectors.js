import { createSelector } from 'reselect';

export const trendingSelector = createSelector(
    state => state.index.trending,
    trending => trending && trending.map(result => ({
        id: result.id,
        title: result.media_type === 'movie' ? result.title : result.name,
        backdrop_path: result.backdrop_path ?
            `${process.env.tmdbOriginalImageURL}${result.backdrop_path}` : '/no-backdrop.png',
        url: result.media_type === 'tv' ? `/tvshows/${result.id}` :
            result.media_type === 'movie' ? `/movies/${result.id}` : 
            `/actors/${result.id}`
    }))
);

export const newMoviesSelector = createSelector(
    state => state.index.newMovies,
    newMovies => newMovies && newMovies.map(movie => ({
        id: movie.id,
        title: movie.title,
        score: movie.vote_average,
        poster_path: movie.poster_path ?
            `${process.env.tmdbSmallImageURL}${movie.poster_path}` : '/no-poster.png',
        url: `/movies/${movie.id}`,
    }))
);

export const newTvshowsSelector = createSelector(
    state => state.index.newTvshows,
    newTvshows => newTvshows && newTvshows.map(tv => ({
        id: tv.id,
        title: tv.name,
        score: tv.vote_average,
        poster_path: tv.poster_path ?
            `${process.env.tmdbSmallImageURL}${tv.poster_path}` : '/no-poster.png',
        url: `/tvshows/${tv.id}`,
    }))
);

export const bestMoviesSelector = createSelector(
    state => state.index.bestMovies,
    bestMovies => bestMovies && bestMovies.map(movie => ({
        id: movie.id,
        title: movie.title,
        score: movie.vote_average,
        backdrop_path: movie.backdrop_path ?
            `${process.env.tmdbOriginalImageURL}${movie.backdrop_path}` : '/no-backdrop.png',
        url: `/movies/${movie.id}`,
    })).slice(0, 10)
);

export const bestTvshowsSelector = createSelector(
    state => state.index.bestTvshows,
    bestTvshows => bestTvshows && bestTvshows.map(tv => ({
        id: tv.id,
        title: tv.name,
        score: tv.vote_average,
        backdrop_path: tv.backdrop_path ?
            `${process.env.tmdbOriginalImageURL}${tv.backdrop_path}` : '/no-backdrop.png',
        url: `/tvshows/${tv.id}`,
    })).slice(0, 10)
);