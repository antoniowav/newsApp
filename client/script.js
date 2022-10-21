const loaderContainer = document.querySelector(".loader-container");
const separator = document.getElementById("title-container");
window.addEventListener("load", () => {
  setTimeout(hideLoading, 1500);
  setTimeout(renderNews, 1500);
});

async function makeRequest(url, method, body) {
  try {
    let response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    let result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

const hideLoading = () => {
  loaderContainer.style.display = "none";
};

async function renderNews() {
  separator.style.display = "block";
  let url = `http://localhost:3000/news`;
  let method = "GET";
  let result = await makeRequest(url, method);
  const news = result.articles;
  console.log(news);
  news.forEach((singleNews) => {
    const newsContainer = document.getElementById("newsContainer");
    //create news container
    const singleNewsContainer = document.createElement("div");
    singleNewsContainer.classList.add("single-news");
    //create title with a tag and href
    const title = document.createElement("h1");
    const linkToNews = document.createElement("a");
    linkToNews.href = singleNews.url;
    linkToNews.setAttribute("target", "_blank");
    linkToNews.innerHTML = singleNews.title;
    //append a tag to h1 title
    title.append(linkToNews);
    //create image container
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //create img tag
    const newsImage = document.createElement("img");
    newsImage.src = singleNews.urlToImage;
    //append img to his container
    imgContainer.append(newsImage);
    //append to containers
    singleNewsContainer.append(title, imgContainer);
    newsContainer.append(singleNewsContainer);
  });
}
//create search fnction for news

//get the text from input field

let inputText;

const node = document.getElementsByClassName("search-input")[0];
node.addEventListener("keyup", async function (event) {
  if (event.key === "Enter") {
    inputText = node.value;
    console.log(inputText);
    let url = `http://localhost:3000/news/${inputText}`;
    let method = "GET";
    let result = await makeRequest(url, method, undefined);
    console.log(result);
    return result;
  }
});
