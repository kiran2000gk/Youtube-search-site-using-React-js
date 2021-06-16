import axios from "axios";
const KEY = "AIzaSyAoBpkhV_Q_aZCal9vrTe7ewNNit3-j_n0"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
