"use client";
import React from "react";
import Image from "next/image";
import HyundaiLogo from "@/../public/famous-brand-logo-Hyundai.png";
import { motion } from "framer-motion";

const images = [
  { src: HyundaiLogo, alt: "أفوكادو على خلفية وردية" },
  { src: HyundaiLogo, alt: "يد تحمل كيس قمامة" },
  { src: HyundaiLogo, alt: "مخروط آيس كريم فارغ" },
  { src: HyundaiLogo, alt: "كوب قهوة مع مكعبات سكر" },
  { src: HyundaiLogo, alt: "برتقالة زرقاء مقطوعة إلى نصفين" },
  { src: HyundaiLogo, alt: "كرز على خلفية نعناع" },
];

const Gallery = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-black">الأعمال</span>{" "}
        <span className="text-[#27519c]">المختارة</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-full p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
