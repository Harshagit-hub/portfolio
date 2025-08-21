const texts = ["Web Developer Focused on Efficient & Interactive Websites",
  "Turning Ideas into Engaging Digital Projects",
  "Aspiring Data Analyst, Exploring the World of Data"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if(count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // Wait 1.5s before next text
  } else {
    setTimeout(type, 150);
  }
})();
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  
  try {
    await fetch("/", {
      method: "POST",
      body: formData
    });
    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    alert("Oops! Something went wrong.");
  }
});



