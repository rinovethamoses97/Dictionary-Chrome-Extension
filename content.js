window.onload=function(){
    window.addEventListener('mouseup',function(){
        word=" ";
        word=window.getSelection().toString().trim();
        chrome.runtime.sendMessage({word:word});
    });
}