import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getKulinerBySlug, getAllSlugs } from "../../_lib/kuliner-data";
import KulinerDetailLayout from "../../components/KulinerDetailLayout";
import InfoBox from "../../components/InfoBox";
import AnimatedSection from "../../components/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getKulinerBySlug(slug);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.name} — Jejak Rasa`,
    description: item.descriptions[0].substring(0, 160),
  };
}

export default async function KulinerDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getKulinerBySlug(slug);
  if (!item) notFound();

  return (
    <KulinerDetailLayout colorScheme={item.colorScheme}>
      <div className="flex flex-col items-center">
        <AnimatedSection>
          <h1 className="font-playfair text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-center mt-8 mb-10 md:mb-14 tracking-[0.02em]">
            {item.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="w-full mb-10 md:mb-14 flex justify-center">
          <div className="relative w-full max-w-[960px]">
            <Image
              src={item.images[0].src}
              alt={item.images[0].alt}
              width={960}
              height={640}
              className="w-full h-auto object-contain"
              sizes="(max-width: 960px) 100vw, 960px"
              priority
            />
          </div>
        </AnimatedSection>

        <div className="w-full space-y-5 sm:space-y-6 md:space-y-7 mb-10 md:mb-14">
          {item.descriptions.map((desc, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.1}>
              <p
                className={`font-inter text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.02em] text-justify leading-[1.8] ${
                  item.colorScheme === "dark"
                    ? "text-dark-text/80"
                    : "text-foreground-muted"
                }`}
              >
                {desc}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {item.info && (
          <AnimatedSection delay={0.3} className="w-full flex justify-center mb-10 md:mb-14">
            <InfoBox
              address={item.info.address}
              phone={item.info.phone}
              hours={item.info.hours}
              price={item.info.price}
            />
          </AnimatedSection>
        )}
      </div>
    </KulinerDetailLayout>
  );
}
