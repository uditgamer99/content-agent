// fetch.js — pulls Instagram data from Apify
// Replace APIFY_TOKEN value in GitHub Secrets before running

const APIFY_TOKEN = "YOUR_TOKEN_HERE"; // swapped via GitHub Secrets
const MY_HANDLE = "stick_anime0";
const COMPETITORS = ["stickman_animation_007", "stickman_animation_09"];

const ALL_HANDLES = [MY_HANDLE, ...COMPETITORS];

async function scrapeInstagram() {
  const response = await fetch(
    `https://api.apify.com/v2/acts/apify~instagram-scraper/runs?token=${APIFY_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usernames: ALL_HANDLES,
        resultsLimit: 30,
      }),
    }
  );

  const data = await response.json();
  console.log("Scrape started:", data.id);
  return data.id;
}

scrapeInstagram();
