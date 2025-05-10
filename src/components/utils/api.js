const url =
  process.env.NODE_ENV === "production"
    ? "https://news-proxy-server-qghz.onrender.com/news"
    : "/news";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

const fromDate = new Date();
fromDate.setDate(fromDate.getDate() - 7);
const formattedFrom = fromDate.toISOString().split("T")[0];
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const getNews = async (query) => {
  return fetch(`${url}?q=${query}&from=${formattedFrom}&sortBy=publishedAt&apiKey=${apiKey}`).then(checkResponse);
};
/*
const getNews = async (query) => {
  return fetch(`https://newsapi.org/v2/everything?q=${query}&from=${formattedFrom}&sortBy=publishedAt&apiKey=ac7a0ca13c704884a094fc0e2084f160`)
    .then(checkResponse);
};
*/
const Api = {
  getNews,
};
export default Api;

/*
  const mockArticles = [
    {
      publishedAt: "November 4, 2025",
      title: " Nature is beautiful Nature is beautiful Nature is beautiful",
      description: "Exploring the high peaks. Exploring the high peaks. Exploring the high peaks. Exploring the high peaks. Exploring the high peaks.",
      urlToImage:
        "https://th.bing.com/th/id/OIP.AeBmNW9Ey9N3PneyBRSKHgHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7",
      source: "nature6",
    },
    {
      publishedAt: "November 4, 2025",
      title: "Mountains and Valleys",
      description: "Exploring the high peaks.",
      urlToImage:
        "https://th.bing.com/th/id/OIP.fk9ZlGsAxw6jVPVcskDqlgHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7",
      source: "nature6",
    },
    {
      publishedAt: "November 4, 2025",
      title: "Mountains and Valleys",
      description: "Exploring the high peaks.",
      urlToImage:
        "https://th.bing.com/th/id/OIP.wI0BhBStjjLNcGmMk5suvQHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7",
      source: "nature6",
    },
    {
      publishedAt: "November 4, 2025",
      title: "Mountains and Valleys",
      description: "Exploring the high peaks.",
      urlToImage:
        "https://th.bing.com/th/id/OIP.wI0BhBStjjLNcGmMk5suvQHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7",
      source: "nature6",
    },
    {
      publishedAt: "November 4, 2025",
      title: "Mountains and Valleys",
      description: "Exploring the high peaks.",
      urlToImage:
        "https://th.bing.com/th/id/OIP.wI0BhBStjjLNcGmMk5suvQHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7",
      source: "nature5",
    },
    {
      publishedAt: "November 4, 2025",
      title: "Mountains and Valleys",
      description: "Exploring the high peaks. Exploring the high peaks. Exploring the high peaks. Exploring the high peaks. Exploring the high peaks.",
      urlToImage:
        "https://th.bing.com/th/id/OIP.wI0BhBStjjLNcGmMk5suvQHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7",
      source: "nature6",
    },
  ];
  */
