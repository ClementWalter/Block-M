// // content.js
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       var artiste = document.getElementsByClassName('player-track-link')[1].innerText;

//       console.log(artiste);
//       // This line is new!
//       chrome.runtime.sendMessage({"artiste":artiste});
//     }
//   }
// );