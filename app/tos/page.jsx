const Tos = () => {
  return (
    <main className="bg-cover bg-center bg-no-repeat h-screen bg-gradient-to-b from-rose-700 to-red-500 flex justify-center">
      <div className="sm:container mx-auto flex flex-col overflow-hidden gap-1.5 w-full max-w-sm">
        <a
          href=""
          className="text-sm font-light text-white text-left mt-10 w-fit flex items-center text-[11px] mx-5"
        >
          <span className="material-symbols-outlined">chevron_left</span>
          Back
        </a>
        <h1 className="text-white text-2xl mt-5 text-center">
          Terms of Service
        </h1>
        <div className="mx-7">
          <h1 className="text-white font-bold text-xl mt-7">
            1. Terms
          </h1>
          <p className="text-white text-sm font-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quo, eveniet in numquam ut nisi obcaecati soluta, 
            ratione quibusdam dolor nobis tempora ad consequatur, facere ea et earum ab debitis.
          </p>
          <h1 className="text-white font-bold text-xl mt-5">
            2. Policy
          </h1>
          <p className="text-white text-sm font-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quo, eveniet in numquam ut nisi obcaecati soluta, 
            ratione quibusdam dolor nobis tempora ad consequatur, facere ea et earum ab debitis. Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. Maiores quo, eveniet in numquam ut nisi obcaecati soluta. Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, laborum ipsam. 
            Commodi quas.
          </p>
        </div>
        <div className="text-center mt-20 space-x-5">
          <button
            className="bg-white hover:bg-rose-700 hover:text-white text-rose-700 py-2 px-4 rounded-full h-9 w-36 font-light text-base transition"
          >
            <span>Decline</span>
          </button>
          <button
            className="bg-white hover:bg-rose-700 hover:text-white text-rose-700 py-2 px-4 rounded-full h-9 w-36 font-light text-base transition"
          >
            <span>Accept</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Tos;
