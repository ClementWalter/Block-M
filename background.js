// background.js

chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab){
		title = changeInfo.title.toLowerCase();
		console.log('title', title)
		chrome.storage.sync.get({
    artistName : ["black m"]
    }, function(items){
      var l = items.artistName.length;
      for(i = 0; i<l; i++){
        var artist = items.artistName[i];
        isBlackM = title.includes(artist) && !title.includes("block m");
        if(isBlackM){
   	     	chrome.tabs.remove(tab.id);
   	     	alert("Vous avez cherché " + artist.toFirstUpper() + ", vous avez trouvé la merde\nYou were interested in " + artist.toFirstUpper() + ", baltringue");
  		  }
      }
    });

});
