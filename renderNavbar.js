document.addEventListener("DOMContentLoaded", function () {
	renderNavBar();
	renderFooter();
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
	a.classList.add("nav-link", "text-white");
	a.innerHTML = label;
	a.href = linksTo;
	a.style.padding = "15px";

	ulElement.appendChild(li);
	li.appendChild(a);
}

var renderFooter = function() {
	var body = document.getElementsByTagName("BODY")[0];
	body.setAttribute("style", "height: auto; width: auto; min-height: 100%; min-height: 100vh; overflow-y: scroll; margin: 0; padding: 0;");

	var footer = document.createElement("footer");
	var h1 = document.createElement("h1");
	h1.classList.add("text-white", "text-center");
	h1.innerHTML = "Footer";
	footer.appendChild(h1);
	
	document.getElementsByTagName("BODY")[0].appendChild(footer);
}

var renderNavBar = function () {
	var nav = document.createElement("nav");
	nav.classList.add("navbar", "navbar-expand-md", "navbar-dark", "bg-dark");
	nav.setAttribute("style", "padding: 0px;");

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
	ul.setAttribute("style", "height:100%;");
	div.appendChild(ul);
	
	//add space in navbar
	var spacer = document.createElement("div");
	spacer.classList.add("col-2");
	div.appendChild(spacer);

	var ul2 = document.createElement("ul");
	ul2.classList.add(
		"navbar-nav",
		"nav-fill",
		"col-md-3"
	);
	div.appendChild(ul2);

	makeNavChild("Home", "index.html", ul);
	makeNavChild("Products", "featured.html", ul);
	makeNavChild("Build a PC", "build.html", ul);
	makeNavChild("Featured", "featured.html", ul);
	makeNavChild("Specials", "#", ul);
	makeNavChild("Contact Us", "contact.html", ul);

	makeNavChild("Shipping", "#", ul2);
	makeNavChild("My Account", "login.html", ul2);
	makeNavChild("Sign Up", "register.html", ul2);

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