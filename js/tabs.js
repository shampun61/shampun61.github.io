
const tabsItems = document.querySelectorAll("[data-tab-path]");
const tabsTargetItems = document.querySelectorAll("[data-tab-target]");
if (tabsItems.length > 0 && tabsTargetItems.length > 0) {
	for (let index = 0; index < tabsItems.length; index++) {
		const tabsItem = tabsItems[index];
		tabsItem.addEventListener("click", tabOpen)
		function tabOpen(e) {
			if (e.target.closest("[data-tab-path]") && document.getElementById(tabsItem.dataset.tabPath)) {
				tabClose(e);
				const tabsTargetItem = document.getElementById(tabsItem.dataset.tabPath);
				e.target.closest("[data-tab-path]").classList.add("_active")
				tabsTargetItem.classList.add("_active")
				let tabsTargetItemCoord = tabsTargetItem.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header").offsetHeight;
				window.scrollTo({
					top: tabsTargetItemCoord,
					behavior: "smooth",
				});



				e.preventDefault()
			}
			e.preventDefault()
		}
		function tabClose(e) {
			if (document.querySelector("[data-tab-path]._active") && document.querySelector("[data-tab-target]._active")) {
				document.querySelector("[data-tab-path]._active").classList.remove("_active")
				document.querySelector("[data-tab-target]._active").classList.remove("_active")


			}
			e.preventDefault()
		}
	}

}

