import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      
      <h1 className="sr-only">SD Kudangan 2</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        
        <span className="font-bold">SD Kudangan 2 </span> adalah sekolah yang mengedepankan siswa untuk mendapatkan perhatian maksimal perihal <span className="bg-green-200">intelektual</span> dan <span className="bg-red-300">kerohanian</span>
      </p>
      {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
    </div>
  );
}
