

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.dir(sender);
//         if(request.message === "clicked_browser_action") {
//             var firstHref = $('a[href^="http"]').eq(0).attr('href');
//             console.log(firstHref);
//         }
//     }
// )