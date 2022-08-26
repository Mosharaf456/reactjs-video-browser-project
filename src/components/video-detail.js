import React, { Component } from 'react';

class VideoDetail extends Component {
    
    render() { 
        const { videoId,title,description } = this.props;
        
        return (
            <div className = 'col-md-8'>
                  <div className='embed-responsive embed-responsive-16by9 '>
                      <iframe  
                            className='embed-responsive-item' 
                            src={`https://www.youtube.com/embed/${videoId}`}
                            style={{ height: '500px' , width: '100%' }} 
                      />
                  </div>
                  
                  <div className='details' style={{ marginTop:'10px', padding:'10px', border:'1px solid #ddd', borderRadius:'4px' }}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}
export default VideoDetail;