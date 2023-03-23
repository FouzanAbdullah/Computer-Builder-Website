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

	//home nav button
	var liHome = document.createElement("li");
	liHome.classList.add("nav-item", "navButton");

	var aHome = document.createElement("a");
	aHome.classList.add("nav-link");
	aHome.innerHTML = "Home";
	aHome.href = "index.html";

	//products nav button
	var liProducts = document.createElement("li");
	liProducts.classList.add("nav-item", "navButton");

	var aProducts = document.createElement("a");
	aProducts.classList.add("nav-link");
	aProducts.innerHTML = "Products";
	aProducts.href = "featured.html";

	//events nav button
	var liEvents = document.createElement("li");
	liEvents.classList.add("nav-item", "navButton");

	var aEvents = document.createElement("a");
	aEvents.classList.add("nav-link");
	aEvents.innerHTML = "Events";
	aEvents.href = "events.html";

	//questionnaire nav button
	var liQuestion = document.createElement("li");
	liQuestion.classList.add("nav-item", "navButton");

	var aQuestion = document.createElement("a");
	aQuestion.classList.add("nav-link");
	aQuestion.innerHTML = "Questionnaire";
	aQuestion.href = "questionnaire.html";

	//quiz nav button
	var liQuiz = document.createElement("li");
	liQuiz.classList.add("nav-item", "navButton");

	var aQuiz = document.createElement("a");
	aQuiz.classList.add("nav-link");
	aQuiz.innerHTML = "Quiz";
	aQuiz.href = "quiz.html";

	//assign the correct active list item in the navbar
	var pageName = getPageName();
	switch (pageName) {
		case "home":
			aHome.classList.add("active");
			aHome.setAttribute("style", "border-bottom: 2px solid #4287f5");
			break;
		case "timeline":
			aTimeline.classList.add("active");
			aTimeline.setAttribute("style", "border-bottom: 2px solid #4287f5");
			break;
		case "events":
			aEvents.classList.add("active");
			aEvents.setAttribute("style", "border-bottom: 2px solid #4287f5");
			break;
		case "questionnaire":
			aQuestion.classList.add("active");
			aQuestion.setAttribute("style", "border-bottom: 2px solid #4287f5");
			break;
		case "quiz":
			aQuiz.classList.add("active");
			aQuiz.setAttribute("style", "border-bottom: 2px solid #4287f5");
			break;
	}

	//add the created elements to the navbar element
	ul.appendChild(liHome);
	liHome.appendChild(aHome);
	ul.appendChild(liProducts);
	liProducts.appendChild(aProducts);
	ul.appendChild(liEvents);
	liEvents.appendChild(aEvents);
	ul.appendChild(liQuestion);
	liQuestion.appendChild(aQuestion);
	ul.appendChild(liQuiz);
	liQuiz.appendChild(aQuiz);

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