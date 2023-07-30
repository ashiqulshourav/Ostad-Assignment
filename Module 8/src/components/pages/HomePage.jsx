import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid px-4 py-5">
        <div className="container mx-auto">
          <div className="banner all-center min-h-[500px]">
            <div className="banner-inner">
              <p className="mb-2">
                Here you can Track your income & expense list. This is creating
                by <strong>React</strong>.
              </p>
              <div className="banner-links flex justify-around">
                <Link
                  to={"/income"}
                  className="bg-blue-500 px-5 py-1 rounded text-white hover:bg-blue-600 transition"
                >
                  income
                </Link>
                <Link
                  to={"/expense"}
                  className="bg-blue-500 px-5 py-1 rounded text-white hover:bg-blue-600 transition"
                >
                  expense
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
