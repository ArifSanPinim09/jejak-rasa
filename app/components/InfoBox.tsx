import { KulinerInfo } from "../_lib/types";

export default function InfoBox({ address, phone, hours, price }: KulinerInfo) {
  return (
    <div className="bg-dark-surface rounded-2xl p-5 sm:p-6 md:p-8 w-full max-w-[758px] border border-white/[0.06]">
      <div className="font-inter text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.02em] text-dark-text space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-dark-muted font-medium">Alamat</span>
          <span className="text-dark-text/80">: {address}</span>
        </div>
        <div className="w-full h-[1px] bg-white/[0.06]" />
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-dark-muted font-medium">No Telp</span>
          <span className="text-dark-text/80">: {phone}</span>
        </div>
        <div className="w-full h-[1px] bg-white/[0.06]" />
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-dark-muted font-medium">Jam Operasional</span>
          <span className="text-dark-text/80">: {hours}</span>
        </div>
        <div className="w-full h-[1px] bg-white/[0.06]" />
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <span className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-dark-muted font-medium">Estimasi Harga</span>
          <span className="text-dark-text/80">: {price}</span>
        </div>
      </div>
    </div>
  );
}
