

// console.clear() 
// function save(){    
//     const xpath = "/html/body/div[2]/div[6]/div[4]/div/div[2]/main/div/section[2]/div"
//     const out = document.evaluate(xpath, document,null, XPathResult.FIRST_ORDERED_NODE_TYPE ,null)
//     const root = out.singleNodeValue

//     return Array.prototype.slice.call(root.children,0,-1)[0].outerHTML
// }

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request)
    if (request === "load or save") {
      // do something
    }
  });
  

// browser.runtime.sendMessage({action: "content"}).then(req=>{
//     if (req.action == "load"){

//     }
//     else if(req.action == "save"){
//         saved = save()
//         console.log(saved)
//         return saved
//     }
// })
// browser.runtime.onMessage.addListener((req, cb)=>{
//     console.log(req)
// })

