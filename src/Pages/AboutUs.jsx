import aboutImage from "../img/about-us.png";

function AboutUs() {
  return (
    <>
      <div className="conainer mx-auto">
        <div className="flex justify-between px-16">
          <div className="w-[50%] flex items-center ">
            <div>
              <p className="text-3xl font-bold">
                Your Software <br />
                <span className="text-red-400 font-bold">
                  {" "}
                  Development
                </span>{" "}
                Partner
              </p>
              <p className="mt-4 text-gray-500">
                We are an imaginative team, driven by our collective passion to
                enhance the tech landscape. We thrive on diverse talents,
                bringing imaginative solutions to life and shaping the future of
                technology.
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <img
              className="w-full object-cover"
              src={aboutImage}
              alt="about us image"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f6f6f6] py-5">
        <div className="container mx-auto my-5">
          <p className="text-center text-3xl  font-bold ">
            We Help to Create Strategies, <br />
            Design & Development
          </p>
          <div className="flex justify-center items-center">
            <div className="flex gap-5">
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
