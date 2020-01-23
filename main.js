let toggleBtn = document.querySelector('.toggle-btn');
let mobileNav = document.querySelector('.nav-items-container');
let showMobileMenu = false;
toggleBtn.addEventListener('click', () => {
	if (!showMobileMenu) {
		mobileNav.classList.add('showMobileNav');
		showMobileMenu = true;
	} else {
		mobileNav.classList.remove('showMobileNav');
		showMobileMenu = true;
	}
});
