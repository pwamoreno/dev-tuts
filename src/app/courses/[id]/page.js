import Navbar from "@/components/Navbar";
import { courseContents, courses } from "@/lib/courses";
import Link from "next/link";
import ImageCard from "./ImageCard";
import Footer from "@/components/Footer";

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
    <div>
      <Navbar />

      <h1 className="mt-8 text-xl font-bold">{course.title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {videos.map((video) => (
          <ImageCard key={video.id} video={video}/>
        ))}
      </div>
      <p className='mt-8'>
        <Link href="/" className='underline hover:text-tumeric'>Go Home</Link>
      </p>

      <Footer />
    </div>
  );
};

export default CoursePage;
