"use client";

import Image from "next/image";
import Link from "next/link";

const ImageCard = ({ video, course }) => {

  return (
    <div className="bg-cream rounded-lg shadow-md overflow-hidden mt-5">
      <Image
        src={video.thumb}
        alt={video.title}
        width={300}
        height={200}
        className="w-full h-auto"
      />
      <div className="p-4">
        <p className="text-lg text-forest mb-2">{video.title}</p>
        <p className="text-sm text-forest mb-1">Duration: {video.duration}</p>
        <p>
          <Link
            href={`/courses/${course.id}/download/${video.id}`}
            className="text-forest text-sm underline hover:text-tumeric cursor-pointer"
          >
            Download {video.title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;


