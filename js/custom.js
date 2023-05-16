
//=================НАВИГАЦИЯ ПО САЙТУ==============================================================================================================================================================================================================================================================================
const linksTo = document.querySelectorAll("[data-goto]");

if (linksTo.length > 0) {
	for (let index = 0; index < linksTo.length; index++) {
		const linkTo = linksTo[index];
		linkTo.addEventListener("click", linkClickTo)

	}
	function linkClickTo(e) {
		const linkTo = e.target;
		if (linkTo.dataset.goto && document.querySelector(linkTo.dataset.goto)) {
			const gotoBlock = document.querySelector(linkTo.dataset.goto);
			const gotoBlockCoordinate = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header").offsetHeight;

			window.scrollTo({
				top: gotoBlockCoordinate,
				behavior: "smooth",
			});
			e.preventDefault()
		}
	}
}




