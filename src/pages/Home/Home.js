import AppLayout from "../../../src/layout/AppLayout";
import Hero from "./Hero/Hero";
import FeaturedReview from "./FeaturedReview/FeaturedReview";
import SpeakersCard from "./FeaturedSpeakersCard/SpeakersCard";
import FindSpeakers from "./FindSpeakers/FindSpeakers";
import JoinSite from "./Join/JoinSite";

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
