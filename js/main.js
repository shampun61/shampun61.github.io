window.onload = function () {
	//Функции для перехода по страницам
	function goCover() {
		document.location.href = "/index.html";
		return false
	}
	if (document.location.pathname === '/cover.html') {
		setTimeout(() => {
			goCover()
		}, 5000);
	}


	//Фукнции для DOM
	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		if (!targetElement.closest(".search__wrapper") && !targetElement.closest(".open-catalog") && !targetElement.closest(".catalog__wrapper") && !document.querySelector(".catalog__wrapper").classList.contains("_active")) {
			document.querySelector(".page").classList.remove("_active")
		}
		if (!targetElement.closest(".search__wrapper") && !targetElement.closest(".search__open")) {
			document.querySelector(".search__items").classList.remove("_active")

			if (!document.querySelector(".catalog__wrapper").classList.contains("_active") && !document.querySelector(".burger-menu").classList.contains("_active") && !targetElement.closest(".open-popup") && !targetElement.closest(".popup")) {
				document.body.classList.remove("_scroll-lock")
			}
			if (!targetElement.closest("[drop-menu-choose]")) {
				document.querySelectorAll("._drop-arrow").forEach((item) => {
					item.classList.remove("_active");
				})
				document.querySelectorAll("[drop-list-choose]").forEach((item) => {
					item.classList.remove("_active");
				})
				document.querySelectorAll("[drop-value-choose]").forEach((item) => {
					item.classList.remove("_active");
				})

			}
			if (!targetElement.closest(".drop-down-wrapper")) {
				if (document.querySelector(".drop-down-wrapper") && document.querySelector(".drop-down-choices") && document.querySelector(".drop-down-value")) {
					document.querySelector(".drop-down-wrapper").classList.remove("_active")
					document.querySelector(".drop-down-choices").classList.remove("_active")
					document.querySelector(".drop-down-value").classList.remove("_active")
				}

			}
		} else if (targetElement.closest('.search__link.icon-close-add')) {
			document.querySelector(".search__items").classList.remove("_active")
		}
	})
	document.addEventListener("DOMContentLoaded", function (e) {

	});

	//==============<SELECT-CHOOSE>=================================================================================================================================================================================================================================================================================
	const dropChoose = document.querySelectorAll("[drop-menu-choose]");
	if (dropChoose.length > 0) {
		for (let index = 0; index < dropChoose.length; index++) {
			const drop = dropChoose[index];
			let dropChooseItems = drop.querySelectorAll("[drop-item-choose]");
			const dropChooseValue = drop.querySelector("[drop-value-choose]");
			const dropChooseList = drop.querySelector("[drop-list-choose]")

			if (dropChooseItems.length > 0 && dropChooseValue && dropChooseList) {
				dropChooseItems.forEach((dropChooseItem) => {
					dropChooseItem.addEventListener("click", function (e) {
						if (dropChooseValue.tagName == "DIV") {
							let dropChooseItemValue = dropChooseItem.querySelector("a").innerHTML;
							dropChooseValue.innerHTML = dropChooseItemValue;
							e.preventDefault()
						}
					})

					if (dropChooseValue.tagName == 'INPUT') {

						dropChooseValue.addEventListener("click", function (e) {
							if (document.querySelector("[drop-list-choose]._active")) {
								document.querySelector("[drop-list-choose]._active").classList.remove("_active")
								if (document.querySelector("._drop-arrow._active")) {
									document.querySelector("._drop-arrow._active").classList.remove("_active")
								}
							}
							dropChooseList.classList.toggle("_active")
							if (drop.querySelector("._drop-arrow") && !drop.querySelector("._drop-arrow").classList.contains("_active")) {
								drop.querySelector("._drop-arrow").classList.add("_active")
							} else if (drop.querySelector("._drop-arrow") && drop.querySelector("._drop-arrow").classList.contains("_active")) {
								drop.querySelector("._drop-arrow").classList.remove("_active")
							}
						})

						dropChooseItems.forEach((dropChooseItem) => {
							dropChooseItem.addEventListener("click", function (e) {
								let dropChooseItemValue = dropChooseItem.querySelector("a").innerHTML;
								dropChooseValue.value = dropChooseItemValue.trim()

								if (document.querySelector("[drop-list-choose]._active")) {
									document.querySelector("[drop-list-choose]._active").classList.remove("_active")
									if (document.querySelector("._drop-arrow._active")) {
										document.querySelector("._drop-arrow._active").classList.remove("_active")
									}
								}
								e.preventDefault()
							})

						})
					}




				})
			}
		}
	}


	//==================<BURGER-CHOOSE-LANGUAGE>=============================================================================================================================================================================================================================================================================
	const languages = document.querySelectorAll(".burger-menu__language");
	if (languages.length > 0) {
		for (let index = 0; index < languages.length; index++) {
			const language = languages[index];
			language.addEventListener("click", function (e) {
				languages.forEach((item) => {
					item.classList.remove("_active")
				})
				language.classList.add("_active")
			})
		}
	}

	//===================<OPEN-BURGER>============================================================================================================================================================================================================================================================================
	const burgerButton = document.querySelectorAll(".open-burger");
	const burger = document.querySelector(".burger-menu");
	for (let index = 0; index < burgerButton.length; index++) {
		const button = burgerButton[index];
		button.addEventListener("click", function (e) {
			burger.classList.toggle("_active")
			button.classList.toggle("_active")


			if (document.querySelector(".catalog__wrapper").classList.contains("_active")) {
				document.querySelector(".catalog__wrapper").classList.remove("_active")
				document.querySelector(".open-catalog._active").classList.remove("_active")
				document.body.classList.add("_scroll-lock")
			} else {
				document.body.classList.add("_scroll-lock")
			}
		})
	}

	//=====================<BANNERS-SLIDER>==========================================================================================================================================================================================================================================================================
	if (document.querySelector(".banners-slider__slides.swiper-container")) {
		new Swiper(".banners-slider__slides", {
			watchOverFlow: true,
			nested: true,
			observeParents: true,
			observer: true,
			observeChildrens: true,
			spaceBetween: 24,
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: true,
			navigation: {
				prevEl: '.banners-slider__arrow-prev',
				nextEl: ".banners-slider__arrow-next",
			},
			pagination: {
				el: '.banners-slider__dotts',
				clickable: true,
				type: 'bullets',
			},
			breakpoints: {
				767: {
					speed: 1000,
				},
				320: {
					speed: 300,
				},
			},
		})
	}
	//=====================<NEWS-SLIDER>==========================================================================================================================================================================================================================================================================
	if (document.querySelector(".news__slides.swiper-container")) {
		new Swiper(".news__slides", {
			watchOverFlow: true,
			nested: true,
			observeParents: true,
			observer: true,
			observeChildrens: true,
			spaceBetween: 30,
			autoHeight: true,
			slidesPerGroup: 1,
			navigation: {
				prevEl: '.news__arrow-prev',
				nextEl: ".news__arrow-next",
			},
			pagination: {
				el: '.news__dotts',
				clickable: true,
				type: 'bullets',
			},
			breakpoints: {

				1024: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				320: {
					slidesPerView: 1,
				},
			},
		})
	}

	//=======================<MORE-TEXT>=======================================================================================================================================================================================================================================================================
	const dataMores = document.querySelectorAll("[data-more]");
	if (dataMores.length > 0) {
		for (let index = 0; index < dataMores.length; index++) {
			const dataMore = dataMores[index];

			const button = dataMore.querySelector("[data-more-button]");
			const text = dataMore.querySelector("[data-more-text]")
			button.addEventListener("click", function (e) {
				text.classList.toggle("_active")
				button.classList.toggle("_active")
				e.preventDefault()
			})

		}
	}
	//=========================<SIDEBAR-SCROLL>======================================================================================================================================================================================================================================================================\
	if (window.innerWidth >= 992) {
		const sidebar = document.querySelector(".sidebar");
		if (sidebar) {
			let coordY = sidebar.getBoundingClientRect().top;
			let height = sidebar.offsetHeight;
			const headerHeight = document.querySelector(".header").offsetHeight;

			window.addEventListener('scroll', function (e) {
				let last = 0
				if (window.pageYOffset >= coordY) {
					if (!sidebar.classList.contains("_right")) {
						sidebar.classList.add("_scroll")
					}
					if (sidebar.classList.contains("_right")) {
						sidebar.classList.add("_right_scroll")
					}
					sidebar.style.marginTop = headerHeight + 30 + 'px';
				} else if (window.pageYOffset < coordY) {
					sidebar.style.marginTop = '0px'
					if (!sidebar.classList.contains("_right")) {
						sidebar.classList.remove("_scroll")
					}
					if (sidebar.classList.contains("_right")) {
						sidebar.classList.remove("_right_scroll")
					}
				} else if (window.pageYOffset == 0) {
					sidebar.style.marginTop = '0px'
					if (sidebar.classList.contains("_right")) {
						sidebar.classList.remove("_right_scroll")
					}
					if (!sidebar.classList.contains("_right")) {
						sidebar.classList.remove("_scroll")
					}
				}

			})
		}
	}
	//===========================<CART>===================================================================================================================================================================================================================================================================
	let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
	const products = document.querySelectorAll(".cart__product");
	if (products.length > 0) {
		for (let index = 0; index < products.length; index++) {
			const item = products[index];
			let productOnePiece = item.querySelector(".item-cart__price span p");
			let productTotalPrice = item.querySelector(".item-cart__total span p");
			if (productTotalPrice != null) {
				productTotalPrice.innerHTML = '';
				productTotalPrice.innerHTML = productOnePiece.innerHTML;
			} else {
				continue
			}
		}


		let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span").innerHTML;
		let prices = document.querySelectorAll(".item-cart__total span p");
		for (let index = 0; index < prices.length; index++) {
			let price = prices[index];
			let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
			totalSidebar.innerHTML = Number(totalSidebar.innerHTML) + Number(price.innerHTML);
		}
		let quantitySidebar = document.querySelector(".quantity-products span p");
		let quantityAll = document.querySelectorAll(".value-quantity");
		for (let index = 0; index < quantityAll.length; index++) {
			const quantity = quantityAll[index];
			let quantityAttribute = quantity.getAttribute("value")
			quantitySidebar.innerHTML = Number(quantitySidebar.innerHTML) + Number(quantityAttribute);
		}
		for (let index = 0; index < products.length; index++) {
			const product = products[index];
			let productOnePiece = product.querySelector(".item-cart__price span p");
			let productTotalPrice = product.querySelector(".item-cart__total span p");
			let productQuantity = product.querySelector(".value-quantity");
			const productPlus = product.querySelector(".plus-quantity");
			const productMinus = product.querySelector(".minus-quantity");
			if (product.querySelector(".item-cart__total span p")) {
				productQuantity.addEventListener("change", changeCalcQuantity)
				function changeCalcQuantity(e) {
					if (productQuantity.value > 0) {
						let productQuantityValue = product.querySelector(".value-quantity").value;
						productTotalPrice.innerHTML = productOnePiece.innerHTML * productQuantityValue;
						productQuantity.removeAttribute("value")
						productQuantity.setAttribute("value", productQuantityValue)

						let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
						totalSidebar.innerHTML = '';
						let prices = document.querySelectorAll(".item-cart__total span p");
						for (let index = 0; index < prices.length; index++) {
							let price = prices[index];
							let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
							totalSidebar.innerHTML = Number(totalSidebar.innerHTML) + Number(price.innerHTML);
						}
						let quantitySidebar = document.querySelector(".quantity-products span p");
						let quantityAll = document.querySelectorAll(".value-quantity");
						quantitySidebar.innerHTML = '';
						for (let index = 0; index < quantityAll.length; index++) {
							const quantity = quantityAll[index];
							let quantityAttribute = quantity.getAttribute("value")
							quantitySidebar.innerHTML = Number(quantitySidebar.innerHTML) + Number(quantityAttribute);
						}
					}
				}
				productQuantity.addEventListener("blur", blueCalcQuantity)
				function blueCalcQuantity(e) {
					let productQuantityValue = product.querySelector(".value-quantity").value;
					productQuantityValue.innerHTML = productTotalPrice.innerHTML / productOnePiece.innerHTML;
					productQuantity.removeAttribute("value")
					productQuantity.setAttribute("value", productQuantityValue)
					let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
					totalSidebar.innerHTML = '';
					let prices = document.querySelectorAll(".item-cart__total span p");
					for (let index = 0; index < prices.length; index++) {
						let price = prices[index];
						let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
						totalSidebar.innerHTML = Number(totalSidebar.innerHTML) + Number(price.innerHTML);
					}
					let quantitySidebar = document.querySelector(".quantity-products span p");
					let quantityAll = document.querySelectorAll(".value-quantity");
					quantitySidebar.innerHTML = '';
					for (let index = 0; index < quantityAll.length; index++) {
						const quantity = quantityAll[index];
						let quantityAttribute = quantity.getAttribute("value")
						quantitySidebar.innerHTML = Number(quantitySidebar.innerHTML) + Number(quantityAttribute);
					}
				}
				let count = Number(productQuantity.value)
				productPlus.addEventListener("click", () => increaseQuantityButtonClick(event, productQuantity))
				function increaseQuantityButtonClick(event, productQuantityPlus) {
					if (count < 20) {
						count = productQuantityPlus.getAttribute("value");
						count = Number(count) + 1
						productQuantityPlus.value = count
						productQuantityPlus.removeAttribute("value")
						productQuantityPlus.setAttribute("value", count)
						productTotalPrice.innerHTML = productOnePiece.innerHTML * count;
						let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span").innerHTML;
						totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
						totalSidebar.innerHTML = Number(totalSidebar.innerHTML) + Number(productOnePiece.innerHTML);
						let quantitySidebar = document.querySelector(".quantity-products span p");
						quantitySidebar.innerHTML = Number(quantitySidebar.innerHTML) + 1;
					}
					event.preventDefault()
				}
				productMinus.addEventListener("click", () => reduceQuantityButtonClick(event, productQuantity))
				function reduceQuantityButtonClick(event, productQuantityMinus) {
					if (productQuantityMinus.getAttribute("value") >= 1) {
						count = productQuantityMinus.getAttribute("value");
						count = Number(count) - 1
						productQuantityMinus.value = count
						productQuantityMinus.removeAttribute("value")
						productQuantityMinus.setAttribute("value", count)
						productTotalPrice.innerHTML -= productOnePiece.innerHTML;
						let totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span").innerHTML;
						totalSidebar = document.querySelector(".price-total-cart-sidebar__price-current span");
						totalSidebar.innerHTML = Number(totalSidebar.innerHTML) - Number(productOnePiece.innerHTML);
						let quantitySidebar = document.querySelector(".quantity-products span p");
						quantitySidebar.innerHTML = Number(quantitySidebar.innerHTML) - 1;
					}
					event.preventDefault()
				}
			}
		}
	}


	//==================FILTERS=============================================================================================================================================================================================================================================================================
	const filters = document.querySelectorAll(".products__filter");
	if (filters.length > 0) {
		for (let index = 0; index < filters.length; index++) {
			const filter = filters[index];
			filter.addEventListener("click", function (e) {
				filters.forEach((item) => {
					item.classList.remove("_active")
				})

				filter.classList.add("_active")

			})
		}
	}
}

