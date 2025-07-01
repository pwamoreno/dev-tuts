import { courseContents, courses } from "@/lib/courses";
import Link from "next/link";
import ImageCard from "./ImageCard";

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

const CoursePage = async ({ params }) => {
  const { id } = await params;
  const course = courses.find((course) => course.id === id);
  const videos = courseContents[id];

  if (!course || !videos) return <div>Course not Found</div>;

  return (
    <div className="mx-5">
      <h1 className="mt-8 text-xl font-bold">{course.title}</h1>
      <div className="grid grid-cols-4 max-md:grid-cols-1 gap-6">
        {videos.map((video) => (
          <ImageCard key={video.id} video={video} course={course}/>
        ))}
      </div>
      <p className='mt-8'>
        <Link href="/" className='underline hover:text-tumeric'>Go Home</Link>
      </p>

    </div>
  );
};

export default CoursePage;
