import CourseCard from '@/components/CourseCard'
import { courses } from '@/lib/courses'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className='mx-5'>
      <h1 className='mt-8'>All Courses</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 max-w-7xl'>
        {
          courses.map(course => (
            <CourseCard key={course.id} course={course}/>
          ))
        }
      </div>
      <p className='mt-16'>
        <Link href="/" className='underline hover:text-tumeric'>Go Home</Link>
      </p>

    </div>
  )
}

export default Courses