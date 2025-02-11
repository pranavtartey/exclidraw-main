import Image from "next/image";
import underline from "@/assets/underline-vector.png";
const Hero = () => {
  return (
    <section className="h-screen">
      <div className="container h-full flex items-center justify-center">
        <div className="">
          <div className="my-8">
            <p className="text-start sm:text-center text-sm sm:text-lg tracking-wider text-neutral-400">
              Collaboration made simple with Draw
            </p>
            <h2 className="text-5xl sm:text-6xl text-neutral-300 text-start sm:text-center font-semibold tracking-wide">
              <span>
                Your{" "}
                <span className="text-rose-600 inline-flex flex-col items-center justify-center gap-2">
                  Collaborative{" "}
                  <Image
                    src={underline}
                    alt="underline-image"
                    width={500}
                    className="w-40"
                  />
                </span>{" "}
              </span>
              <br />
              <span className="">Productivity Tool</span>
            </h2>
          </div>
          <div className="">
            <div className="w-fit max-sm:w-full mx-auto">
              <button className="text-black font-medium bg-neutral-300 rounded-lg py-1 px-2 hover:bg-rose-600 transition hover:text-neutral-300 w-full sm:w-32 mx-2 my-2">
                Get Started
              </button>
              <button className="text-white border border-neutral-600 hover:border-neutral-400 transition rounded-lg py-1 px-2 w-full sm:w-32 mx-2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
