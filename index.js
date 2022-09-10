const inputText = document.querySelector("#text-input");
const outputText = document.querySelector("#text-output");
const translateBtn = document.querySelector("#translate-btn");
// const fakeUrl = "https://jsonplaceholder.typicode.com/todos/";
const img =
  "https://www.amazon.co.uk/Mylery-Cabochon-Morghulis-Dohaeris-Different/dp/B07SZ81RQ4";
const apiUrl = "https://api.funtranslations.com/translate/valyrian";

function errorHandler(error) {
  console.log(error);
  alert("something went wrong, try after some time!!");
}
function fetchResponse(url, text) {
  const apiUrl = url + "?text=" + text;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      const translatedText = responseJson.contents.translated;
      console.log(translatedText);
      outputText.innerHTML = translatedText;
    })
    .catch(errorHandler);
}

translateBtn.addEventListener("click", () => {
  const text = inputText.value;
  fetchResponse(apiUrl, text);
});

// console.log(fetchResponse("https://jsonplaceholder.typicode.com/todos/1"));
