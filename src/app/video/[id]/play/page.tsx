import { VideoPlayer } from "../../../../components/VideoPlayer";
import { Suspense } from "react";
import { VideoDetail } from "./VideoDetails";
import { unstable_after as after } from "next/server";

// http://localhost:8000 - Spring, Laravel, Django, .Net
// quando as informações do vídeo são editadas ---> http ---> next.js --> revalidate na tag video:ID

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

async function incrementViews(id: string) {
  await sleep(2000);
  // await fetch(`http://localhost:8000/videos/${id}/views`, {
  //   method: 'POST',
  // });
}

export default async function VideoPlayPage({
  params,
}: {
  params: { id: string };
}) {
  after(async () => {
    await incrementViews(params.id);
  });

  return (
    <div>
      <VideoPlayer />
      <Suspense fallback={<div>loading...</div>}>
        <VideoDetail id={params.id} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        {/* <p className="text-primary">1000 views</p> */}
        {/* <VideoViews/> */}
      </Suspense>
    </div>
  );
}

//MP4 - upload - converter - MPEG DASH

//lib de player
//video.js
//shaka player - Imersão
//bitmovin
//clappr-

//server component - processamento iniciais, log
