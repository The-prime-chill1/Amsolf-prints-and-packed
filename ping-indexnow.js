// Script to ping IndexNow (Bing, Yandex, Seznam, Naver) with all website URLs
// Run with: node ping-indexnow.js

const host = "www.amsolfprintsandpacked.com";
const key = "c8d1f2e34b9a4561872efb93481a567c";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/services`,
  `https://${host}/quran-book-printing`,
  `https://${host}/laide-computers`,
  `https://${host}/portfolio`,
  `https://${host}/gallery`,
  `https://${host}/about`,
  `https://${host}/faq`,
  `https://${host}/contact`,
  `https://${host}/privacy`
];

async function submitIndexNow() {
  const payload = {
    host: host,
    key: key,
    keyLocation: keyLocation,
    urlList: urlList
  };

  console.log("Submitting URLs to IndexNow (Bing, Yandex, Seznam)...");

  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log("✓ Success! IndexNow submission received (Status:", response.status, ")");
      console.log("Search engines will begin indexing your updated pages.");
    } else {
      console.log("Response status:", response.status, response.statusText);
      const text = await response.text();
      console.log("Response body:", text);
    }
  } catch (error) {
    console.error("Error submitting to IndexNow:", error.message);
  }
}

submitIndexNow();
