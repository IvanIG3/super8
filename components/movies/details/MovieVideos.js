import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player/lazy';

import { getMovieVideos } from '../../../actions/movieActions';
import { movieVideosSelector } from '../../../selectors/movieSelectors';
import useLanguage from '../../../language/useLanguage';
import useUpdate from '../../../hooks/useUpdate';

const MovieVideos = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { language } = useLanguage();
    const videos = useSelector(movieVideosSelector);

    // Fetch videos
    useEffect(() => !videos && dispatch(getMovieVideos(id, language)), []);
    useUpdate(() => dispatch(getMovieVideos(id, language)), [language]);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            {videos && videos.map((video, idx) =>
                <div key={idx}>
                    <h2 className="underline">{video.name}</h2>
                    <div style={{ position: 'relative', paddingTop: '56.25%' }} >
                        <ReactPlayer
                            style={{ position: 'absolute', top: '0' }}
                            url={video.url}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieVideos;