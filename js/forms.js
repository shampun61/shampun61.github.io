//========================УБИРАЕМ=PLACEHOLDER=У=INPUT========================================================================================================================
const inputs = document.querySelectorAll("[data-input]");
if (inputs.length > 0) {
	for (let index = 0; index < inputs.length; index++) {
		const element = inputs[index];
		let inputPlaceholder = element.placeholder;
		element.addEventListener("focusin", function (e) {
			element.classList.add("active")
			element.placeholder = '';
		})
		element.addEventListener("focusout", function (e) {
			element.classList.remove("active")
			element.placeholder = inputPlaceholder;
		})
	}
}

//==========================ВАЛИДАЦИЯ EMAIL=====================================================================================================================================================================================================================================================================\
const formValid = document.querySelectorAll("[data-form]");
const inputValid = document.querySelectorAll("[data-validInput]")
if (formValid.length > 0 && inputValid.length > 0) {
	for (let index = 0; index < formValid.length; index++) {
		const element = formValid[index];
		element.addEventListener("submit", function (e) {
			for (let index = 0; index < inputValid.length; index++) {
				const inputValidTest = inputValid[index];
				if (emailTest(inputValidTest)) {
					alert('Неверно введён E-mail');
				} else {
					inputValidTest.classList.add("_passed")
				}
				inputValidTest.addEventListener("focusin", function (e) {
					//  .......
				})
			}
			e.preventDefault()
		})
	}
}
//Функция для проверки
function emailTest(input) {
	return /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(input.value);
}


//======================<ДЛЯ МНОГИХ ЭЛЕМЕНТОВ ФОРМ>=========================================================================================================================================================================================================================================================================

//========================<RADIO>=======================================================================================================================================================================================================================================================================
const radioButtons = document.querySelectorAll("[radioButtons]");
if (radioButtons.length > 0) {
	for (let index = 0; index < radioButtons.length; index++) {
		const radioButton = radioButtons[index];
		const parent = radioButton.querySelectorAll(".radio-button")


		parent.forEach((item) => {
			const input = item.querySelector("input")
			item.addEventListener("click", function (e) {
				parent.forEach((item) => {
					item.classList.remove("_active")
					if (item.closest(".parent-radio")) {
						item.closest(".parent-radio").classList.remove("_active")
					}
					item.querySelector("span").classList.remove("icon-check")
					input.checked == 'false';
				})
				input.checked == 'true';
				if (item.closest(".parent-radio")) {
					item.closest(".parent-radio").classList.add("_active")
				}
				item.querySelector("span").classList.add("icon-check")
				item.classList.add("_active")
			})
		})



	}
}

//=========================<INPUT>======================================================================================================================================================================================================================================================================
const animationBlock = document.querySelectorAll(".input");
for (let index = 0; index < animationBlock.length; index++) {
	const el = animationBlock[index];
	const animationLabel = el.querySelector("label")
	const animationInput = el.querySelector("input")

	animationInput.addEventListener("focus", function (e) {
		el.classList.add("_active")

		el.classList.add("icon-check")
		if (!el.classList.contains("_optional")) {
			el.classList.remove("_error")
			el.classList.remove("icon-close-add")
		}
	})
	animationInput.addEventListener("blur", function (e) {
		if (animationInput.value.length == 0) {

			el.classList.remove("icon-check")

			el.classList.remove("_active")
			if (!el.classList.contains("_optional")) {
				el.classList.add("icon-close-add")
				el.classList.add("_error")
			}
		}

	})
	if (animationInput.value.length != 0) {
		el.classList.remove("icon-close-add")
		el.classList.add("icon-check")
		el.classList.add("_active")
		if (!el.classList.contains("_optional")) {
			el.classList.remove("_error")

		}
	}
}
//=======================<FORM-BAIKAL>========================================================================================================================================================================================================================================================================
const checkboxes = document.querySelectorAll("._checkbox");


