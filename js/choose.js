const chooseParent = document.querySelectorAll("[data-choose]");


if (chooseParent.length > 0) {
	for (let index = 0; index < chooseParent.length; index++) {
		const parent = chooseParent[index];
		parent.addEventListener("click", choose);


	}

	function choose(e) {
		const chooseItems = parent.querySelectorAll("[data-choose-item]");

		for (let index = 0; index < chooseItems.length; index++) {
			const chooseItem = chooseItems[index];
			chooseItem.addEventListener("click", function (e) {
				if (parent.querySelector("[data-choose-item]").classList.contains("_active")) {
					parent.querySelector("[data-choose-item]").classList.contains("_active").classList.remove("_active");
				}
				chooseItem.classList.add("_active")
			})
		}
	}
}