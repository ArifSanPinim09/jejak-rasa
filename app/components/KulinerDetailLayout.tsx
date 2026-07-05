import { ColorScheme } from "../_lib/types";

interface KulinerDetailLayoutProps {
  colorScheme: ColorScheme;
  children: React.ReactNode;
}

export default function KulinerDetailLayout({
  colorScheme,
  children,
}: KulinerDetailLayoutProps) {
  return (
    <div
      className={`relative min-h-screen ${
        colorScheme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-cream text-foreground"
      }`}
    >
      <div className="w-full max-w-[960px] mx-auto px-6 md:px-12 lg:px-16 py-8 pt-24">
        {children}
      </div>
    </div>
  );
}
