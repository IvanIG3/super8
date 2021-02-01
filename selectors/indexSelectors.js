import { createSelector } from 'reselect';

export const trendingSelector = createSelector(
    state => state.index.trending,
    trending => trending && trending.results && trending.results.map(result => ({
        id: result.id,
        title: result.media_type === 'movie' ? result.title : result.name,
        backdrop_path: result.backdrop_path ?
            `${process.env.tmdbOriginalImageURL}${result.backdrop_path}` : '/no-backdrop.png',
        url: result.media_type === 'tv' ? `/tvshows/${result.id}` :
            result.media_type === 'movie' ? `/movies/${result.id}` : 
            `/actors/${result.id}`
    }))
);