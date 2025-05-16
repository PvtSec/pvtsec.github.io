const Home = () => {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Fixed fullscreen hero */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-9xl font-light select-none text-center text-white/90 tracking-[0.4em]">
          PVTSEC
        </h1>
      </div>
      {/* Spacer to allow scrolling */}
      <div className="h-screen" />
      {/* Next component/section */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full border-t-4 border-white/85 text-center h-[60vh] font-roboto text-2xl font-semibold tracking-widest text-white backdrop-blur-[0.4em] z-50 rounded-t-[4em]"></div>
      </div>
    </div>
  );
};

export default Home;
