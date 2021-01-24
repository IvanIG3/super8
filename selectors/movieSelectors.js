import { createSelector } from 'reselect';

export const movieSelector = createSelector(
    state => state.movie.movie,
    movie => movie && ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ? 
            `${process.env.tmdbBigImageURL}${movie.poster_path}` : '/no-poster.png',
        overview: movie.overview,
        score: movie.vote_average && movie.vote_count &&
            `${movie.vote_average} / 10 (${movie.vote_count})` || "0",
        runtime: movie.runtime ?
            new Date(movie.runtime * 60 * 1000).toISOString().substr(11, 8) : "00:00:00",
        genres: movie.genres ? movie.genres.map(genre => genre.name).join(', ') : "-",
        release_date: movie.release_date,
        url: `/movies/${movie.id}`,
        type: 'movie',
    })
);

export const movieListSelector = createSelector(
    state => state.movies.list,
    list => list && list.map(movie => ({
        id: movie.id,
        title: movie.title,
        score: movie.vote_average,
        poster_path: movie.poster_path ? 
            `${process.env.tmdbSmallImageURL}${movie.poster_path}` : '/no-poster.png',
        url: `/movies/${movie.id}`,
    }))
);

export const castSelector = createSelector(
    state => state.movie.cast,
    cast => cast && cast.map(actor => ({
        profile_path: actor.profile_path ?
            `${process.env.tmdbProfileURL}${actor.profile_path}` : '/no-poster.png',
        name: actor.name,
        character: actor.character,
    }))
);

export const movieRecommendationsSelector = createSelector(
    state => state.movie.recommendations,
    list => list && list.map(movie => ({
        id: movie.id,
        title: movie.title,
        score: movie.vote_average,
        poster_path: movie.poster_path ? 
            `${process.env.tmdbSmallImageURL}${movie.poster_path}` : '/no-poster.png',
        url: `/movies/${movie.id}`,
    }))
);

export const firestoreSelector = createSelector(
    state => state.movie.movie,
    movie => ({ 
        ...movie,
        type: 'movie'
    })
);