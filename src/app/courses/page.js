import CourseCard from '@/components/CourseCard'
import Navbar from '@/components/Navbar'
import { courses } from '@/lib/courses'
import Link from 'next/link'
import Footer from '@/components/Footer'

const Courses = () => {
  return (
    <div>
      <Navbar />
      <h1 className='mt-8'>All Courses</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 max-w-7xl'>
        {
          courses.map(course => (
            <CourseCard key={course.id} course={course}/>
          ))
        }
      </div>
      <p className='mt-8'>
        <Link href="/" className='underline hover:text-tumeric'>Go Home</Link>
      </p>

      <Footer />
    </div>
  )
}

export default Courses