function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A trusting little leaf of green,",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
