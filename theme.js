/*
Danielle Taplin
WEB 330 JavaScript II
theme.css for landing page light mode/dark mode toggle
*/

function setDefaultTheme() { //call function setdefaulttheme
	const theme = localStorage.getItem("mode") || "light-theme"; //set default to light mode
	const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off"; //set toggle for dark mode
	const iconText = localStorage.getItem("iconText") || "Light Mode"; //set toggle for light mode

	document.body.classList.value = theme; //call the theme
	document.getElementById("icon-mode").classList.add(iconMode); //push dark mode to html
	document.getElementById("icon-text").innerHTML = iconText; //push light mode to html
}


function setSelectedTheme() { //sets the html body to selected theme or default light theme
	document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}