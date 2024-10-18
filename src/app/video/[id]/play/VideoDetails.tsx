import { Video } from "../../../../models";

async function getVideo(id: string): Promise<Video> {
    //14 - fetch cache - padrão estático
    //15 - fetch cache - cache no-store
    //hydration
    //react 19 compiler - pai - - filhos - React.memo()
  const response = await fetch(`http://localhost:8000/videos/${id}`, {
    cache: "no-store", // desabilita o cache
    // next: {
    //   revalidate: 1, // 5 min
    //   //tags: [`video:${id}`],
    // },
  });

  // revalidate on demand
  return response.json();
}

export async function VideoDetail({ id }: { id: string }) {
  const video = await getVideo(id);
  return (
    <div>
      <h1 className="text-primary"> Play do vídeo</h1>
      <p className="text-primary">id: {id}</p>
      <p className="text-primary">title: {video.title}</p>
    </div>
  );
}
