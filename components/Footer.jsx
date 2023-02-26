"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import headset from "../public/headset.svg";
import gmail from "../public/gmail.svg";
import phone from "../public/phone.svg";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
      <div className="flex items-center justify-between flex-wrap gap-5 ">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Reach us at:
        </h4>

        <a href="mailto:joellsiby@gmail.com">
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src={gmail}
            alt="gmail"
            className="w-[24px] h-[24px] object-contain"
          />

        </button></a>

        <a href="tel:9567039711"> 
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src={phone}
            alt="phone"
            className="w-[24px] h-[24px] object-contain"
          />

        </button> </a>










       
        {/* <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src={headset}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
          24 * 7          </span>
        </button> */}

          <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Enhance Brands</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 Enhance Brands. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);
export default Footer;
