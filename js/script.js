window.onscroll = function () { myFunction() };
var mainNav = document.getElementById("mainNav");
var sticky = mainNav.offsetTop;
function myFunction() {
	if (window.pageYOffset > sticky) {
		mainNav.classList.add("fixMe")
	} else {
		mainNav.classList.remove("fixMe");
	}
}
