"use client";
import { NavLinks } from "@repo/constants/navlinks";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="border border-neutral-500 rounded-lg px-4 py-2 shadow-[0_1px_14px_#DDD] bg-black/30 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <svg width="80" height="40" fill="none" viewBox="0 0 176 40">
          <path
            fill="#DDD"
            fill-rule="evenodd"
            d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#DDDDDD"
            d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          ></path>
        </svg>

        <div className="flex items-center justify-center gap-4">
          <div className="max-sm:hidden">
            {NavLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="text-neutral-300 hover:text-white transition tracking-wide font-medium m-2 first:ml-0 last:mr-0"
              >
                {title}
              </Link>
            ))}
          </div>
          <div
            className="sm:hidden"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            {clicked ? (
              <IconX color="#dedede" />
            ) : (
              <IconMenu2 color="#dedede" />
            )}
          </div>
        </div>
        <button className="max-sm:hidden bg-neutral-300 py-2 px-4 rounded-lg text-sm font-medium tracking-wider hover:bg-white transition">
          Sign up
        </button>
      </div>
      <AnimatePresence>
        {clicked && (
          <motion.div
            className="sm:hidden"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
              marginBottom: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: 16,
              marginBottom: 16,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {NavLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="sm:hidden text-neutral-300 hover:text-white transition font-medium tracking-wider block text-center my-2 first:mt-0 last:mb-0"
              >
                {title}
              </Link>
            ))}
            <div>
              <button className="sm:hidden bg-neutral-300 py-2 px-4 rounded-lg text-sm font-medium tracking-wider hover:bg-white transition mx-auto block">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
