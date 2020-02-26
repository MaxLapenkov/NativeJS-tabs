

window.addEventListener('DOMContentLoaded', function () {

	"use strict";
	function myTabs (tabs, tabsContainer, tabsContent) {
// creating variables
	let tab = document.querySelectorAll(tabs), 
		info = document.querySelector(tabsContainer),
		tabContent = document.querySelectorAll(tabsContent);
//function for hiding TabsContent
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
//Hide all content except first
	hideTabContent(1);
//функуия для показа контента табов
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
// if you click on tab  function hides all content and then shows tabsContent that belongs to tab you clicked
	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

}
myTabs('.info-header-tab', '.info-header', '.info-tabcontent');

});