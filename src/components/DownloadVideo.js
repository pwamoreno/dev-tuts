"use client";
import { useState } from "react";
import Image from "next/image";

import throttle from "lodash.throttle";

const DownloadVideo = ({ video }) => {

    const [progress, setProgress] = useState(0)

    const updateProgress = throttle((value) => {
        setProgress(value)
    }, 100, { leading: true, trailing: true })

  async function handleDownload(link, filename) {
    const response = await fetch(link);

    if(!response?.body) return;

    const contentLength = response.headers.get("Content-Length")
    const totalLength = typeof contentLength === "string" && parseInt(contentLength)

    console.log(totalLength)

    const reader = response.body.getReader()
    const chunks = []

    let receivedLength = 0;

    while(true){
        const { done, value } = await reader.read()

        if(done){
            console.log("done")
            break;
        }

        chunks.push(value)

        receivedLength = receivedLength + value.length
        if(typeof totalLength === "number"){
            const step = parseFloat((receivedLength /totalLength).toFixed(2)) * 100
            updateProgress(step)
        }
    }

    const blob = new Blob(chunks)

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = filename + ".jpg";

    // document.body.appendChild(anchor);
    // anchor.click();
    // document.body.removeChild(anchor);

    // URL.revokeObjectURL(url);

    function handleOnDownload() {
      setTimeout(() => {
        URL.revokeObjectURL(url);

        anchor.removeEventListener("click", handleOnDownload);
      }, 150);
    }

    anchor.addEventListener("click", handleOnDownload, false);

    anchor.click();
  }

  return (
    <div>
      <div className="flex items-center ">
        <div className="rounded-lg overflow-hidden relative flex-none">
          <Image
            src={video.thumb}
            alt={video.title}
            width={500}
            height={400}
            // fill
            className="object-cover"
          />
          <div className="flex flex-col items-center pt-4">
            <p className="text-lg font-bold text-cream mb-2">{video.title}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full mt-6">
        <button
          className="text-tumeric font-bold bg-cream p-2 rounded hover:text-rust cursor-pointer"
          onClick={() => handleDownload(video.videoUrl, video.title)}
        >
          Download
        </button>
        <p className="grow">
          <span className="block relative h-6 w-full rounded overflow-hidden bg-cream">
            <span className={`block absolute top-0 left-0 w-full h-full bg-green-600 transition-[left] ${progress < 100 ? "animate-faderight bg-[length:400%] bg-gradient-to-r from-green-500": ""}`} style={{ left: `-${100 - progress}%` }}></span>
          </span>
          <span className="block text-xs font-bold mt-1">{ progress?.toFixed() }% Complete</span>
        </p>
      </div>
    </div>
  );
};

export default DownloadVideo;
