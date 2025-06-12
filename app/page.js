import SideIcon from "@/components/SideIcon";
import dynamic from "next/dynamic";

//  lazy loading code spliting 2025
// const Header = dynamic(() => import("@/components/Header"), {
//   loading: () => <p>Loading...</p>,
// });
const Main = dynamic(() => import("@/components/Main"), {
  loading: () => <p>Loading Main...</p>,
});
const ScrollComponent = dynamic(() => import("@/components/ScrollComponent"), {
  loading: () => <p>Loading ScrollComponent...</p>,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <p>Loading About...</p>,
});
const CarrerJourney = dynamic(() => import("@/components/CarrerJourney"), {
  loading: () => <p>Loading Main...</p>,
});
const Project = dynamic(() => import("@/components/Project"), {
  loading: () => <p>Loading Project...</p>,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading Project...</p>,
});

// ended lazy loading code spliting 2025

const Page = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-black/80 pt-2 max-w-screen">
        {/* <Header /> */}
        <Main />
        <ScrollComponent />
        <About />
        <CarrerJourney />
        <Project />
        <Footer />
        <SideIcon />
      </div>
    </>
  );
};

export default Page;
