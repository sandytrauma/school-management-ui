import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleStudentPage = () => {
    return (
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* Left */}
            <div className="w-full xl:w-2/3">
                {/* Top */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* User info Card */}
                    <div className="bg-sandytraumaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="teacher profile image" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Leonardo da Vinci+</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/blood.png" alt='teachers blood group image' width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/date.png" alt='teachers blood group image' width={14} height={14} />
                                    <span>Jaunuary 2024</span>
                                </div>
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/mail.png" alt='teachers blood group image' width={14} height={14} />
                                    <span>user@gmail.com</span>
                                </div>
                                <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src="/phone.png" alt='teachers blood group image' width={14} height={14} />
                                    <span>+91 1234567890</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Small Cards */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleAttendance.png" alt="single attendance item image" width={24} height={24} className="w-6 h-6" />
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleLesson.png" alt="single lesson item image" width={24} height={24} className="w-6 h-6" />
                            <div className="">
                                <h1 className="text-xl font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleBranch.png" alt="single branch item image" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleClass.png" alt="single class item image" width={24} height={24}className="w-6 h-6" />
                            <div className="">
                                <h1 className="text-xl font-semibold">6A</h1>
                                <span className="text-sm text-gray-400">Class</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1>Student&apos;s Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-1/3 flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-sm text-gray-500">
                    <Link className="p-3 rounded-md bg-sandytraumaSkyLight" href="/">Student&apos;s Class</Link>
                    <Link className="p-3 rounded-md bg-sandytraumaPurpleLight" href="/">Student&apos;s Teachers</Link>
                    <Link className="p-3 rounded-md bg-sandytraumaYellowLight" href="/">Student&apos;s Results</Link>
                    <Link className="p-3 rounded-md bg-pink-50" href="/">Student&apos;s Exams</Link>
                    <Link className="p-3 rounded-md bg-sandytraumaSkyLight" href="/">Student&apos;s Assignments</Link>
                </div>
            </div>
            <Performance/>
            <Announcements/>
            </div>
        </div>
    )
}

export default SingleStudentPage
