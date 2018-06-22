
chrome.browserAction.onClicked.addListener(function(){
    chrome.windows.create({
        url: 'https://messages.android.com',
        width: 800,
        height: 550,
        focused: true,
        type: 'popup'
    });
});
