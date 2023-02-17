chrome.tabs.create({url: document.querySelector("#iframe-ember3465").src}, function(tab) {
  chrome.tabs.sendMessage(tab.id, {type: "retrieve-src"}, function(response) {
    console.log("second script src:", response.secondScriptSrc);
  });
});