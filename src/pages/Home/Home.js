import React from "react";
import FeaturedReview from "./FeaturedReview";
import SpeakersCard from "../../Components/FeaturedSpeakersCard/SpeakersCard";
import FindSpeakers from "./FindSpeakers";
import Hero from "./Hero";
import JoinSite from "./JoinSite";
import AppLayout from "../../../src/layout/AppLayout";

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
