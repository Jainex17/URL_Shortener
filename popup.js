const form = document.getElementById("shorten-form");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = document.getElementById("url-input").value;

  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    const shortUrl = data.result.short_link;

    result.innerHTML = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
  } catch (error) {
    console.error(error);
    result.innerHTML = "An error occurred while shortening the URL.";
  }
});
