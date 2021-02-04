import { createSelector } from 'reselect';

export const actorInfoSelector = createSelector(
    state => state.actor.actor,
    actor => actor && ({
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path ?
            `${process.env.tmdbMediumImageURL}${actor.profile_path}` : '/no-poster.png',
        biography: actor.biography,
        birthday: actor.birthday,
        place_of_birth: actor.place_of_birth,
    })
);

export const actorCreditsSelector = createSelector(
    state => state.actor.credits,
    credits => credits && credits.cast && credits.cast.map(credit => ({
        id: credit.id,
        title: credit.media_type === 'movie' ? credit.title : credit.name,
        poster_path: credit.poster_path ?
            `${process.env.tmdbSmallImageURL}${credit.poster_path}` : '/no-poster.png',
        url: credit.media_type === 'movie' ? `/movies/${credit.id}` : `/tvshows/${credit.id}`,
        score: credit.vote_average
    }))
);

export const actorListSelector = createSelector(
    state => state.actors.list,
    actors => actors && actors.map(actor => ({
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path ?
            `${process.env.tmdbSmallImageURL}${actor.profile_path}` : '/no-poster.png',
        url: `/actors/${actor.id}`,
    }))
);