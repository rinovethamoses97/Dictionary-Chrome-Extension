chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    window.word=request.word;
})