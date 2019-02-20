window.onload=function(){
var bgpage=chrome.extension.getBackgroundPage();
var word=bgpage.word;
$.ajax({
    url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/"+word,
    type: "GET",
    headers: {
        "Accept": "application/json",
        "app_id": "93ca96c1",
        "app_key": "769b83b3b7fc196f63393f94cd7da9a1"
    },
    success: function(data) {
        console.log(data);
        var html=""
        for(var i=0;i<data.results[0].lexicalEntries[0].entries[0].senses.length;i++)
            html+=i+1+". "+data.results[0].lexicalEntries[0].entries[0].senses[i].definitions[0]+"<br>";
        document.getElementById("meaning").innerHTML=html;
    }
 });
}
