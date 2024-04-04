"use client";
import Link from "next/link"
import Courses from "../data/our_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
    id:number,
    title:string,
    description:string,
    instructor:string,
    price:number,
    isFeatured:boolean
}
                                
function FeaturedCourses() {
   const featuredCourses= Courses.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className="py-12 bg-gray-900" >
        <div>
           <div className="text-center">
            <h2 className="text-teal-600 font-semibold text-base tracking-wide uppercase">FEATURED COURSES</h2>
            <p className="text-white mt-2 text-3xl leading-8 font-extrabold sm:text-4xl
            tracking-tight">Learn With The Best</p>
           </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Course)=>(
             <div key={course.id} className="flex justify-center">
                
                <BackgroundGradient  className="flex flex-col overflow-hidden rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                   <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{course.description}</p>
                    </div> </BackgroundGradient>
                </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 text-neutral-700 bg-white rounded border border-neutral-600
            hover:bg-gray-200 transition duration-300 ">
                View All Courses
            </Link>
        </div>
        
    </div>
  )
}

export default FeaturedCourses