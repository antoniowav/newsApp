window.addEventListener('load', () => {
  renderNews()
})


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
   } catch(err) {
    console.error(err);
   }
}


async function renderNews() {
console.log('test');
let url = 'http://localhost:3000/news'
let result = await  fetch(url)
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data.articles); 
  })
const newsContainer = document.getElementById('newsContainer')
const title = document.createElement('h1')
title.innerText = result.articles[0].title
newsContainer.append(title)

}

//create search fnction for news 

/* const searchStringGenerator = (rawString) => {
  let stringArray = rawString.split(" ");
  
  let searchText = rawString.substring(rawString.indexOf(" ") + 1);
  
  if (stringArray.length == 1 || !searchText.length) {
    searchText = "";
  }
  return searchText;
  };

  async function showGifs(searchText) {

    if (msgInput.value === '/') {
    msgInput.value = '/stickers'
    searchText = ''
    }
  
    
    msgInput.focus()
    optionsDiv.style.flexDirection = "row";
    optionsDiv.style.overflowX = "scroll";
    optionsDiv.style.overflowY = "hidden";
    optionsDiv.style.justifyContent = "unset";
  
    let url = `http://localhost:3000/gifs/${searchText}`;
    let method = "GET";
    let result = await makeRequest(url, method, undefined);
  
    optionsDiv.innerHTML = "";
    result.data.forEach((gif) => {
      let gifDiv = document.createElement("div");
      let gifImg = document.createElement("img");
      gifImg.src = gif.images.downsized.url;
      gifDiv.append(gifImg);
      optionsDiv.append(gifDiv);
  
      gifImg.addEventListener("click", () => {
        let img = true;
        socket.emit("message", gif.images.downsized.url, img);
      });
    });
  }



 */
