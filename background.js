browser.runtime.onMessage.addListener(req=>{
    console.log(req)
    if (req.action == "content"){
        // return new Promise((resolve)=>{
        //     saved = resolve("save")
        //     console.log(saved)
        // })
    }
    else if(req.action == "load"){
        console.log("loaded")
    }
    else if(req.action == "save"){
        console.log("saved")
    }
})

browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tabId = tabs[0].id;
    browser.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  
    // Wait for the content script to load and set up its listener
    setTimeout(function() {
      browser.tabs.sendMessage(tabId, "load or save");
    }, 1000);
  });
  