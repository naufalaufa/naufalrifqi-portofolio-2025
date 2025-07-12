import { dataCarrerJouney } from "@/utils/data";
import { MdOutlineDateRange } from "react-icons/md";
import { ImOffice } from "react-icons/im";

const CarrerJourney = () => {
  return (
    <section className="bg-gradient-to-r from-black to-blue-900 text-white p-3 ">
      <p className="p-3 text-sm font-bold my-10 italic">
        {"{ "}Carrer Journey 🚀{" }"}
      </p>
      {dataCarrerJouney.map((journey) => {
        const { id, company, date, position , image } = journey;
        return (
          <div
            key={id}
            className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-b border-gray-300"
          >
            <div className="flex flex-col">
              <div className="text-lg flex items-center gap-2 2xl:text-lg text-white font-bold">
                <span>{company}</span>
                <ImOffice />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end ">
              <div className="text-md flex items-center gap-2 2xl:text-lg text-white">
                <MdOutlineDateRange />
                <span>{date}</span>
              </div>
              <span className="text-md 2xl:text-lg text-white">
                {position}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CarrerJourney;
