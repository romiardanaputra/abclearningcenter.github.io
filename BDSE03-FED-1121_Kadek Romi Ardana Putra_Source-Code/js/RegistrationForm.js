var users = localStorage.getItem('romidb');
$(function () {
	users = JSON.parse(users); // Convert String as an Object
	if (users === null)
		// If there is nothing intialize
		users = [];
});

function formValidation() {
	// Get the HTML elements
	var fullName = document.registration.name;
	var email = document.registration.email;

	if (isValidUserName(fullName, 1, 30))
		if (isValidEmail(email)) {
				var user = JSON.stringify({
					fullName: $('#name').val(),
					email: $('#email').val(),
					password: $('#pwd').val(),
					mobile_phone: $('#phone_number').val(),
					course: $('#course').val(),
				});

				users.push(user);
				localStorage.setItem('romidb', JSON.stringify(users));
				return true;
			}

	return false;
}
// to prevent user input lastname over the maxlen and les than minlen
function isValidUserName(userName, minLen, maxLen) {
	var userNameLength = userName.value.length;
	if (userNameLength == 0 || userNameLength > maxLen || userNameLength < minLen) {
		// || - Or operator
		alert('First Name should not be empty / length must be between ' + minLen + ' to ' + maxLen);
		userName.focus();
		return false;
	} else if (!isAlpha(userName)) {
		//! - Not operator
		alert('Enter alphabets only');
		userName.focus();
		return false;
	}
	return true;
}

// to prevent user insert weird symbol while inputing email
function isValidEmail(email) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(mailformat)) {
		return true;
	} else {
		alert('Enter valid email address!');
		email.focus();
		return false;
	}
}

function isValidContact(contact, len) {
	var contactLength = contact.value.length;
	if (contactLength == 0 || contactLength != len) {
		alert('Contact should not be empty / length must be ' + len);
		contact.focus();
		return false;
	} else if (!isNumber(contact)) {
		alert('Enter Numbers only');
		contact.focus();
		return false;
	}
	return true;
}

// function isValidAddress(address, minLen, maxLen) {
// 	var addressLength = address.value.length;
// 	if (addressLength == 0 || addressLength > maxLen || addressLength < minLen) {
// 		alert('Address should not be empty / length be between ' + minLen + ' to ' + maxLen);
// 		address.focus();
// 		return false;
// 	} else if (!isAddress(address)) {
// 		alert('Enter alphabets and numbers only');
// 		address.focus();
// 		return false;
// 	}
// 	return true;
// }

// only alphabets only can be accepted ini this funcntion
function isAlpha(input) {
	var characters = /^[A-Za-z]+$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

// only number can be accepted in this function
function isNumber(input) {
	var characters = /^[0-9{8}]+$/;
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

// only number and alphabets can be accepted in this function
function isAlphaNumeric(input) {
	var characters = /^[0-9A-Za-z]+$/;
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

// special for address
function isAddress(input) {
	var characters = /^[#.0-9a-zA-Z\s,-]+$/;
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict';

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation');

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			'submit',
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			},
			false
		);
	});
})();
