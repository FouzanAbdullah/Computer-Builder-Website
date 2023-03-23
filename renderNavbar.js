document.addEventListener("DOMContentLoaded", function () {
	renderNavBar();
});

function getPageName() {
	url = window.location.href;
	if (!url || (url && url.length === 0)) {
		return "";
	}

	var index = url.lastIndexOf("/") + 1;
	var filenameWithExtension = url.substr(index);
	var basename = filenameWithExtension.split(/[.?&#]+/)[0];

	if (basename.length === 0) {
		url = url.substr(0, index - 1);
		basename = getBaseName(url);
	}

	return basename ? basename : "";
}

function makeNavChild(label, linksTo, ulElement) {
	//home nav button
	var li = document.createElement("li");
	li.classList.add("nav-item", "navButton");

	var a = document.createElement("a");
	a.classList.add("nav-link");
	a.innerHTML = label;
	a.href = linksTo;

	ulElement.appendChild(li);
	li.appendChild(a);
}

var renderNavBar = function () {
	var nav = document.createElement("nav");
	nav.classList.add("navbar", "navbar-expand-md", "navbar-dark", "bg-dark");

	var div = document.createElement("div");
	div.classList.add("navbar-collapse");
	nav.appendChild(div);

	var ul = document.createElement("ul");
	ul.classList.add(
		"navbar-nav",
		"nav-fill",
		"w-100",
		"mr-auto",
		"mt-2",
		"mt-lg-0"
	);
	div.appendChild(ul);

	makeNavChild("Home", "index.html", ul);
	makeNavChild("Products", "featured.html", ul);
	makeNavChild("Build a PC", "build.html", ul);
	makeNavChild("Featured", "featured.html", ul);
	makeNavChild("Specials", "#", ul);
	makeNavChild("My Account", "login.html", ul);
	makeNavChild("Sign Up", "register.html", ul);
	makeNavChild("Shipping", "#", ul);
	makeNavChild("Contact Us", "contact.html", ul);

	document.body.insertBefore(nav, document.body.firstChild);

	//must do this after adding elements to the DOM so we can modify them through fetching them from DOM
	var liItems = document.getElementsByClassName("navButton");
	for (var i = 0; i < liItems.length; i++) {
		liItems[i].setAttribute(
			"style",
			"box-shadow: inset 0 0 10px #6b7482; border-radius: 4px; margin-right: 1px; margin-left: 1px; padding-right: 1px; padding-left: 1px"
		);
		liItems[i].classList.add("col-12");
	}
};