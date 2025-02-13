import USPCard from "@/components/USPCard";
import { USPData } from "@/constants/USPData";

const USP = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="mb-12">
          <h2 className="bg-gradient-to-b from-white to-neutral-400 pb-2 text-transparent bg-clip-text text-4xl md:text-5xl font-semibold">
            <span className="block">Your ideas,</span>
            <span className="block"> Our platform</span>
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {USPData.map((data, idx) => (
              <USPCard key={idx} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
