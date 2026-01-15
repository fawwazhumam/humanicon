import * as Icon from "humanicon";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Heros";
import IconGrid from "@/components/IconGrid";

export default function Home() {
  return (
    <main className="bg-white relative min-h-screen w-full overflow-x-hidden font-sans">
      {/* Background Blobs (Bisa dipisah jadi component background sendiri kalau mau) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-100px] top-[-250px] w-[500px] h-[500px] bg-blue-600/40 blur-[150px] rounded-full" />
        <div className="absolute left-[-200px] top-[100px] w-[400px] h-[400px] bg-blue-800/30 blur-[150px] rounded-full" />
      </div>

      {/* Footer Blue Background */}
      <div className="fixed bottom-0 left-0 right-0 h-[300px] bg-[#2c76ff] pointer-events-none -z-10" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <IconGrid />

        <div className="flex justify-center pb-20">
          <p className="text-white text-sm font-medium">made with art style</p>
        </div>
      </div>
    </main>
  );
}
