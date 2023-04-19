chrome.browserAction.onClicked.addListener(async (tab) => {
    const url = tab.url;
  
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await response.json();
      const shortUrl = data.result.short_link;
  
      chrome.notifications.create({
        type: "basic",
        title: "URL Shortener",
        message: shortUrl,
        iconUrl: "icon.png"
      });
    } catch (error) {
      console.error(error);
      chrome.notifications.create({
        type: "basic",
        title: "URL Shortener",
        message: "An error occurred while shortening the URL.",
        iconUrl: "icon.png"
      });
    }
  });
  