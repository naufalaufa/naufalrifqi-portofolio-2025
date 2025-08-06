import ContributeWithMe from "@/components/ContributeWithMe";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import SideIcon from "@/components/SideIcon";
import dynamic from "next/dynamic";

//  lazy loading code spliting 2025
// const Header = dynamic(() => import("@/components/Header"), {
//   loading: () => <p>Loading...</p>,
// });
const Main = dynamic(() => import("@/components/Main"), {
  loading: () => <Loading/>,
});
const ScrollComponent = dynamic(() => import("@/components/ScrollComponent"), {
  loading: () => <Loading/>,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <Loading/>,
});
const CarrerJourney = dynamic(() => import("@/components/CarrerJourney"), {
  loading: () => <Loading/>,
});
const Project = dynamic(() => import("@/components/Project"), {
  loading: () => <Loading/>,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <Loading/>,
});

// ended lazy loading code spliting 2025

const Page = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-blue-950 max-w-screen">
        <Main />
        <ScrollComponent />
        <About />
        <CarrerJourney />
        <Project />
        <ContributeWithMe/>
        <Footer />
        <SideIcon />
      </div>
    </>
  );
};

export default Page;
