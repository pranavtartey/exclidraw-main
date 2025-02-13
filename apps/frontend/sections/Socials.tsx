import linkedIn from "@/assets/linkedin-logo.png";
import twitter from "@/assets/twitter-logo.png";
import mail from "@/assets/mail-logo.png";
import Image from "next/image";

const Socials = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="bg-blue-600 rounded-lg py-4 lg:w-[60%] mx-auto">
          <h3 className="text-3xl font-medium text-neutral-300 text-center mb-8">
            Let&apos;s Connect
          </h3>
          <div className="w-fit mx-auto flex gap-4">
            <Image
              src={linkedIn}
              alt="linkedin-logo"
              className="w-10 cursor-pointer"
            />
            <Image src={mail} alt="mail-logo" className="w-10 cursor-pointer" />
            <Image
              src={twitter}
              alt="twitter-logo"
              className="w-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