for (let index = 0; index < checkboxes.length; index++) {
	const checkbox = checkboxes[index];
	checkbox.addEventListener("click", function (e) {
		const input = checkbox.querySelector("input");
		const label = checkbox.querySelector("label");
		const span = checkbox.querySelector("span")
		checkbox.classList.toggle("_active");

		const checkboxAgreement = document.querySelector(".registration__agreement-checkbox-wrapper");

		if (checkboxAgreement) {
			if (!checkboxAgreement.classList.contains("_active")) {
				document.querySelector(".registration__button").classList.add("disabled")
			} else {
				document.querySelector(".registration__button").classList.remove("disabled")
			}
		}
		if (checkbox.closest(".information__column")) {
			checkbox.closest(".information__column").classList.toggle("_active");
		}
		if (checkbox.classList.contains("_active")) {
			input.checked == true;
			if (span) {
				span.classList.add("icon-check")
			}
		} else {
			input.checked == false;
			if (span) {
				span.classList.remove("icon-check")
			}
		}


	})
}



const dropdowns = document.querySelectorAll(".drop-down-wrapper");
for (let index = 0; index < dropdowns.length; index++) {
	const dropdown = dropdowns[index];
	const dropdownValue = dropdown.querySelector(".drop-down-value");
	const dropdownChoices = dropdown.querySelector(".drop-down-choices");
	const dropdownChoice = dropdown.querySelectorAll(".drop-down-choice")
	dropdownValue.addEventListener("click", function (e) {
		dropdownValue.classList.toggle("_active");
		dropdownChoices.classList.toggle("_active")
		dropdown.classList.toggle("_active")
		e.preventDefault()
	})

	for (let index = 0; index < dropdownChoice.length; index++) {
		const dropdownChoiceItem = dropdownChoice[index];
		dropdownChoiceItem.addEventListener("click", function (e) {
			let dropdownChoiceItemValue = dropdownChoiceItem.querySelector("a").innerHTML;
			dropdownValue.innerHTML = dropdownChoiceItemValue
			dropdownValue.classList.remove("_active");
			dropdownChoices.classList.remove("_active")
			dropdown.classList.remove("_active")
			e.preventDefault()
		})
	}

}

//===========================СЧИТАТЬ КОЛ-ВО СИМВОЛОВ В TEXTAREA====================================================================================================================================================================================================================================================================
const itemsArea = document.querySelectorAll(".textarea_count");
if (itemsArea.length > 0) {
	for (let index = 0; index < itemsArea.length; index++) {
		const itemArea = itemsArea[index];
		let span = itemArea.querySelector(".counter_textarea");
		const textarea = itemArea.querySelector(".textarea_item");
		let counter = textarea.value.length;
		let textareaValue = textarea.getAttribute("maxlength");
		counter = textarea.value.length;
		span.innerHTML = counter + '/' + textareaValue;
		if (textarea.value.length >= textareaValue) {
			alert('Превышен лимит текста')
		}
		if (textarea.value.length >= 1) {
			textarea.focus()
		}
		textarea.addEventListener("input", function (e) {
			counter = textarea.value.length;
			span.innerHTML = counter + '/' + textareaValue;
			if (textarea.value.length >= textareaValue) {
				alert('Превышен лимит текста')
			}
		})
	}
}

//========================ВЫБОР================================================================================================================================================================================================================================================================
const chooces = document.querySelectorAll(".choose");
if (chooces.length > 0) {
	for (let index = 0; index < chooces.length; index++) {
		const choose = chooces[index];
		const chooseItems = choose.querySelectorAll(".choose-item");
		for (let index = 0; index < chooseItems.length; index++) {
			const chooseItem = chooseItems[index];
			chooseItem.addEventListener("click", function (e) {
				if (choose.querySelector(".choose-item._active")) {
					choose.querySelector(".choose-item._active").classList.remove("_active");
					ipp()
				}

				chooseItem.classList.add("_active");
				ipp()
				e.preventDefault()
			})
		}
	}
}

//=====================ИПП-КПП==========================================================================================================================================================================================================================================================================
function ipp() {
	const ipp = document.querySelector("._ipp");
	const kpp = document.querySelector("._kpp");
	if (ipp && kpp) {
		if (ipp.classList.contains("_active")) {
			kpp.style.display = 'none';
		} else {
			kpp.style.display = 'block';
		}
	}

}
ipp()

const checkboxAgreement = document.querySelector(".registration__agreement-checkbox-wrapper");

if (checkboxAgreement) {
	if (!checkboxAgreement.classList.contains("_active")) {
		document.querySelector(".registration__button").classList.add("disabled")
	} else {
		document.querySelector(".registration__button").classList.remove("disabled")
	}
}