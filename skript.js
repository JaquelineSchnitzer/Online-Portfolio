document.getElementById("linkUeberMich").addEventListener("click", clickUeberMich);
document.getElementById("linkProjekte").addEventListener("click", clickProjekte);
document.getElementById("linkKontakt").addEventListener("click", clickKontakt);
document.getElementById("webshopLink").addEventListener("click", clickWebshop);

function clickUeberMich () {
	document.querySelector('#persona').scrollIntoView({ 
	behavior: 'smooth'});
}

function clickProjekte () {
	document.querySelector('#werke').scrollIntoView({ 
	behavior: 'smooth'});
}

function clickKontakt () {
	document.querySelector('footer').scrollIntoView({ 
	behavior: 'smooth'});
}

function clickWebshop () {
	window.open("https://jaquelineschnitzer.github.io/EIA1_Webshop/Aufgabe_12.html", "_blank");
}


window.sr = ScrollReveal({reset: true});
sr.reveal('#jackyPersona', {duration: 700});s
sr.reveal('#personaText', {duration: 700});
sr.reveal('#startpageText', {duration: 700});
sr.reveal('#project', {duration: 700});


