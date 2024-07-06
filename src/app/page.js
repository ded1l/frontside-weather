import Charvar from './components/Charvar';
import History from './components/History';

export default function Home() {
  // Removed the incorrect console.log from the JSX
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Charvar />
      <History />
    </main>
  );
}