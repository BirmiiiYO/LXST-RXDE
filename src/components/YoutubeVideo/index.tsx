import React from 'react'

import { YoutubeVideoProps } from './types'

export const YoutubeVideo = ({ url }: YoutubeVideoProps) => (
  <iframe
    width="100%"
    height="100%"
    src={`${url}?&autoplay=1&mute=1`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; web-share"
    allowFullScreen
  />
)
