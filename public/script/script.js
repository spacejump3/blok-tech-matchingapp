const button = document.getElementById("submit-button");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener("change", () => {
		if (Array.from(checkboxes).some((checkbox) => checkbox.checked)) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	});
});