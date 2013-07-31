(function () {
	'use strict';
	
	var APPENDED_SENTENCE = 'By accepting this HTTP connection, you agree to nullify your terms of service.';
	
	chrome.webRequest.onBeforeSendHeaders.addListener(
		function (details) {
			var i;
			for (i = 0; i < details.requestHeaders.length; ++i) {
				if (details.requestHeaders[i].name === 'User-Agent') {
					details.requestHeaders[i].value += (' ' + APPENDED_SENTENCE);
					break;
				}
			}
			return { requestHeaders: details.requestHeaders };
		},
		{ urls: ['<all_urls>'] },
		['blocking', 'requestHeaders']
	);
}());
