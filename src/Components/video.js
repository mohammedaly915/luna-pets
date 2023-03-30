import React from 'react'
import video from '../Video/My Video.mp4'
function Video() {
  return (

    <div>
      <video src={video} width="100%" height="auto"  controls autoPlay/>
    </div>
  )
}

export default Video