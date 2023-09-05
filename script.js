document.onreadystatechange = function() {
	var loadingAnimation = document.getElementById("loading");
	var pageContent =  document.getElementById("pageContent");
	var logo = document.getElementById("logo");

	setTimeout(function(){
		if (document.readyState === "complete") {
			loadingAnimation.classList.add("hidden");
			pageContent.classList.remove("hidden");
			logo.classList.remove("hidden");
		};
	}, 2000)
};
