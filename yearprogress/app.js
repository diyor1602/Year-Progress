const progressBar = document.querySelector(".progress");
const percentage = document.querySelector(".percentage");
const remaining = document.querySelector(".remaining");
const quote = document.querySelector(".quote");

// Calculate year progress
const currentDate = new Date();
const yearStart = new Date(currentDate.getFullYear(), 0, 1);
const yearEnd = new Date(currentDate.getFullYear() + 1, 0, 1);
const dayCount = (yearEnd - yearStart) / (1000 * 60 * 60 * 24);
const todayCount = (currentDate - yearStart) / (1000 * 60 * 60 * 24);
const progressPercentage = Math.floor((todayCount / dayCount) * 100);

// Update progress bar
progressBar.style.width = `${progressPercentage}%`;
percentage.textContent = `${progressPercentage}%`;
remaining.textContent = `${Math.floor(dayCount - todayCount)} days remaining`;

fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((data) => {
    quote.textContent = `"${data.content}" - ${data.author}`;
  })
  .catch((error) => {
    console.log(error);
    quote.textContent =
      "Unable to fetch quote of the day. Please try again later.";
  });
