// fetch.js

const APIFY_TOKEN = "YOUR_TOKEN_HERE";

const HANDLES = [
  "stick_anime0",
  "stickman_animation_007",
  "stickman_animation_09"
];

const DIRECT_URLS = HANDLES.map(
  handle => `https://www.instagram.com/${handle}/`
);

async function scrapeInstagram() {
  try {
    const response = await fetch(
      `https://api.apify.com/v2/acts/apify~instagram-scraper/runs?token=${APIFY_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          directUrls: DIRECT_URLS,
          resultsLimit: 30
        })
      }
    );

    const data = await response.json();

    console.log("Run ID:", data.data.id);
    console.log("Dataset ID:", data.data.defaultDatasetId);

  } catch (err) {
    console.error(err);
  }
}

scrapeInstagram();
