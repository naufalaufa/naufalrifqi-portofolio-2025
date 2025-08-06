import { dataCarrerJouney, dataEducationJourney } from "@/utils/data";
import { MdOutlineDateRange , MdOutlineWork } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { RiGraduationCapFill } from "react-icons/ri";


const CarrerJourney = () => {
  return (
    <section className="bg-gradient-to-r from-black to-blue-900 text-white p-3">
      <p className="p-3 text-sm font-bold my-10 italic">
        {"{ "}Carrer Journey And Education 🚀{" }"}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-center my-8 font-bold text-lg">Career</h1>
            <MdOutlineWork size={20} />
          </div>
          {dataCarrerJouney.map((journey) => {
            const { id, company, date, position } = journey;
            return (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-b border-gray-300"
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-lg flex items-center gap-2 2xl:text-lg text-white font-bold">
                    <span>{company}</span>
                    <ImOffice />
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end">
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
        </div>

        <div>
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-center my-8 font-bold text-lg">Education</h1>
            <RiGraduationCapFill size={20} />
          </div>
          {dataEducationJourney.map((education) => {
            const { id, education: edu, role, date } = education;
            return (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-b border-gray-300"
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-lg flex items-center gap-2 2xl:text-lg text-white font-bold">
                    <span>{edu}</span>
                    <ImOffice />
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <div className="text-md flex items-center gap-2 2xl:text-lg text-white">
                    <MdOutlineDateRange />
                    <span className="text-md 2xl:text-lg text-white">{role}</span>
                  </div>
                  <span>{date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarrerJourney;

