// Replace this URL after we deploy backend
const apiUrl = "https://your-netlify-site.netlify.app/.netlify/functions/visit";

async function getCount() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    document.getElementById("count").textContent = data.count;
  } catch (err) {
    console.error(err);
    document.getElementById("count").textContent = "Error";
  }
}

window.addEventListener("load", getCount);
