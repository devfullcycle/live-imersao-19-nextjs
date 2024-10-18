//server component - 100% renderizado do lado servidor
import Link from "next/link";
import { Video } from "../models";
import { VideoCard } from "./VideoCard";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getVideos(): Promise<Video[]> {
  await sleep(5000);
  const response = await fetch("http://localhost:8000/videos", {
    //cache: "no-store", // desabilita o cache
    next: {
      revalidate: 10, // 10 segundos
    },
  });
  // revalidate on demand
  return response.json();
}

export async function VideoList() {
  const videos = await getVideos();
  return videos.map((video) => (
    <Link key={video.id} href={`/video/${video.id}/play`}>
      <VideoCard
        title={video.title}
        thumbnail={video.thumbnail}
        views={video.num_views}
      />
    </Link>
  ));
}

// 100.000 usuários acessam a página --- usar o cache

//passou 10 segundos - 1000 usuários acessam a página
// chamar o chamada com fetch para pegar os novos dados
// enquanto continua devolvendo os dados antigos

// quando termina de pegar os novos dados
// somente os novos acessos vão receber os novos dados
