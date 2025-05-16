import Home from "./pages/home";

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full overflow-y-auto hide-scrollbar">
        <Home />
      </div>
    </div>
  );
};

export default App;
