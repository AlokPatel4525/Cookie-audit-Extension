document.addEventListener('DOMContentLoaded', function() {
  // Load settings from Chrome storage
  chrome.storage.sync.get({
    adBlock: false,
    popupBlock: false,
    trackerAlerts: false,
    cookieAlerts: false,
    notifications: false
  }, function(data) {
    document.getElementById('ad-block').checked = data.adBlock;
    document.getElementById('popup-block').checked = data.popupBlock;
    document.getElementById('tracker-alerts').checked = data.trackerAlerts;
    document.getElementById('cookie-alerts').checked = data.cookieAlerts;
    document.getElementById('notifications').checked = data.notifications;
  });

  // Save settings when Save button is clicked
  document.getElementById('save-btn').addEventListener('click', function() {
    const adBlock = document.getElementById('ad-block').checked;
    const popupBlock = document.getElementById('popup-block').checked;
    const trackerAlerts = document.getElementById('tracker-alerts').checked;
    const cookieAlerts = document.getElementById('cookie-alerts').checked;
    const notifications = document.getElementById('notifications').checked;

    chrome.storage.sync.set({
      adBlock,
      popupBlock,
      trackerAlerts,
      cookieAlerts,
      notifications
    }, function() {
      alert('Settings saved');
    });
  });

  // Open history page when View History button is clicked
  document.getElementById('view-history').addEventListener('click', function() {
    chrome.tabs.create({ url: 'history.html' });
  });
});
