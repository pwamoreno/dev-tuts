import DownloadVideo from "@/components/DownloadVideo";
import { courseContents } from "@/lib/courses";

const DownloadPage = async ({ params }) => {
  const { id } = await params;
  const { downloadId } = await params;
  const video = courseContents[id].find((video) => video.id === downloadId);

  if (!video) return <div>Lecture video not Found</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      <DownloadVideo video={video}/>
    </div>
  );
};

export default DownloadPage;
