"use client";

import Image from "next/image";

const ImageCard = ({ video }) => {
    
  async function handleDownload(link) {
    const response = await fetch(link);
    const blob = await response.blob();
    console.log("blob", blob);
  }

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
          <button
            className="text-forest text-sm underline hover:text-tumeric cursor-pointer"
            onClick={() => handleDownload(video.videoUrl)}
          >
            Download
          </button>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
