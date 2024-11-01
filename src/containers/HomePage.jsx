import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header>
      <section
        style={{ backgroundImage: `url(${heroImage})` }}
        className="bg-cover  bg-center sm:bg-top flex items-center"
      >
        <div className="min-h-[calc(100svh-78px)] backdrop-brightness-50 w-full flex flex-col gap-3 justify-center pl-5 items-start">
          <h1 className="sm:text-5xl  text-4xl font-bold text-neutral-100">
            Welcome to <span className="text-yellow-500">TrendiQ</span>
          </h1>
          <p className="text-sm sm:w-96 w-80 text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus sit voluptatibus quidem. Ad odit facilis animi!
            Labore ullam maxime asperiores magnam, pariatur harum accusantium
            quos debitis, beatae consectetur blanditiis sit.
          </p>
          <Link to="/shop">
            <button className="border-2 transition border-yellow-500 hover:border-white text-white  hover:text-yellow-400 font-medium py-2 px-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Home;
