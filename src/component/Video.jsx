import React, { useEffect, useState } from "react";

const Video=(info) => {
  return (
    <div>
      <h6>{info.snippet?.title}</h6>
    </div>
  )
}

export default Video
