import { WebsiteCard } from "./components";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 pb-10">
      <div className="h-[45vh] bg-blue-500 flex justify-center items-center flex-col">
        <h1 className="text-4xl sm:text-6xl text-white font-bold">TOOLSITE</h1>
        <p className="mt-2 text-white/80 text-md sm:text-xl">
          Where Developers Find Essential Tools
        </p>
      </div>

      <div className="container bg-white max-w-4xl mx-auto mt-10 min-h-screen">
        <WebsiteCard />
      </div>
    </div>
  );
};

export default App;
