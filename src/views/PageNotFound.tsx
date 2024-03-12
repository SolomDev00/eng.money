import { Link } from "react-router-dom";
import BackgroundImg from "../assets/landing.jpg";

const PageNotFound = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-notfound">
      <div className={`video-background`}>
        <img
          id="video-background"
          src={BackgroundImg}
          alt="background"
          className="dark:hidden"
        />
      </div>
      <div className="overlayNotFound dark:bg-[#000000cc]" />
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-black dark:text-white text-9xl">
              404
            </h1>
            <p className="mb-2 text-2xl font-bold text-center md:text-3xl text-black dark:text-white">
              <span className="text-red-600">Oops!</span>{" "}
              <span>Page not found</span>
            </p>
            <p className="mb-8 text-center md:text-lg text-gray-500">
              The page you’re looking for doesn’t exist.
            </p>
            <Link
              to={"/"}
              className="inline-block bg-yhover p-2 text-black hover:bg-yhover/80 rounded-md duration-300"
              reloadDocument
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
