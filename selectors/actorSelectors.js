import { createSelector } from 'reselect';

export const actorInfoSelector = createSelector(
    state => state.actor.actor,
    actor => actor && ({
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path ?
            `${process.env.tmdbBigImageURL}${actor.profile_path}` : '/no-poster.png',
        biography: actor.biography,
        birthday: actor.birthday,
        place_of_birth: actor.place_of_birth,
    })
);