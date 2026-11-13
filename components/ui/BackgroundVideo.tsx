"use client";

import { useEffect, useRef } from "react";

const POSTER = "/assets/images/chef-cooking-video-poster.jpg";
const MP4 = "/assets/media/chef-cooking-video.mp4";
const WEBM = "/assets/media/chef-cooking-video.webm";

// React does not write the `muted` attribute into server HTML, and browsers only
// autoplay muted video, so set it on the element and start playback here.
export default function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div
      data-poster-url={POSTER}
      data-video-urls={`${MP4},${WEBM}`}
      data-autoplay="true"
      data-loop="true"
      data-wf-ignore="true"
      className="about-background-video w-background-video w-background-video-atom"
    >
      <video
        ref={ref}
        id="bcb1b6c3-01f2-4579-cedb-0393ae5e2d0a-video"
        autoPlay
        loop
        muted
        playsInline
        style={{ backgroundImage: `url("${POSTER}")` }}
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source src={MP4} data-wf-ignore="true" />
        <source src={WEBM} data-wf-ignore="true" />
      </video>
    </div>
  );
}
