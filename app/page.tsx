import Image from "next/image";
import Link from "next/link";
import FoodCard from "./components/FoodCard";
import AnimatedSection from "./components/AnimatedSection";
import LeafletMap from "./components/LeafletMap";

const foodItems = [
  {
    imageSrc: "/images/card-combro.png",
    name: "Combro\nBu Aminah",
    alt: "Combro Bu Aminah",
    slug: "combro-bu-aminah",
  },
  {
    imageSrc: "/images/card-siomay.png",
    name: "Siomay\nWawa",
    alt: "Siomay Wawa",
    slug: "siomay-wawa",
  },
  {
    imageSrc: "/images/card-cakwe.png",
    name: "Cakwe\nWastafel",
    alt: "Cakwe Wastafel",
    slug: "cakwe-wastafel",
  },
  {
    imageSrc: "/images/food-bakmi.png",
    name: "Bakmi\nLorong",
    alt: "Bakmi Lorong",
    slug: "bakmi-lorong",
  },
  {
    imageSrc: "/images/food-sate.png",
    name: "Sate\nKeroncong",
    alt: "Sate Keroncong",
    slug: "sate-keroncong",
  },
  {
    imageSrc: "/images/food-soto.png",
    name: "Soto Ni'mat\nBetawi",
    alt: "Soto Ni'mat Betawi",
    slug: "soto-nimat-betawi",
  },
  {
    imageSrc: "/images/card-kopi-bis-kota.png",
    name: "Kopi Bis\nKota",
    alt: "Kopi Bis Kota",
    slug: "kopi-bis-kota",
  },
  {
    imageSrc: "/images/card-gelora-bakery.png",
    name: "Gelora\nBakery",
    alt: "Gelora Bakery",
    slug: "gelora-bakery",
  },
];

