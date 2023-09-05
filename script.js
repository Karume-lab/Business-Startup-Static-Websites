// Loading screen animation
document.onreadystatechange = function() {
	var loadingAnimation = document.getElementById("loading");
	var pageContent =  document.getElementById("pageContent");
	
	if (document.readyState === "complete") {
		loadingAnimation.classList.add("hidden");
		pageContent.classList.remove("hidden");
	};
	// setTimeout(function(){
	// }, 2000)
};

// Responsive Navbar
const bugger = document.querySelector("#hambuggerMenu");
const navLinks = document.querySelector("#navLinks");
const accountLinks = document.querySelector("#accountLinks");
bugger.addEventListener("click", () => {
	if (navLinks.classList.contains("hidden")) {
		navLinks.classList.remove("hidden")
		accountLinks.classList.remove("hidden")

	} else{
		navLinks.classList.add("hidden")
		accountLinks.classList.add("hidden")
	}
})

// Change page title and favicon
document.addEventListener("visibilitychange", function () {
	var favicon = document.getElementById("favicon");
	if (document.visibilityState === "hidden") {
		document.title = "Come Back";
		favicon.href = "./images/sad-favicon.png";
	} else {
		document.title = "Farm2U | Welcome";
		favicon.href = "./images/favicon.png";
	}
});
