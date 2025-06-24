import CourseList from "@/components/CourseList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex bg-cream w-full h-75 mt-8 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center">
          <Image src="/Asset3.svg" alt="logo" width={120} height={60}/>
          <p className="text-forest text-[19px] pt-2">For the people who know me, buy me a coffee!</p>
          <p className="text-forest text-[19px] pt-2">For the people testing, use the <strong>tester</strong> category. Thanks!</p>
        </div>
      </div>

      <div>
        <CourseList />
      </div>
      
      <Footer />
    </div>
  );
}
