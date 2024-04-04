'use client'
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';

const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

function HoverCard() {
  return (
    <div className='bg-black p-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
            <h2 className="text-teal-600 font-semibold text-base tracking-wide uppercase">FEATURED COURSES</h2>
            <p className="text-white mt-2 text-3xl leading-8 font-extrabold sm:text-4xl
            tracking-tight">Learn With The Best</p>
            </div>
    <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
        </div>
        <div className='mt-10 text-center'>
        <Link href={"/courses"}
            className="px-4 py-2 text-neutral-700 bg-white rounded border border-neutral-600
            hover:bg-gray-200 transition duration-300 ">
                View All Courses
            </Link>
        </div>
        </div>
        </div>
  )
}

export default HoverCard