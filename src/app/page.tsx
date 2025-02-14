import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className='home text-center flex flex-col items-center justify-center h-[calc(100vh-58px)]' >
            <h1 className="text-8xl">Welcome Data Dashborad </h1>
            
            <Link  href={"./Dashboard"} className='text-blue-600 font-bold mt-[10px] z-10 '>Click here to go to dashboard</Link>
        </div>
    </>
  );
}
