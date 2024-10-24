import { Typewriter } from "react-simple-typewriter";
import img2 from "../img/block-image-1.svg";
import img3 from "../img/block-image-2.svg";

function Home() {
  const handleType = (count) => {
    // Access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log("Done after 5 loops!");
  };

  return (
    <div className=" ">
      <div className="container mx-auto">
        <div className="mx-auto px-10 md:px-12 lg:px-14">
          <h1
            className="text-3xl"
            style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "bold" }}
          >
            We Create{" "}
            <span className="text-red-400 font-bold">
              <Typewriter
                words={["Mobile", "App", "IoT", "AI", "Data Analytics", "Game"]}
                loop={5}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
            <br />
            Experiences
          </h1>
          <p>
            We deliver value to hundreds of leading businesses, which have
            derived strategic benefits from our transformative solutions. Let’s
            speak about your project.
          </p>
          <div className="lg:flex lg:flex-1 lg:justify-start">
            <button
              type="button"
              className="text-white bg-red-400 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 py-10">
        <div className="container mx-auto">
          <div className="flex">
            <div>
              <img
                className="hover:scale-105 transition-transform duration-999 ease-in"
                src={img2}
                alt=""
              />
              <h1 className="font-bold text-3xl mt-10">
                Solution focused, not hours focused
              </h1>
              <p>
                Instead of just counting hours, we think it's important to
                provide solutions. We are not just timekeepers; we are the
                problem solvers. Our approach is centered on your needs, and we
                make sure that every line of code contributes meaningful and
                efficient solutions.
              </p>
            </div>
            <div className="mt-40">
              <img
                className="hover:scale-105 transition-transform duration-999 ease-in"
                src={img3}
                alt=""
              />
              <h1 className="font-bold text-3xl mt-10">
                Solution focused, not hours focused
              </h1>
              <p>
                Instead of just counting hours, we think it's important to
                provide solutions. We are not just timekeepers; we are the
                problem solvers. Our approach is centered on your needs, and we
                make sure that every line of code contributes meaningful and
                efficient solutions.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                className="hover:scale-105 transition-transform duration-999 ease-in"
                src={img2}
                alt=""
              />
              <h1 className="font-bold text-3xl mt-10">
                Solution focused, not hours focused
              </h1>
              <p>
                Instead of just counting hours, we think it's important to
                provide solutions. We are not just timekeepers; we are the
                problem solvers. Our approach is centered on your needs, and we
                make sure that every line of code contributes meaningful and
                efficient solutions.
              </p>
            </div>
            <div className="mt-40">
              <img
                className="hover:scale-105 transition-transform duration-999 ease-in"
                src={img3}
                alt=""
              />
              <h1 className="font-bold text-3xl mt-10">
                Solution focused, not hours focused
              </h1>
              <p className="my-10">
                Instead of just counting hours, we think it's important to
                provide solutions. We are not just timekeepers; we are the
                problem solvers. Our approach is centered on your needs, and we
                make sure that every line of code contributes meaningful and
                efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
