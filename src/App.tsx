import Countdown from "./components/Countdown";

function App() {
  const date = new Date("2025-03-15T00:00:00").getTime();
  return (
    <div className="container flex flex-col items-center justify-center h-screen mx-auto gap-y-4">
      <h2 className="font-serif text-bold text-primary">Wedding Ceremony</h2>
      <h1 className="font-serif text-bold text-primary">
        Boondariga & Anuwong
      </h1>
      <p className="text-3xl text-secondary">15.03.2025</p>
      <Countdown date={date} />
    </div>
  );
}

export default App;
