import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid px-4 bg-slate-200 py-3 fixed bottom-0 w-full">
        <div className="container mx-auto">
          <footer className="footer">
            <div className="footer-inner">
              <p className="text-center">
                copyright by{" "}
                <Link
                  to="https://github.com/ashiqulshourav"
                  target="_blank"
                  className="link text-blue-700 underline"
                >
                  ashiqulshourav
                </Link>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