const foodListItems = [
  { name: "Combro Bu Aminah", slug: "combro-bu-aminah" },
  { name: "Siomay Wawa", slug: "siomay-wawa" },
  { name: "Cakwe Wastafel", slug: "cakwe-wastafel" },
  { name: "Bakmi Lorong", slug: "bakmi-lorong" },
  { name: "Sate Keroncong", slug: "sate-keroncong" },
  { name: "Soto Ni'mat Betawi", slug: "soto-nimat-betawi" },
  { name: "Kopi Bis Kota", slug: "kopi-bis-kota" },
  { name: "Gelora Bakery", slug: "gelora-bakery" },
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Jatinegara"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-[89px]">
          <AnimatedSection>
            <h1 className="font-playfair font-normal text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-none tracking-[0.15em] text-cream drop-shadow-[0px_4px_20px_rgba(45,42,38,0.4)]">
              JEJAK
              <br />
              RASA
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-playfair text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.15em] text-cream/90 mt-4 drop-shadow-[0px_2px_8px_rgba(45,42,38,0.6)]">
              Menelusuri Rasa, Mengungkap Cerita Jatinegara
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="font-inter text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-cream/70 mt-3 max-w-[600px] leading-relaxed drop-shadow-[0px_2px_4px_rgba(45,42,38,0.6)]">
              Jelajahi kekayaan kuliner kawasan Jatinegara yang telah menjadi
              bagian dari sejarah dan budaya Jakarta selama ratusan tahun.
              Dari cita rasa tradisional hingga pengalaman kuliner urban yang
              autentik.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <a
              href="#tentang"
              className="mt-8 flex items-center gap-3 bg-terracotta/70 rounded-full px-7 py-3 hover:bg-terracotta transition-all duration-300 hover:shadow-[0_8px_30px_rgba(198,123,92,0.3)]"
            >
              <span className="font-playfair text-[14px] sm:text-[16px] tracking-[0.1em] text-cream">
                Tentang Jejak Rasa
              </span>
              <span className="w-[30px] sm:w-[45px] h-[2px] bg-cream/60" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ABOUT / TENTANG SECTION ===== */}
      <section id="tentang" className="w-full bg-cream py-16 md:py-24 px-6 md:px-[44px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <AnimatedSection direction="left" className="flex-1">
            <p className="font-inter text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-terracotta mb-4">
              Tentang Kawasan
            </p>
            <h2 className="font-playfair text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-foreground leading-tight">
              KAWASAN
              <br />
              JATINEGARA
            </h2>
            <p className="font-inter text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-foreground-muted tracking-[0.02em] text-justify mt-6 leading-[1.8]">
              Di balik hiruk-pikuk aktivitas perkotaan Jakarta, Jatinegara
              menyimpan jejak sejarah dan budaya yang telah berkembang selama
              ratusan tahun. Kawasan ini dikenal sebagai salah satu pusat
              perdagangan tertua di Jakarta yang menjadi tempat bertemunya
              berbagai kelompok masyarakat dengan latar belakang budaya yang
              beragam.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2} className="flex-1 w-full">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { src: "/images/about-image.png", alt: "Kawasan Jatinegara" },
                { src: "/images/combro-bu-aminah.png", alt: "Combro Bu Aminah" },
                { src: "/images/siomay-wawa.png", alt: "Siomay Wawa" },
                { src: "/images/cakwe-wastafel.png", alt: "Cakwe Wastafel" },
                { src: "/images/bakmi-lorong.png", alt: "Bakmi Lorong" },
                { src: "/images/sate-keroncong.png", alt: "Sate Keroncong" },
                { src: "/images/soto-nimat-betawi.png", alt: "Soto Ni'mat Betawi" },
                { src: "/images/kopi-bis-kota.png", alt: "Kopi Bis Kota" },
                { src: "/images/gelora-bakery.png", alt: "Gelora Bakery" },
              ].map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, 300px"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== JELAJAH KULINER SECTION ===== */}
      <section id="kuliner" className="w-full bg-cream-deep py-16 md:py-24 grain-overlay">
        <AnimatedSection className="px-6 md:px-[44px]">
          <p className="font-inter text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-terracotta mb-2">
            Kuliner Khas
          </p>
          <h2 className="font-playfair text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-foreground mb-4">
            Jelajah Kuliner
          </h2>
          <p className="font-inter text-[14px] sm:text-[15px] text-foreground-muted max-w-[500px] mb-10 md:mb-14">
            Temukan cita rasa autentik kawasan Jatinegara yang telah menjadi
            bagian dari budaya kuliner Jakarta selama berabad-abad.
          </p>
        </AnimatedSection>
        <div className="flex gap-6 md:gap-8 overflow-x-auto px-6 md:px-[44px] pb-4 scrollbar-hide">
          {foodItems.map((item, index) => (
            <FoodCard
              key={item.slug}
              imageSrc={item.imageSrc}
              name={item.name}
              alt={item.alt}
              slug={item.slug}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* ===== LOKASI KULINER SECTION ===== */}
      <section id="lokasi" className="w-full bg-cream py-16 md:py-24 px-6 md:px-[44px]">
        <AnimatedSection>
          <p className="font-inter text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-terracotta mb-2">
            Jelajahi Lokasi
          </p>
          <h2 className="font-playfair text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-foreground mb-4">
            Lokasi Kuliner
          </h2>
          <p className="font-inter text-[14px] sm:text-[15px] text-foreground-muted max-w-[500px] mb-10 md:mb-14">
            Kunjungi langsung kuliner-kuliner legendaris yang tersebar di
            kawasan Jatinegara, Jakarta Timur.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[749px] rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(45,42,38,0.1)] border border-border">
            <LeafletMap />
          </div>
        </AnimatedSection>
      </section>

      {/* ===== FOOTER ===== */}
      <AnimatedSection>
        <footer className="w-full bg-dark-bg rounded-t-2xl py-14 md:py-20 px-6 md:px-[44px] grain-overlay">
          <div className="max-w-[1280px] mx-auto">
            {/* Top: Brand + Nav */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
              <div className="text-center md:text-left">
                <h3 className="font-playfair text-[24px] md:text-[28px] text-dark-text tracking-[0.1em]">
                  Jejak Rasa
                </h3>
                <p className="font-inter text-[13px] md:text-[14px] text-dark-muted mt-2 max-w-[280px]">
                  Menelusuri Rasa, Mengungkap Cerita Jatinegara
                </p>
              </div>
              <ul className="flex flex-wrap justify-center gap-6">
                {[
                  { label: "Beranda", href: "/" },
                  { label: "Tentang", href: "#tentang" },
                  { label: "Kuliner", href: "#kuliner" },
                  { label: "Lokasi", href: "#lokasi" },
                ].map((nav) => (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className="font-inter text-[13px] md:text-[14px] text-dark-muted hover:text-dark-text transition-colors duration-300"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.08] mb-10" />

            {/* Middle: Kuliner List */}
            <div className="mb-10">
              <p className="font-playfair text-[16px] md:text-[18px] text-dark-text mb-5">
                Jelajah Kuliner
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3">
                {foodListItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/kuliner/${item.slug}`}
                    className="font-inter text-[13px] md:text-[14px] text-dark-muted hover:text-dark-text transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.08] mb-8" />

            {/* Bottom: Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-inter text-[12px] md:text-[13px] text-dark-muted/60">
                © 2026 Jejak Rasa. Semua hak dilindungi.
              </p>
              <p className="font-inter text-[12px] md:text-[13px] text-dark-muted/60">
                Dibuat dengan ❤️ untuk Jatinegara
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.08] mb-6 mt-8" />

            {/* About Author */}
            <div className="text-center">
              <p className="font-playfair text-[14px] md:text-[15px] text-dark-text mb-2">
                Tentang Penulis
              </p>
              <p className="font-inter text-[12px] md:text-[13px] text-dark-muted leading-relaxed max-w-[600px] mx-auto">
                Microsite ini dikembangkan oleh{" "}
                <span className="text-dark-text font-medium">
                  Zairi Raihan Ramadhan
                </span>
                , mahasiswa D4 Ekowisata, Sekolah Vokasi IPB University. Jejak
                Rasa merupakan media interpretasi digital yang dirancang untuk
                mengenalkan wisata kuliner berbasis sejarah di Jatinegara
                melalui pendekatan storytelling dan desain interaktif.
              </p>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </main>
  );
}
