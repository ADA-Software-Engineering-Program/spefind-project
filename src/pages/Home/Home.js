import React from 'react';
import FeaturedReviwe from './FeaturedReviwe';
import SpeakersCard from '../../Components/FeaturedSpeakersCard/SpeakersCard';
import FindSpeakers from './FindSpeakers';
import Hero from './Hero';
import JoinSite from './JoinSite';
import AppLayout from '../../../src/layout/AppLayout';

const Home =()=> {
  return (
    <AppLayout>
            <Hero/>
            <SpeakersCard/>
            <FindSpeakers/>
            <JoinSite/>
            <FeaturedReviwe/>
    </AppLayout>
  )
}

export default Home