"use client";

import { useEffect, useRef, useState } from "react";

const kulinerLocations = [
  {
    name: "Combro Bu Aminah",
    position: [-6.2146, 106.8629] as [number, number],
    slug: "combro-bu-aminah",
  },
  {
    name: "Siomay Wawa",
    position: [-6.2173, 106.8651] as [number, number],
    slug: "siomay-wawa",
  },
  {
    name: "Cakwe Wastafel",
    position: [-6.2204, 106.8651] as [number, number],
    slug: "cakwe-wastafel",
  },
  {
    name: "Bakmi Lorong",
    position: [-6.2168, 106.8653] as [number, number],
    slug: "bakmi-lorong",
  },
  {
    name: "Sate Keroncong",
    position: [-6.2155, 106.8660] as [number, number],
    slug: "sate-keroncong",
  },
  {
    name: "Soto Ni'mat Betawi",
    position: [-6.2155, 106.8660] as [number, number],
    slug: "soto-nimat-betawi",
  },
  {
    name: "Kopi Bis Kota",
    position: [-6.2173, 106.8661] as [number, number],
    slug: "kopi-bis-kota",
  },
  {
    name: "Gelora Bakery",
    position: [-6.2205, 106.8667] as [number, number],
    slug: "gelora-bakery",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cleanupContainer(container: any) {
  if (!container) return;
  if (container._leaflet_id) {
    delete container._leaflet_id;
  }
  container.innerHTML = "";
}

export default function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any = null;

    const initMap = async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      if (cancelled) return;

      // Fix marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      if (cancelled) return;

      // Clean up any leftover Leaflet state on the container (Strict Mode safety)
      cleanupContainer(container);

      map = L.map(container).setView([-6.2170, 106.8655], 16);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      kulinerLocations.forEach((loc) => {
        const marker = L.marker(loc.position).addTo(map);
        marker.bindPopup(
          `<a href="/kuliner/${loc.slug}" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 600; color: #C67B5C; text-decoration: none;">${loc.name}</a>`
        );
      });

      if (!cancelled) setLoaded(true);
    };

    initMap();

    return () => {
      cancelled = true;
      if (map) {
        map.remove();
        map = null;
      }
      cleanupContainer(container);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-2xl" />
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream rounded-2xl gap-3">
          <div className="w-8 h-8 border-2 border-terracotta/30 border-t-terracotta rounded-full animate-spin" />
          <p className="font-inter text-[14px] text-foreground-muted">
            Memuat peta...
          </p>
        </div>
      )}
    </div>
  );
}
