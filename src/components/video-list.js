import React, { Component } from 'react';
import VideoListItem from './video-list-item';

class VideoList extends Component {

    render() { 
      const { items,handleSelect } = this.props;

        return (
            <div className="col-md-4">
                <ul className="list-group">
                  {items.map(item => (
                        <VideoListItem  
                            imgUrl={item.snippet.thumbnails.high.url} 
                            title={item.snippet.title} 
                            description={item.snippet.description} 
                            videoId={item.id.videoId}
                            handleSelect = {handleSelect}
                        />
                      )
                    )
                  }
                </ul>
            </div>
         );
    }
}
 
export default VideoList;