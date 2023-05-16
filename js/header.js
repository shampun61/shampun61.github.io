//===========================<ВСЁ СВЯЗАННОЕ С ШАПКОЙ>====================================================================================================================================================================================================================================================================
/*window.addEventListener("scroll", function (e) {
	if (document.querySelector(".header") && document.querySelector(".page")) {
		let header = document.querySelector(".header")
		let block = document.querySelector(".page")
		let offSet = block.clientHeight;
		let offSetTop = block.getBoundingClientRect().top;
		let cf = 12;

		if (window.pageYOffset > (offSet - offSetTop) / cf) {
			header.classList.add("scroll")
			document.querySelector(".full-screen").classList.add("_scroll")
		} else {
			header.classList.remove("scroll")
			document.querySelector(".full-screen").classList.remove("_scroll")
		}
	}
})
*/
//===============================================================================================================================================================================================================================================================================================
/*
if (document.querySelector(".header")) {

	const headerElement = document.querySelector(".header");
	const callback = function (entries, observer) {
		if (entries[0].isInteresting) {
			headerElement.classList.remove('_scroll')
		} else {
			headerElement.classList.add("_scroll")
		}
	};
	const headerObserver = new IntersectionObserver(callback)
	headerObserver.observe(headerElement)
}
*/


let lastScroll = 0;
const header = document.querySelector('.header');
const defaultOffset = header.offsetHeight;


/*
window.addEventListener('scroll', () => {
	if (window.pageYOffset > lastScroll && header.classList.contains("_scroll") && window.pageYOffset > defaultOffset) {
		//scroll down
		ListenerHeight()
		header.classList.remove('_scroll');
	}
	else if (window.pageYOffset < lastScroll && !header.classList.contains("_scroll")) {
		//scroll up
		ListenerHeight()
		header.classList.add('_scroll');
	}
	if (window.pageYOffset == 0) {
		header.classList.remove('_scroll');
	}
	lastScroll = window.pageYOffset;
})
*/
//===============================================================================================================================================================================================================================================================================================

//=========================ДЕЛАЕМ=HOVER=НА=ССЫЛКИ=В=HEADER======================================================================================================================================================================================================================================================================
const links = document.querySelectorAll("[data-link]");
//При наведении
/*
links.forEach((link) => {
	link.addEventListener("mouseover", function (e) {
		if (!e.target.classList.contains("tdu")) {
			e.target.classList.add("tdu")
		}
		link.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("lock")) {
				e.target.classList.remove("tdu")
			}
		})
	})
})
*/
//При клике
/*
if (links.length > 0) {
	for (let index = 0; index < links.length; index++) {
		const element = links[index];
		element.addEventListener("click", removeActiveClass);
		element.addEventListener("click", setActiveLink);
		element.addEventListener("mouseout", removeActiveClass);
	}
	function removeActiveClass(e) {
		document.querySelector("[data-link].active")
	}
	function setActiveLink(e) {
		e.target.classList.add("active")
	}
}
*/


//===============================================================================================================================================================================================================================================================================================
// Отступ от header
if (document.querySelector(".header__wrapper") && document.querySelector(".catalog__wrapper")) {
	const headerElement = document.querySelector(".header__wrapper");
	const catalog = document.querySelector(".catalog__wrapper");
	const cover = document.querySelector(".catalog__wrapper span")
	const bannersSlider = document.querySelector(".banners-slider");
	window.addEventListener("scroll", ListenerHeight)
	window.addEventListener("resize", ListenerHeight)
	function ListenerHeight() {
		let headerHeight = headerElement.offsetHeight + 'px';
		catalog.style.marginTop = headerHeight;
		cover.style.height = headerHeight;

		catalog.style.paddingBottom = '100%';
	}
	ListenerHeight()


	function listenerHeightNotScroll() {
		let headerHeight = headerElement.offsetHeight + 'px';
		document.querySelector(".page").style.paddingTop = 30 + parseInt(headerHeight) + 'px';
		if (window.innerWidth <= 767) {
			document.querySelector(".page").style.paddingTop = 30 + parseInt(headerHeight) + 'px';
			document.querySelector(".page").style.paddingBottom = 0 + 'px';

		}
	}
	listenerHeightNotScroll()
}
if (document.querySelector(".header__wrapper") && document.querySelector(".burger-menu")) {
	const headerElement = document.querySelector(".header__wrapper");
	const burgerMenu = document.querySelector(".burger-menu");
	window.addEventListener("scroll", ListenerHeight)
	window.addEventListener("resize", ListenerHeight)
	function ListenerHeight() {
		let headerHeight = headerElement.offsetHeight + 'px';
		burgerMenu.style.marginTop = headerHeight;
		burgerMenu.style.paddingBottom = '100%';
	}
	ListenerHeight()
}





