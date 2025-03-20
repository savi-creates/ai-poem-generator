function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  new Typewriter("#poem", {
    strings: response.data.answer.trim(),
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

// Corrected missing closing bracket in displayPoem function

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";
  let context =
    "You are a poem expert that loves to write short poems. Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not mention the word HTML in the response. Do not use quotation marks inside the response.";
  let prompt = `User instructions: Generate a poem based on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="generating"> ⌛</span> Generating a poem about ${instructionsInput.value}.. `;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "rhythm",
    "dreams",
    "verses",
    "melody",
    "whisper",
    "infinite",
    "stardust",
    "echo",
    "love",
    "peace",
    "harmony",
  ];
  const floatingContainer = document.createElement("div");
  floatingContainer.classList.add("floating-words");
  document.body.appendChild(floatingContainer);

  function createFloatingWord() {
    const word = document.createElement("span");
    word.classList.add("word");
    word.innerText = words[Math.floor(Math.random() * words.length)];

    const size = Math.random() * 20 + 10;
    word.style.fontSize = `${size}px`;
    word.style.left = `${Math.random() * 100}%`;
    word.style.animationDuration = `${Math.random() * 5 + 6}s`;
    floatingContainer.appendChild(word);

    setTimeout(() => {
      word.remove();
    }, 8000);
  }

  function generateFloatingWords() {
    setInterval(createFloatingWord, 1200);
  }

  generateFloatingWords();
});
