import {
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconPhoneRinging,
} from "@tabler/icons-react";

const Footer = () => {
  const email = "pranavtartey@gmail.com";
  const subject = "Impressive Tool";
  const body = `
    Dear Pranav Team,

I hope this message finds you well!

I would like to:

This is a nice productivity tool that you have created. We would like to discuss more possibilities with this tool.

Thank you,
Website visitor
  `;

  return (
    <section className="">
      <div className="container py-[72px]">
        <div className="w-fit mx-auto">
          <div className="flex gap-2">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
            >
              <IconMail color="#d4d4d4" />
            </a>
            <a href="tel:7651812618" target="_blank">
              <IconPhoneRinging color="#d4d4d4" />
            </a>
            <a href="https://x.com/pranav_tartey" target="_blank">
              <IconBrandX color="#d4d4d4" />
            </a>
            <a href="https://www.linkedin.com/in/pranavtartey/" target="_blank">
              <IconBrandLinkedin color="#d4d4d4" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-neutral-300 py-2 text-center">
        Made with ❤️ by{" "}
        <a
          target="_blank"
          href="https://www.pranavtartey.com/"
          className="underline underline-offset-2"
        >
          Pranav Tartey
        </a>
      </p>
    </section>
  );
};

export default Footer;