//Поиск в header

const openCloseSearch = document.querySelectorAll(".open-search");
const inputSearch = document.querySelector(".search__input");
const buttonSearch = document.querySelector(".search__link");
const search = document.querySelector(".search__wrapper")
if (inputSearch) {
	inputSearch.addEventListener("input", searchFunction)
}
function searchFunction(e) {
	if (inputSearch.value.length == 0) {
		buttonSearch.classList.remove("icon-find")
		buttonSearch.classList.add("icon-close-add")
		buttonSearch.removeAttribute("type")
		const buttonSearchClose = document.querySelector('.search__link.icon-close-add')
		buttonSearchClose.addEventListener("click", closeSearch)
		function closeSearch(e) {
			document.querySelector(".page").classList.toggle("_active")
			if (buttonSearch.classList.contains("icon-close-add")) {
				search.classList.remove("_active")
				if (!document.querySelector(".catalog__wrapper").classList.contains("_active")) {
					document.body.classList.remove("_scroll-lock")
				}
			} else {
				search.classList.add("_active")
				if (document.querySelector(".catalog__wrapper").classList.contains("_active")) {
					document.body.classList.add("_scroll-lock")
				}
			}

			e.preventDefault()
		}

	} else if (inputSearch.value.length > 0) {
		buttonSearch.classList.remove("icon-close-add")
		buttonSearch.classList.add("icon-find")
		buttonSearch.setAttribute("type", 'submit')
	}
}
searchFunction()
openCloseSearch.forEach((item) => {
	item.addEventListener("click", openSearch);
})
function openSearch(e) {
	search.classList.add("_active")
	document.body.classList.add("_scroll-lock")
	if (document.querySelector(".burger-menu").classList.contains("_active")) {
		document.querySelector(".burger-menu").classList.remove("_active")
		document.querySelector(".open-burger._active").classList.remove("_active")
	} else if (document.querySelector(".catalog__wrapper").classList.contains("_active")) {
		document.querySelector(".catalog__wrapper").classList.remove("_active")
		document.querySelector(".open-catalog._active").classList.remove("_active")
		document.body.classList.add("_scroll-lock");
	}
	document.body.classList.add("_scroll-lock");
	e.preventDefault()
}
const itemsSearch = document.querySelectorAll(".items-search__item");
for (let index = 0; index < itemsSearch.length; index++) {
	const itemSearch = itemsSearch[index];
	itemSearch.addEventListener("click", insertSearch)

	function insertSearch(e) {
		const targetElement = e.target;
		inputSearch.value = '';
		inputSearch.value = targetElement.innerHTML;
		searchFunction()
		e.preventDefault()
	}
}
if (window.innerWidth >= 767) {
	const inputSearch = document.querySelector(".search__input");
	const buttonSearch = document.querySelector(".search__link");
	const search = document.querySelector(".search__wrapper")
	const itemsSearch = document.querySelector(".search__items")
	inputSearch.addEventListener("click", openSearch)
	function openSearch(e) {
		itemsSearch.classList.add("_active")
		document.querySelector(".page").classList.add("_active")
		if (!document.querySelector(".catalog__wrapper").classList.contains("_active") && !document.body.classList.contains("_scroll-lock")) {
			document.body.classList.add("_scroll-lock")

		}
	}
}





//Открытие каталога по кнопке

const buttonCatalog = document.querySelectorAll(".open-catalog");
if (buttonCatalog) {
	const catalog = document.querySelector(".catalog__wrapper");

	buttonCatalog.forEach((item) => {
		item.addEventListener("click", function (e) {
			catalog.classList.toggle("_active")
			if (catalog.classList.contains("_active")) {
				document.body.classList.add("_scroll-lock")
			} else {
				document.body.classList.remove("_scroll-lock")
			}


			if (document.querySelector(".search__wrapper").classList.contains("_active")) {
				document.querySelector(".page").classList.add("_active")
			}
			if (catalog.classList.contains("_active")) {
				document.querySelector(".page").classList.add("_active")
			} else {
				document.querySelector(".page").classList.remove("_active")
			}
			item.classList.toggle("_active")
			if (document.querySelector(".burger-menu").classList.contains("_active")) {
				document.querySelector(".burger-menu").classList.remove("_active")
				document.querySelector(".open-burger._active").classList.remove("_active")
				document.body.classList.add("_scroll-lock");
			} else if (document.querySelector(".search__wrapper").classList.contains("_active")) {
				document.querySelector(".search__wrapper").classList.remove("_active")

				document.body.classList.add("_scroll-lock");
			}
			e.preventDefault()
		});
	})


}
