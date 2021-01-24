import { createSelector } from 'reselect';

export const tvShowSelector = createSelector(
    state => state.tvshow.tvshow,
    tvshow => tvshow && ({
        id: tvshow.id,
        title: tvshow.name,
        poster_path: tvshow.poster_path ? 
            `${process.env.tmdbImageURL}${tvshow.poster_path}` : '/no-poster.png',
        overview: tvshow.overview,
        score: tvshow.vote_average && tvshow.vote_count &&
            `${tvshow.vote_average} / 100 (${tvshow.vote_count})` || "0",
        seasons: tvshow.seasons ? tvshow.seasons.length : 1,
        genres: tvshow.genres ? tvshow.genres.map(genre => genre.name).join(', ') : "-",
        first_air_date: tvshow.first_air_date,
        url: `/tvshows/${tvshow.id}`,
        type: 'tvshow',
        backdrop_path: tvshow.backdrop_path ? 
            `${process.env.tmdbBackdropURL}${tvshow.backdrop_path}` : '/no-backdrop.png',
        vote_average: tvshow.vote_average,
    })
);

export const tvshowListSelector = createSelector(
    state => state.tvshows.list,
    list => list && list.map(tvshow => ({
        id: tvshow.id,
        title: tvshow.name,
        score: tvshow.vote_average,
        poster_path: tvshow.poster_path ? 
            `${process.env.tmdbImageURL}${tvshow.poster_path}` : '/no-poster.png',
        url: `/tvshows/${tvshow.id}`,
    }))
);

export const castSelector = createSelector(
    state => state.tvshow.cast,
    cast => cast && cast.map(actor => ({
        profile_path: actor.profile_path ?
            `${process.env.tmdbProfileURL}${actor.profile_path}` : '/no-poster.png',
        name: actor.name,
        character: actor.roles && actor.roles.length > 0 && actor.roles[0].character,
    }))
);

