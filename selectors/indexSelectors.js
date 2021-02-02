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