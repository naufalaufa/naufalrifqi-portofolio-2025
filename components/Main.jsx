import { dataRoleDivision } from "@/utils/data";

const Main = () => {
  return (
    <div id="main" className="grid bg-gradient-to-r from-black to-blue-950 place-items-center min-h-screen relative">
      <div>
        <p className="text-xs sm:text-left md:text-lg text-blue-700 font-semibold text-center">
          The Portofolio As Naufal Journey 👣
        </p>
        <h1 className="text-white whitespace-nowrap text-center  font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl ">
          Mochamad Naufal Aufa Rifqi
        </h1>
        <p className="text-white p-2 text-sm text-center 2xl:text-lg">
          Line to line - Code to code - Years to years - From zero to hero
        </p>
        <p className="text-white text-center text-sm">
          Tech Enthusiast Portofolio 💻
        </p>
      </div>
      <div className="grid grid-cols-2 mb-9 gap-2 ">
        {dataRoleDivision.map((role) => (
          <p className="text-white text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-pink-900 p-2 text-center rounded-2xl " key={role.id}>
            {role.title} 👨‍💻
          </p>
        ))}
      </div>
    </div>
  );
};

export default Main;
