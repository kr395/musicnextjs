import Link from "next/link";

export default function HeroSection(){
    return(
        <div
         className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >
            <div className="p-4 relative z-10 w-full text-center">
            <h1>
                Master the art of Music
                </h1>
               <p> Dive into our comprehensive music courses And transform your musical journey today. Whether you are a beginner Or looking to refine your skills, Join us to unlock your true potential </p>
               <div className="mt-4">
                <Link href={"/courses"}>Explore Courses</Link>
               </div>
            </div>
            
        </div>
    )
}