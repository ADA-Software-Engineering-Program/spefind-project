import AppLayout from "../../../src/layout/AppLayout"
import Hero from "./Hero/Hero"
import FeaturedReview from "./FeaturedReview/FeaturedReview"
import SpeakersCard from "./FeaturedSpeakersCard/SpeakersCard"
import FindSpeakers from "./FindSpeakers/FindSpeakers"
import JoinSite from "./Join/JoinSite"
import useGetRequest from "../../hooks/useGetRequest"
import mixpanel from "mixpanel-browser"
import { useEffect } from "react"

const Home = () => {
  const { fetchedUserData } = useGetRequest("api/stat/get/all")
  // console.log(fetchedUserData?.data[1]?.all_profile_created_users)
  // console.log(fetchedUserData?.data[2][0]?.all_profile_live_users)
  const saveStat = async () => {
    mixpanel.identify(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" }))
    mixpanel.track("Users", {
      AllUsers: fetchedUserData?.data[0]?.all_users,
      AllProfileCreatedUsers: fetchedUserData?.data[1][0]?.all_profile_created_users,
      AllProfileLiveUsers: fetchedUserData?.data[2][0]?.all_profile_live_users
    })
  }
  useEffect(() => {
    mixpanel.init("f70c5b20ede9fa1fafe32f3c5c187ce2", { debug: true, track_pageview: true, persistence: "localStorage" })
    saveStat()
  }, [])

  return (
    <AppLayout backgroundColor={"rgba(227, 80, 47, 0.1)"}>
      <Hero />
      <SpeakersCard />
      <FindSpeakers />
      <JoinSite />
      <FeaturedReview />
    </AppLayout>
  )
}

export default Home
