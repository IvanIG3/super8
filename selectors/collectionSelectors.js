import { createSelector } from 'reselect';

export const collectionListSelector = collection => createSelector(
    state => state[collection].list,
    list => list && list.map(item => ({
        id: item.id,
        title: item.type === 'movie' ? item.title :
            item.type === 'tvshow' ? item.name :
                null,
        score: item.vote_average,
        poster_path: item.poster_path ?
            `${process.env.tmdbSmallImageURL}${item.poster_path}` : '/no-poster.png',
        url: item.type === 'movie' ? `/movies/${item.id}` :
            item.type === 'tvshow' ? `/tvshows/${item.id}` :
                null,
    }))
);