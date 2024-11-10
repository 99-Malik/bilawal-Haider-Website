"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TextCallButton from "@/components/TextCallButton";

const LgHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed z-50 flex w-full items-center justify-center bg-white text-lg-text drop-shadow-sm ">
      <div className=" flex h-20 w-full max-w-[93rem] items-center gap-12 px-5 sm:px-7 md:px-10 ">
        <Link
          href="/services-centers/siemens"
          className="flex max-h-10 max-w-24 items-center"
        >
          {logo}
        </Link>
        <div className=" hidden cursor-pointer items-center justify-center gap-12 text-lg md:flex ">
          <h1 className="hover:color">
            <a>Home</a>
          </h1>
          <h1>
            <a>Services</a>
          </h1>
          <h1>
            <a>Contact Us</a>
          </h1>
        </div>

        <div className="ml-auto flex gap-4">
          <button onClick={handleMenuToggle}>{menu}</button>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute inset-0 z-50 flex h-screen justify-center bg-lg-bg px-5 py-10 text-lg-text sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex w-full max-w-[78rem] flex-col">
              <div className="flex w-full justify-between">
                <Link
                  href="/"
                  className="flex max-h-11 max-w-28 items-center"
                >
                  {logo}
                </Link>
                <button onClick={() => setShowMenu(false)}>{cross}</button>
              </div>
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col px-7 py-16"
              >
                <Link
                  href="/"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Home</span>
                  {chevron}
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Services</span>
                  {chevron}
                </Link>
                <TextCallButton />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="flex w-full items-center gap-x-5 px-5 py-16 sm:px-16"
              >
                <Image
                  src="/bosch/globe.svg"
                  width={50}
                  height={50}
                  alt="globe icon"
                />
                <span className="text-xl font-extralight sm:text-2xl">
                  Services available in Dubai and Abu Dhabi
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const logo = (
  <svg
    width="225"
    height="99"
    viewBox="0 0 225 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_415_130964)">
      <path
        d="M134.874 68.7831H165.274V81.2487H120.202V17.2373H134.874V68.7831Z"
        fill="#707070"
      />
      <path
        d="M197.534 56.8451H209.482V68.0462C207.288 68.8892 202.987 69.7323 198.905 69.7323C185.694 69.7323 181.301 62.9711 181.301 49.241C181.301 36.1374 185.483 28.4265 198.682 28.4265C206.039 28.4265 210.213 30.7533 213.675 35.1904L222.802 26.7376C217.227 18.726 207.5 16.2981 198.365 16.2981C177.83 16.2897 167.033 27.5807 167.033 49.1314C167.033 70.5753 176.79 82.2007 198.256 82.2007C208.113 82.2007 217.748 79.6716 222.992 75.9651V44.9078H197.534V56.8451Z"
        fill="#707070"
      />
      <path
        d="M83.831 84.5045C103.008 65.1736 103.007 33.831 83.829 14.499C64.6508 -4.83307 33.5576 -4.83396 14.3805 14.497C-4.79664 33.8279 -4.79576 65.1705 14.3825 84.5025C33.5607 103.835 64.6538 103.835 83.831 84.5045Z"
        fill="#A50034"
      />
      <path
        d="M61.1184 66.6079H51.0826V28.5984H47.3721V70.3594H51.0909V70.3341H61.1268L61.1184 66.6079Z"
        fill="white"
      />
      <path
        d="M86.1485 51.0737H61.1759V47.3447H89.8088C89.8479 48.0669 89.8674 48.7891 89.8674 49.5198C89.8674 71.9725 71.7136 90.1707 49.3252 90.1707C26.9368 90.1707 8.78027 71.9809 8.78027 49.5169C8.78027 27.053 26.9313 8.86597 49.3224 8.86597C49.9134 8.86597 50.5016 8.87814 51.0871 8.9025V12.6034C50.5016 12.5772 49.9153 12.5641 49.328 12.5641C28.9775 12.5641 12.474 29.11 12.474 49.5169C12.474 69.9239 28.9747 86.4726 49.328 86.4726C69.121 86.4726 85.2899 70.8175 86.1457 51.1777L86.1485 51.0737Z"
        fill="white"
      />
      <path
        d="M34.2066 39.8496C35.3263 39.8441 36.4193 39.5043 37.3476 38.8732C38.276 38.2421 38.9981 37.3479 39.4227 36.3036C39.8474 35.2592 39.9557 34.1114 39.7339 33.005C39.5121 31.8987 38.9701 30.8834 38.1764 30.0872C37.3827 29.2911 36.3728 28.7497 35.2742 28.5316C34.1756 28.3134 33.0374 28.4282 32.0035 28.8614C30.9695 29.2946 30.086 30.0268 29.4645 30.9657C28.8429 31.9046 28.5112 33.008 28.5112 34.1367C28.5131 34.8888 28.6618 35.6331 28.949 36.3273C29.2362 37.0214 29.6563 37.6517 30.1851 38.1822C30.714 38.7127 31.3413 39.133 32.0313 39.4191C32.7213 39.7052 33.4605 39.8515 34.2066 39.8496Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_415_130964">
        <rect width="223" height="99" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const menu = (
  <svg
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.16576 4.05908H21.4783C21.9098 4.05908 22.2595 3.70933 22.2595 3.27783V1.32471C22.2595 0.893213 21.9098 0.543457 21.4783 0.543457H1.16576C0.734262 0.543457 0.384506 0.893213 0.384506 1.32471V3.27783C0.384506 3.70933 0.734262 4.05908 1.16576 4.05908ZM1.16576 11.8716H21.4783C21.9098 11.8716 22.2595 11.5218 22.2595 11.0903V9.13721C22.2595 8.70571 21.9098 8.35596 21.4783 8.35596H1.16576C0.734262 8.35596 0.384506 8.70571 0.384506 9.13721V11.0903C0.384506 11.5218 0.734262 11.8716 1.16576 11.8716ZM1.16576 19.6841H21.4783C21.9098 19.6841 22.2595 19.3343 22.2595 18.9028V16.9497C22.2595 16.5182 21.9098 16.1685 21.4783 16.1685H1.16576C0.734262 16.1685 0.384506 16.5182 0.384506 16.9497V18.9028C0.384506 19.3343 0.734262 19.6841 1.16576 19.6841Z"
      fill="#4a4946"
    />
  </svg>
);
const cross = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.61526 1.61526C2.7868 0.443727 4.68633 0.443677 5.85791 1.61526L20 15.7574L34.1422 1.61526C35.3137 0.443687 37.2132 0.443667 38.3848 1.61526C39.5564 2.7868 39.5564 4.68629 38.3848 5.85787L24.2427 20L38.3848 34.1421C39.5564 35.3137 39.5564 37.2132 38.3848 38.3848C37.2132 39.5564 35.3137 39.5563 34.1422 38.3848L20 24.2426L5.85791 38.3848C4.68634 39.5563 2.78681 39.5563 1.61527 38.3848C0.443666 37.2132 0.443686 35.3137 1.61527 34.1421L15.7574 20L1.61527 5.85787C0.443696 4.6863 0.443656 2.78687 1.61526 1.61526Z"
      fill="#4a4946"
    />
  </svg>
);
const chevron = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999939 22C0.868332 22.0008 0.73787 21.9755 0.616033 21.9258C0.494195 21.876 0.383379 21.8027 0.289939 21.71C0.19621 21.617 0.121816 21.5064 0.0710478 21.3846C0.0202791 21.2627 -0.00585938 21.132 -0.00585938 21C-0.00585938 20.868 0.0202791 20.7373 0.0710478 20.6154C0.121816 20.4936 0.19621 20.383 0.289939 20.29L9.58994 11L0.289939 1.71C0.101635 1.5217 -0.00415278 1.2663 -0.00415277 1C-0.00415277 0.733701 0.101635 0.478306 0.289939 0.290002C0.478243 0.101699 0.733637 -0.00408935 0.999939 -0.00408936C1.26624 -0.00408936 1.52164 0.101699 1.70994 0.290002L11.7099 10.29C11.8037 10.383 11.8781 10.4936 11.9288 10.6154C11.9796 10.7373 12.0057 10.868 12.0057 11C12.0057 11.132 11.9796 11.2627 11.9288 11.3846C11.8781 11.5064 11.8037 11.617 11.7099 11.71L1.70994 21.71C1.6165 21.8027 1.50568 21.876 1.38385 21.9258C1.26201 21.9755 1.13155 22.0008 0.999939 22Z"
      fill="#4a4946"
    />
  </svg>
);

export default LgHeader;
