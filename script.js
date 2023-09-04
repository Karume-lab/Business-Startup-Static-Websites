window.onload = function() {
	var loadingMessage = document.getElementById('loading');
	setTimeout(function() {
		loadingMessage.classList.add('hidden');
		var pageContent = document.getElementById('pageContent');
		pageContent.classList.remove('hidden');
	}, 5000);
};
