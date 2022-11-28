import axios from "axios";

const KEY = "AIzaSyB1KHkzELaFE0OR1PZ2IpssOAPe6yufrDI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 7,
    key: KEY,
  },
});
