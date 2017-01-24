// background.js

chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab){
		title = changeInfo.title.toLowerCase();
		isBlackM = title.includes("black m");

		if(isBlackM){
 	     	chrome.tabs.remove(tab.id)
 	     	alert("Vous avez cherché Black M, vous avez trouvé la merde\nYou were interested in Black M, baltringue")
		}
})