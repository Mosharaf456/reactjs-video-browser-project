import React, { Component } from 'react';

class VideoListItem extends Component {

    render() {
        const { imgUrl, title, description, videoId, handleSelect } = this.props;

        return (
            <li
                onClick={() => handleSelect(videoId, title, description)}
                className="list-group-item media videolist"
            >
                <img
                    className="mr-3"
                    src={imgUrl}
                    height="202"
                    width="335"
                    alt="Image Not found"
                />
                <div className='media-body'>{title}</div>
            </li>
        );
    }
}

export default VideoListItem;