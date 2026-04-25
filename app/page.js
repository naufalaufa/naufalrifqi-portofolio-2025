import Loading from "@/components/Loading";
import SideIcon from "@/components/SideIcon";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/components/Main"), {
  loading: () => <Loading />,
});
const ScrollComponent = dynamic(() => import("@/components/ScrollComponent"), {
  loading: () => <Loading />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <Loading />,
});
const CarrerJourney = dynamic(() => import("@/components/CarrerJourney"), {
  loading: () => <Loading />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <Loading />,
});
const Project = dynamic(() => import("@/components/Project"), {
  loading: () => <Loading />,
});
const ContributeWithMe = dynamic(() => import("@/components/ContributeWithMe"), {
  loading: () => <Loading />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <Loading />,
});

const Page = () => {
  return (
    <div className="bg-black">
      <Header />
      <Main />
      <ScrollComponent />
      <About />
      <Skills />
      <CarrerJourney />
      <Project />
      <ContributeWithMe />
      <Footer />
      <SideIcon />
    </div>
  );
};

export default Page;
