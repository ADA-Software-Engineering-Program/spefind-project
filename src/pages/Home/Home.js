import AppLayout from "../../../src/layout/AppLayout";
import Hero from "./Hero";
import FeaturedReview from "./FeaturedReview";
import SpeakersCard from "../../Components/FeaturedSpeakersCard/SpeakersCard";
import FindSpeakers from "./FindSpeakers";
import JoinSite from "./JoinSite";

const Home = () => {
  return (
    <AppLayout backgroundColor={"rgba(227, 80, 47, 0.1)"}>
      <Hero />
      <SpeakersCard />
      <FindSpeakers />
      <JoinSite />
      <FeaturedReview />
    </AppLayout>
  );
};

export default Home;
