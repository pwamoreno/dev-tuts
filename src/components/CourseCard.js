import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-cream rounded-lg shadow p-4 max-md:flex max-md:flex-col max-md:items-center">
      <Image
        src={course.image}
        alt={course.title}
        width={300}
        height={200}
        className="rounded-md h-auto"
      />
      <h3 className="mt-4 font-semibold text-rust">{course.title}</h3>
      <p className="text-sm text-forest">
        {course.author} - {course.duration}
      </p>
      <div className="flex justify-between items-center mt-2">
        <button className="bg-tumeric text-white text-sm px-3 py-1 rounded hover:bg-rust">
          <Link href={`/courses/${course.id}`}>Go to Course</Link>
        </button>
      </div>
    </div>
  );
}
