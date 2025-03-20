function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer.trim(),
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";
  let context =
    "You are a poem expert that loves to write short poems. Your mission is to generate a 4 line poem in basic html, and separate each line with a <br /> Make sure to follow the user instructions. Make sure to not mention the word html in the response. Don't use quotation marks inside the response";
  let prompt = `User instructions: Generate a poem based ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem..");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
