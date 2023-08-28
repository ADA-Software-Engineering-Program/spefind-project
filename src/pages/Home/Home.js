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

  function generateRandomCode() {
    const min = 100000
    const max = 999999
    const randomCode = Math.floor(Math.random() * (max - min + 1)) + min
    return randomCode
  }

  const saveStat = async () => {
    await mixpanel.identify(generateRandomCode())
    mixpanel.track("Users", {
      AllUsers: fetchedUserData?.data[0]?.all_users,
      AllProfileCreatedUsers: fetchedUserData?.data[1][0]?.all_profile_created_users,
      AllProfileLiveUsers: fetchedUserData?.data[2][0]?.all_profile_live_users
    })
  }
  useEffect(() => {
    mixpanel.init("f70c5b20ede9fa1fafe32f3c5c187ce2", { debug: true, persistence: "localStorage" })
    // delay the function for few seconds before running the function
    setTimeout(() => {
      saveStat()
    }, 5000)
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
