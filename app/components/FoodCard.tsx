"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface FoodCardProps {
  imageSrc: string;
  name: string;
  alt: string;
  slug: string;
  index?: number;
}

export default function FoodCard({
  imageSrc,
  name,
  alt,
  slug,
  index = 0,
}: FoodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={`/kuliner/${slug}`}
        aria-label={`Lihat detail ${alt}`}
        className="relative block w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[320px] sm:h-[360px] md:h-[400px] lg:h-[438px] rounded-2xl overflow-hidden flex-shrink-0 bg-terracotta group shadow-[0_4px_20px_rgba(45,42,38,0.08)] hover:shadow-[0_12px_40px_rgba(198,123,92,0.2)] transition-shadow duration-500"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 280px, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 bg-dark-bg/90 backdrop-blur-sm rounded-t-2xl px-5 sm:px-6 md:px-8 py-4 sm:py-5">
          <p className="font-playfair font-bold text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[1.2] tracking-[0.05em] text-cream whitespace-pre-line">
            {name}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
