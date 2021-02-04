import { createSelector } from 'reselect';
import videoSelector from '../utils/videoSourceSelector';

export const tvShowSelector = createSelector(
    state => state.tvshow.tvshow,
    tvshow => tvshow && ({
        id: tvshow.id,
        title: tvshow.name,
        poster_path: tvshow.poster_path ? 
            `${process.env.tmdbMediumImageURL}${tvshow.poster_path}` : '/no-poster.png',
        overview: tvshow.overview,
        score: tvshow.vote_average && tvshow.vote_count &&
            `${tvshow.vote_average} / 10 (${tvshow.vote_count})` || "0",
        seasons: tvshow.seasons ? tvshow.seasons.length : 1,
        genres: tvshow.genres ? tvshow.genres.map(genre => genre.name).join(', ') : "-",
        first_air_date: tvshow.first_air_date,
        url: `/tvshows/${tvshow.id}`,
        type: 'tvshow',
    })
);

export const tvshowListSelector = createSelector(
    state => state.tvshows.list,
    list => list && list.map(tvshow => ({
        id: tvshow.id,
        title: tvshow.name,
        score: tvshow.vote_average,
        poster_path: tvshow.poster_path ? 
            `${process.env.tmdbSmallImageURL}${tvshow.poster_path}` : '/no-poster.png',
        url: `/tvshows/${tvshow.id}`,
    }))
);

export const castSelector = createSelector(
    state => state.tvshow.cast,
    cast => cast && cast.map(actor => ({
        profile_path: actor.profile_path ?
            `${process.env.tmdbSmallImageURL}${actor.profile_path}` : '/no-poster.png',
        name: actor.name,
        character: actor.roles && actor.roles.length > 0 && actor.roles[0].character,
        url: `/actors/${actor.id}`,
    }))
);

export const tvshowRecommendationsSelector = createSelector(
    state => state.tvshow.recommendations,
    list => list && list.map(tvshow => ({
        id: tvshow.id,
        title: tvshow.name,
        score: tvshow.vote_average,
        poster_path: tvshow.poster_path ? 
            `${process.env.tmdbSmallImageURL}${tvshow.poster_path}` : '/no-poster.png',
        url: `/tvshows/${tvshow.id}`,
    }))
);

export const tvshowVideosSelector = createSelector(
    state => state.tvshow.videos,
    videos => videos && videos.map(video => ({
        url: videoSelector(video.key, video.site.toLowerCase()),
        name: video.name,
    }))
);

export const firestoreSelector = createSelector(
    state => state.tvshow.tvshow,
    tv => tv && ({ 
        id: tv.id,
        title: tv.name,
        score: tv.vote_average,
        poster_path: tv.poster_path ?
            `${process.env.tmdbSmallImageURL}${tv.poster_path}` : '/no-poster.png',
        url: `/tvshows/${tv.id}`,
        type: 'tvshow'
    })
);