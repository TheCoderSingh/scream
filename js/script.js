// **************************
// ******* Variables ********
// **************************
let messages = []; // Array to store chat messages

// **************************
// ******* Functions ********
// **************************
reg1 = () => { // Function to submit Registration Form 1
	regsubmit.addEventListener("click", (e) => {
		e.preventDefault(); // To prevent the default submission so that the information does not get refreshed

		if (regemail.value === "" || regpass.value === "" || regconfpass.value === "")
			regform1.innerHTML += "<p class='error' style='color:#FFF; font-family: Roboto, sans-serif; font-size: 0.8em'>Please complete all the information.</p>";

		if (regpass.value !== regconfpass.value)
			regform1.innerHTML += "<p class='error' style='color:#FFF; font-family: Roboto, sans-serif; font-size: 0.8em'>Passwords do not match.</p>";

		let form = document.getElementsByName("regform1")[0];
		form.submit();
	});
};

reg2 = () => { // Function to submit Registration Form 2
	reg2submit.addEventListener("click", (e) => {
		e.preventDefault(); // To prevent the default submission so that the information does not get refreshed

		if (firstname.value === "" || lastname.value === "" || username.value === "")
			regform2.innerHTML += "<p class='error' style='color:#FFF; font-family: Roboto, sans-serif; font-size: 0.8em'>Please complete all the information.</p>";
	});
};

sendmsg = () => { // Function to send message and append to the chat
	msgbtn.addEventListener("click", (e) => {
		e.preventDefault(); // To prevent the default submission so that the information does not get refreshed

		let today = new Date();

		let msg = inpmsg.value;

		if (msg !== "") {
			messagearea.innerHTML += `<div class='msg'><p class='msgtime' > ${today.getHours()}:${today.getMinutes()}</p ><div class='ownmsgcontent'><p class='msgtext'> ${msg} </p><img src='images/face.jpeg' alt='Sender Image' class='senderimg'></div></div>`;

			messages.push(inpmsg.value);
			console.log("Your messages:");
			for (let i = messages.length; i >= 0; i--) {
				if (messages[i] !== undefined)
					console.log(String(messages[i]));
			}
			inpmsg.value = null;
		}
	});
};

sendfdbk = (e) => { // Function to submit feedback and show it under the form
	let feedbackobj = {};
	fdbkbtn.addEventListener("click", (e) => {

		feedbackres.style.display = "block";
		e.preventDefault(); // To prevent the default submission so that the information does not get refreshed
		fname = fnamefb.value;
		lname = lnamefb.value;
		comment = comfb.value;

		feedbackobj.first = fname;
		feedbackobj.last = lname;
		feedbackobj.comment = comment;

		fnameres.innerHTML = feedbackobj.first;
		lnameres.innerHTML = feedbackobj.last;
		commentres.innerHTML = feedbackobj.comment;
	});
};
