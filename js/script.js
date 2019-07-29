reg1 = () => {
	regsubmit.addEventListener("click", (e) => {
		e.preventDefault();

		if (regemail.value === "" || regpass.value === "" || regconfpass.value === "") {
			regform1.innerHTML += "<p class='error' style='color:#FFF; font-family: Roboto, sans-serif; font-size: 0.8em'>Please complete all the information.</p>";
		}
		if (regpass.value !== regconfpass.value) {
			regform1.innerHTML += "<p class='error' style='color:#FFF; font-family: Roboto, sans-serif; font-size: 0.8em'>Passwords do not match.</p>";
		}
		let form = document.getElementsByName("regform1")[0];
		form.submit();
	});
};

reg2 = () => {
	reg2submit.addEventListener("click", (e) => {
		e.preventDefault();

		if (regpass.value !== regconfpass.value)
			regform2.innerHTML += "<p class='error' style='color: red';>Passwords do not match</p>";
	});
};

sendmsg = () => {
	msgbtn.addEventListener("click", (e) => {
		e.preventDefault();

		let today = new Date();

		let msg = inpmsg.value;

		if (msg !== "") {
			messagearea.innerHTML += `<div class='msg'><p class='msgtime' > ${today.getHours()}:${today.getMinutes()}</p ><div class='ownmsgcontent'><p class='msgtext'> ${msg} </p><img src='images/face.jpeg' alt='Sender Image' class='senderimg'></div></div>`;

			inpmsg.value = null;
		}
	});
};
