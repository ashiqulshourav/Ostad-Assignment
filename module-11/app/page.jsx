import Link from "next/link";

const Home = () =>{
  return(
    <>
      <div className="hero py-4 h-full flex items-center justify-center">
        <div className="hero-inner flex flex-col items-center justify-center gap-3 md:gap-8">
          <h1 className="text-xl md:text-6xl font-semibold"><span className="text-[#FDA402]">সুরভীতে</span> আপনাকে স্বাগতম।</h1>
          <p className="text-md md:text-lg">আমরা এখানে অনলাইনে বিভিন্ন রকমের খাবার বিক্রয় করি। আর এই সাইটে আমরা সুরভী সম্পর্কিত অনেক ধরনের ব্লগ পাবলিশ করি। ব্লগ পেজ থেকে বিভিন্ন ধরনের ব্লগ পড়তে পারেন। </p>
          <span className="bg-black rounded p-2 px-4 text-white"><Link href={"/blogs"}>ব্লগ পড়ুন</Link></span>
        </div>
      </div>
    </>
  )
}

export default Home;