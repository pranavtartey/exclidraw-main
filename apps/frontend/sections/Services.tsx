import LogoTicker from "@/components/Logoticker";

const Services = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        {/* <div>
          <h2 className="section-heading">Services</h2>
          <p className="section-description mt-4">
            We provide you the immersive experience
          </p>
        </div> */}
        <div>
          <div className="relative overflow-hidden">
            <div className="border border-neutral-500 h-7 [mask-image:linear-gradient(to_bottom,black,transparent_80%)] rounded-full" />
            <div className="absolute -top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-[linear-gradient(to_bottom,rgba(193,52,57,0.3),rgba(252,160,163,0.8))] border h-60 w-60  blur-3xl " />
            <p className="section-description-short mt-4">
              Trusted by 1000+ users, backed by these technologies that never let you down.
            </p>
            <div className="w-fit md:w-[400px] lg:w-[800px] mx-auto mt-10">
              <LogoTicker />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
