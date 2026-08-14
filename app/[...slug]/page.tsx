import AppRedirect from "../AppRedirect";
import BootBackground from "../BootBackground";

// This page handles any path that isn't explicitly defined (like /cart, /message, etc.)
// It displays a simple "Opening App" message while the redirect logic runs.

export default function CatchAllPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      <BootBackground />

      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter italic">
          DADU <span className="text-orange-500">KHELAGHOR</span>
        </h1>

        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-xl text-gray-400 font-medium">Opening Dadu App...</p>
          <p className="text-sm text-gray-500">Redirecting you to the best sports gear in Bangladesh.</p>
        </div>
      </div>

      {/* The client-side component that handles the actual Android Intent redirect */}
      <AppRedirect />
    </main>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: ['cart'] },
    { slug: ['message'] },
    { slug: ['profile'] },
    { slug: ['search'] },
    { slug: ['earn-coins'] },
  ];
}
