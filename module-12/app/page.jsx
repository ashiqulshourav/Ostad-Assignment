import GetAllCategories from "@/components/apiReq";
import Link from "next/link";

const Home = async () =>{
  const posts = await GetAllCategories();
  return(
    <>
      <div className="hero py-4 h-full flex items-center justify-center">
        <div className="hero-inner flex flex-col items-center justify-center gap-3 md:gap-8">
          <h1 className="text-xl md:text-6xl font-semibold"><span className="text-[#FDA402]">সুরভীতে</span> আপনাকে স্বাগতম।</h1>
          <p className="text-md md:text-lg">আমরা এখানে অনলাইনে বিভিন্ন রকমের খাবার বিক্রয় করি। আর এই সাইটে আমরা সুরভী সম্পর্কিত অনেক ধরনের ব্লগ পাবলিশ করি। ব্লগ পেজ থেকে বিভিন্ন ধরনের ব্লগ পড়তে পারেন। </p>
          <div className="blogs self-start w-full mt-10">
            <div className="blogs-inner">
              <div className="blog-header mb-5 md:mb-10">
                <h2 className="text-lg md:text-4xl font-semibold">এখানে আমাদের সকল পোস্ট ক্যাটাগরি দেওয়া হলো</h2>
              </div>
              <div className="blogs-body flex flex-wrap gap-10">
                  {posts.map(post =>{
                  return (
                    <Link className="blogs-item" href={`/post-list/${post.id}`}>
                      <div className="blogs-item-inner min-h-[150px] bg-slate-300 rounded flex items-center justify-center">
                        <p className="text-[20px] text-gray-700">{post.name}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>          
        </div>
      </div>
    </>
  )
}

export default Home;