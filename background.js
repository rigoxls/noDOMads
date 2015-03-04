//chrome.webRequest.onBeforeRequest.addListener(
//  function(details) { 
//      
//      console.info("common those are details");
//      console.info(details);
//      return {
//          cancel: true
//      }; 
//  },
//  {urls: ["*://pagead2/*","*:www.google.com/jsapi/*","*://s.ytimg.com/*"]},
//  ["blocking"]
//);


chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: details.url.indexOf("://www.youtube.com/") != 1}; },
  {urls: ["https://s.ytimg.com/yts/swfbin/player-vflqv4MLv/ad3.swf",
          "*://googleads.g.doubleclick.net/*",
          "*://pagead2.googlesyndication.com/pagead/*",
          "*://pubads.g.doubleclick.net/*",
          "*://www.youtube.com/annotations_invideo/*",
          "*://www.google.com/uds/api/ads/1.0/30d6e347fe89092b7a457ce91dbdfb19/content.I.js"
         ]
  },
  ["blocking"]);