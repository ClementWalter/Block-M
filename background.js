// background.js

// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action", "tab":activeTab});
//   });
// });

// chrome.tabs.onHighlighted.addListener( function(highlightinfo){
// 	chrome.tabs.get(highlightinfo.tabIds[0], function(tab){
// 		title = tab.title
// 		console.log(title)
// 		title = tab.title.split(' - ');
// 		console.log(title[1])

// 		if(title[1] === "Black M"){
// 			alert("Vous écoutez Black M !")
//  	     	chrome.tabs.remove(tab.id)
// 		}
// 	});
// })

chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab){
		title = changeInfo.title.toLowerCase();
		isBlackM = title.includes("black m");

		if(isBlackM){
 	     	chrome.tabs.remove(tab.id)
 	     	alert("Vous avez cherché Black M, vous avez trouvé la merde\nYou were interested in Black M, baltringue")
		}
})



// // This block is new!
// chrome.runtime.onMessage.addListener(

//   	function(request, sender, sendResponse) {
//     if( request.artiste === "Black M" ) {
//     	alert("Vous écoutez Black M !")
//  	     chrome.tabs.remove(activeTab.id)
//     }
//   }
// );