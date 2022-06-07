// Saves options to chrome.storage
function save_options() {
  var artistName = document.getElementById('artistName').value.toLowerCase();
  chrome.storage.sync.get({
    artistName : ["black m"]
  }, function(items){
    items.artistName.push(artistName);
    chrome.storage.sync.set(items, function() {
      // Update status to let user know options were saved.
      document.getElementById('artistBlocked').innerHTML = items.artistName.join("<br>").toFirstUpper();
    });
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    artistName : ["black m"]
  }, function(items) {
    document.getElementById('artistBlocked').innerHTML = items.artistName.join("<br>").toFirstUpper();
  });
}

function restore_default() {
  
  chrome.storage.sync.set({artistName : ["black m"]}, function() {
      // Update status to let user know options were saved.
      document.getElementById('artistBlocked').innerHTML = "black m".toFirstUpper();
    });

}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('add').addEventListener('click',
                                                 save_options);
document.getElementById('del').addEventListener('click',
                                                 restore_default);