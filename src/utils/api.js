const apiKey = "ac7a0ca13c704884a094fc0e2084f160";
//const url = "https://newsapi.org/v2/everything";

    const fromDate = new Date();
    fromDate.setDate(fromDate.setDate() - 7)
    const formattedForm = fromDate.toString().split("T")
    [0];
    //const response = fetch(`${url}?q=${query}&from=${formattedForm}&sortBy=publishedAt&pageSize100&apiKey=${apiKey}`);
    //const data = await response.json();
    //return data.articles;


    const url = process.env.NODE_ENV === "production" 
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}


export const getNews = async (query) => {
  return fetch(`${url}?q=${query}&from=${formattedForm}&sortBy=publishedAt&pageSize100&apiKey=${apiKey}`).then(checkResponse);
}