import Charvar from "./components/Charvar";

// Ensure there's only one default export function Home
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Charvar />
    </main>
  );
}