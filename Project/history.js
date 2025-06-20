document.addEventListener('DOMContentLoaded', function() {
  const historyTableBody = document.querySelector('#history-table tbody');
  const clearHistoryBtn = document.getElementById('clear-history');
  

  // Predefined mapping of cookie names to descriptions
  const cookieDescriptions = {
    
    'adblocked': 'This cookie probably indicates if the user has an ad blocker enabled.',
    'ar_debug': 'Debugging cookie for Google ad services or analytics.',
    'auth': 'Probably used for authentication and storing a security token.',
    'AWSALB': 'Use to provide load balancing functionality.',
    'AWSALBCORS': 'Use to provide load balancing functionality.',
    'bm_sv': 'Probably set by the Bot Manager to track and manage site bots.',
    'btc': 'Based on the domain, this is probably a tracking cookies, the specific purpose is unclear.',
    'bsc': 'Based on the domain, this is probably a tracking cookies, the specific purpose is unclear.',
    'bstc': 'Based on the domain, this is probably a tracking cookies, the specific purpose is unclear.',
    'bust_task_filter': 'This cookie use to provide admin function.',
    'b30msc': 'Based on the domain, this is probably a tracking cookies, the specific purpose is unclear.',
    'CONSISTENCY': 'Probably use to check consistency.',
    'cookie_accept': 'Probably use to check cookie is axxepted if no exit.',
    'cmplz_policy_id': 'Probably to store accepted cookie policy ID.',
    'cmplz_ac_string': 'This cookie use to store cookie consent prefrences.',
    'cmplz_banner-status': 'Probably to store if the cookie banner has been dismissed.',
    'c_user': 'use to store a unique user ID.',
    'cto_bundle': 'This cookie use to provide function across the pages.',
    'dpr': 'use to check session end to start data.',
    'DSID': 'Used for advertising, security and functionality.',
    'DYN_USER_ID': 'Probably stores a unique user identifier - possibly for user tracking or personalization.',
    'everest_g_v2': 'Maps clicks to events on the clients website.',
    'fr': 'use to provide ad delivery or retargeting.',
    'flp': 'use to provide the identification of trusted web traffic.',
    'GPS': 'use to store location data.',
    'hubspotutk': 'This cookie store as well as track Visitors ID',
    'LT': 'NOt clear, but related to login token.',
    'PREF': 'Stores user preferences for GOOGLE services.',
    'presence': 'used to store and track if the browser tab is active.',
    'rsssl_captcha_uid': 'This cookie use to provide admin functions.',
    'seqnum': 'Probably a sequence number used to order events or requests.',
    'sbjs_current': 'use to store browser details.',
    'sessionID_shein': 'Session tokens, probably use to identify a users session and screen time.',
    'SIDCC': 'Cookie use to provide the identification of trusted web traffic.',
    
    'ST-1mmvkfx': 'Session tokens, probably use to identify a users session.',
    'ST-115w1ti': 'Session tokens, probably use to identify a users session.',
    'ST-1i1zv2t': 'Session tokens, probably use to identify a users session.',
    'ST-1dcz6jc': 'Session tokens, probably use to identify a users session.',
    'ST-1q8turc': 'Session tokens, probably use to identify a users session.',
    'ST-172ng7': 'Session tokens, probably use to identify a users session.',
    'ST-13e8au0': 'Session tokens, probably use to identify a users session.',
    'ST-tw8a7q': 'Session tokens, probably use to identify a users session.',
    'ST-1o6h509': 'Session tokens, probably use to identify a users session.',
    'ST-f75e1k': 'Session tokens, probably use to identify a users session.',
    'ST-16jjovq': 'Session tokens, probably use to identify a users session.',
    'ST-gd629i': 'Session tokens, probably use to identify a users session.',
    'ST-18s5b8g': 'Session tokens, probably use to identify a users session.',
    'ST-dzbmnw': 'Session tokens, probably use to identify a users session.',
    'ST-1gnya0k': 'Session tokens, probably use to identify a users session.',
    'ST-16jjovq': 'Session tokens, probably use to identify a users session.',
    'ST-1rajzv4': 'Session tokens, probably use to identify a users session.',
    'ST-1kndw0u': 'Session tokens, probably use to identify a users session.',
    'ST-1u2aov9': 'Session tokens, probably use to identify a users session.',
    'ST-1bxii4t': 'Session tokens, probably use to identify a users session.',
    'ST-y2a3f4': 'Session tokens, probably use to identify a users session.',
    'ST-o5rlhc': 'Session tokens, probably use to identify a users session.',
    'ST-1iqwbli': 'Session tokens, probably use to identify a users session.',
    'ST-ayby11': 'Session tokens, probably use to identify a users session.',
    'ST-1s2q3ay': 'Session tokens, probably use to identify a users session.',
    'ST-175nk6r': 'Session tokens, probably use to identify a users session.',
    'ST-1hdgyxs': 'Session tokens, probably use to identify a users session.',
    'ST-19izzpv': 'Session tokens, probably use to identify a users session.',
    'ST-otdqcm': 'Session tokens, probably use to identify a users session.',
    'ST-1j1p38f': 'Session tokens, probably use to identify a users session.',
    'ST-1x4vesq': 'Session tokens, probably use to identify a users session.',
    'ST-vbasw4': 'Session tokens, probably use to identify a users session.',
    'ST-1byb64b': 'Session tokens, probably use to identify a users session.',
    'ST-gq0ske': 'Session tokens, probably use to identify a users session.',
    'ST-87b7dl': 'Session tokens, probably use to identify a users session.',
    'ST-1tgvh67': 'Session tokens, probably use to identify a users session.',
    'ST-qxcsw7': 'Session tokens, probably use to identify a users session.',
    'ST-1fyebbg': 'Session tokens, probably use to identify a users session.',
    'ST-lc7rsx': 'Session tokens, probably use to identify a users session.',
    'ST-xuc20b': 'Session tokens, probably use to identify a users session.',
    'ST-xuar69': 'Session tokens, probably use to identify a users session.',
    'ST-xubfu2': 'Session tokens, probably use to identify a users session.',
    'ST-1qipnnq': 'Session tokens, probably use to identify a users session.',
    'ST-1sa89bg': 'Session tokens, probably use to identify a users session.',
    'ST-p2sw85': 'Session tokens, probably use to identify a users session.',
    'ST-ecdosx': 'Session tokens, probably use to identify a users session.',
    'ST-1pecqb8': 'Session tokens, probably use to identify a users session.',
    'ST-1wh075': 'Likely used for managing user session or tracking state.',
    'ST-1b': 'Manages user session tracking and authentication.',
    's_cc': 'Indicates if cookies are enabled in the browser.',
    's_nr': 'Stores date of users visit and if they are new or returning.',
    'sBS': 'Probably use to track and analytics by Yahoo Search.',
    'receive-cookie-deprecation': 'Notification handling for cookie deprecation on DoubleClick.',
    'l_ref': 'Use to store last requested URL',
    'mbox': 'Use by Adobe Target to analyze content relevance',
    'NID': 'Use to provide ad delivery or retargeting, store user preferences.',
    'OptanonConsent': 'This cookie stores cookie consent prefrence.',
    'QuantumMetricSessionID': 'Probably use to track user behavior and site performance analytics.',
    'QuantumMetricUserID': 'Probably use to track user behavior.',
    'test_cookie': 'Used for advertising, security and functionality.',
    'tk_tc': 'use to store the users usage history.',
    'TSe62c5f0d027': 'Seems to be a session cookie likely set by a security service the TS prefix is common for these cookies.',
    'TS0180da25': 'Seems to be a session cookie likely set by a security service the TS prefix is common for these cookies.',
    'TS01ea8d4c': 'Seems to be a session cookie likely set by a security service the TS prefix is common for these cookies.',
    'TS010110a1': 'Seems to be a session cookie likely set by a security service the TS prefix is common for these cookies.',
    'userAppVersion': 'Check app version details',
    'VISITOR_INFO1_LIVE': 'This cookie use to provide ad delivery or retargeting, store and track a visitors identity, Store and track interaction.',
    'wd': 'Probably use to read screen resolution.',
    'WM_SEC.AUTH_TOKEN': 'Probably used for authentication and storing a security token.',
    'WM.USER_STATE': 'Probably stores information about the users current state or session.',
    'wm_route_based_language': 'Probably stores users language preference for localized content.',
    'xs': 'use to store a unique session ID.',
    'x_content_preference_index': 'Store prefrences',
    'YSC': 'use to Store and track interaction.',
    '_dc_gtm_UA-50741004-1': 'This cookie stores number of service requests.',
    '_fbp': 'use to Store and track visits across websites.',
    '_fbc': 'use to Store last visit.',
    '_ga': 'Google Analytics cookie use to store and count pageviews.',
    '_gid': 'Google Analytics cookie used to identify users and throttle request rates.',
    '_gat': 'Google Analytics cookie used to identify users and throttle request rates',
    '_gat_gtag_UA_25229943_4': 'Google Analytics cookie used to identify users and throttle request rates',
    '_gcl_au': 'Google Analytics cookie used to identify users and throttle request rates.',
    '_ga_D2P3FM55BM': 'Google Analytics cookies, probably for tracking specific campaigns or sites.',
    '_ga_N1HN887KY7': 'Google Analytics cookies, probably for tracking specific campaigns or sites.',
    '_ga_1PP0033LNZ': 'Google Analytics cookies, to store and count pageviews.',
    '_ga_WJ020WWLN5': 'Google Analytics cookies, to store and count pageviews.',
    '_ga_Z6QQHT52V9': 'Google Analytics cookies, to store and count pageviews.',
    '_ga_WV8QF8NBKG': 'Google Analytics cookies, to store and count pageviews.',
    '_ga_CJN7LFD37T': 'Google Analytics cookies, to store and count pageviews.',
    '_ga_6L80NB1GKR': 'Google Analytics cookies, to store and count pageviews.',
    '_hjSession_3701535': 'This cookie provide functionz across pages.',
    '__hstc': 'This cookie store time of visit',
    '__hssrc': 'This cookie store a unique session ID',
    '__hssc': 'This cookie store anonymized statistics',
    '_pin_unauth': 'This cookie store users usage history.',
    '_pxTestCookie': 'Probably set by a service called PerimeterX which provides bot detection and security services.',
    '_pxde': 'Probably set by a service called PerimeterX which provides bot detection and security services.',
    '_px3': 'Probably set by a service called PerimeterX which provides bot detection and security services.',
    '__qca': 'Use to store and track audience reach.',
    '_uetvid': 'Probably ads, use to store and track visits across websites.',
    '_uetmsclkid': 'This cookie stores performed actions on the website.',
    '_uetsid': 'Probably ads, use to store and track visits across websites.'
    // Add more mappings as needed
  };

  // Function to update history table
  function updateHistoryTable(history) {
    historyTableBody.innerHTML = ''; // Clear existing table rows
    // Sort history by descending order of time
    history.sort((a, b) => new Date(b.time) - new Date(a.time));
    // Populate table with sorted history
    history.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.time}</td>
        <td>${entry.website}</td>
        <td>${entry.cookieName}</td>
        <td class="description-cell">${cookieDescriptions[entry.cookieName] || 'No description available.'}</td>
  
      `;
      historyTableBody.appendChild(row);
    });
  }

  // Load history initially
  chrome.storage.local.get('cookieAlertHistory', function(data) {
    const history = data.cookieAlertHistory || [];
    updateHistoryTable(history);
  });

  // Listen for changes in storage
  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace === 'local' && changes.cookieAlertHistory) {
      const newHistory = changes.cookieAlertHistory.newValue || [];
      updateHistoryTable(newHistory);
    }
  });

  // Clear history
  clearHistoryBtn.addEventListener('click', function() {
    chrome.storage.local.remove('cookieAlertHistory', function() {
      historyTableBody.innerHTML = '';
    });
  });
});
