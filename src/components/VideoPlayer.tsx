// client component - renderizado somente no browser
'use client';
import { useEffect, useRef } from "react";

export function VideoPlayer() {
    //DOM javascript
  const videoTagRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    //lib de player
    //usar a ref
    //start
  }, []);
  return <video controls autoPlay ref={videoTagRef} />;
}

