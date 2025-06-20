// Throttling variables
let writeTimeout = null;
const writeDelay = 1000; // 1 second delay
let pendingWrites = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2], // Ensure to clear existing rules before adding new ones
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: 'block' },
        condition: { urlFilter: '*://*.doubleclick.net/*', resourceTypes: ['main_frame', 'sub_frame'] }
      },
      {
        id: 2,
        priority: 1,
        action: { type: 'block' },
        condition: { urlFilter: '*://*.adserver.com/*', resourceTypes: ['main_frame', 'sub_frame'] }
      }
    ]
  });
});

chrome.cookies.onChanged.addListener(function(changeInfo) {

  if (changeInfo.cause === "explicit") {
    const alertTime = new Date().toLocaleString();
    const alertEntry = {
      time: alertTime,
      website: changeInfo.cookie.domain,
      cookieName: changeInfo.cookie.name,
    };

    // Add to pending writes
    pendingWrites.push(alertEntry);

    // Throttle writes to storage
    if (writeTimeout === null) {
      writeTimeout = setTimeout(() => {
        chrome.storage.local.get('cookieAlertHistory', function(data) {
          let history = data.cookieAlertHistory || [];
          history = history.concat(pendingWrites);
          chrome.storage.local.set({ cookieAlertHistory: history }, function() {
            console.log('Cookie alert history updated');
            pendingWrites = [];
            writeTimeout = null;
          });
        });
      }, writeDelay);
    }

    // Check if notifications are enabled
    chrome.storage.sync.get('notifications', function(data) {
      if (data.notifications) {
        // Send notification
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon48.png',
          title: 'Cookie Change Detected',
          message: `Cookie changed: ${changeInfo.cookie.name}`
        });
      }
    });
  }
});
