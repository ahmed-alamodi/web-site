'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HyundaiLogo from "@/../public/famous-brand-logo-Hyundai.png";

const HeroSection: React.FC = () => {
  return (
    <motion.div
      className="my-4 h-[calc(100vh-88px)] flex justify-between items-center bg-gray-100 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">
          مرحبًا بكم في موقعنا
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          نحن سعداء بوجودكم هنا. استكشفوا محتوياتنا ولا تترددوا في التواصل معنا
          إذا كانت لديكم أي أسئلة.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src={HyundaiLogo} alt="Hyundai Logo" className="w-[530px]" />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
