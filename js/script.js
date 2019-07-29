regsubmit.addEventListener("click", (e) => {
	e.preventDefault();

	if (regemail.value === "" || regpass.value === "" || regconfpass.value === "") {
		regform1.innerHTML += "<p class='error'>Please complete all the information.</p>";
	}
	if (regpass.value !== regconfpass.value) {
		regform1.innerHTML += "<p class='error'>Passwords do not match</p>";
	}
	let form = document.getElementsByName("regform1")[0];
	form.submit();
});

reg2submit.addEventListener("click", (e) => {
	e.preventDefault();

	if (regpass.value !== regconfpass.value)
		regform2.innerHTML += "<p class='error'>Passwords do not match</p>";
});
