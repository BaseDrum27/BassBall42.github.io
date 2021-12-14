var userDatabase = [
	{
		userName: "Sean Chow",
		email: "schow370@yahoo.com",
		phoneNumber: "(714)454-9164"
	},
	{
		userName: "Kay Lee",
		email: "lee.m.kay@gmail.com",
		phoneNumber: "(949)378-3200"
	},
];
var userNameInput = document.getElementById("userNameInput");
var emailInput = document.getElementById("emailInput")
var phoneNumberInput = document.getElementById("phoneNumberInput")
var addUserButton = document.getElementById("addUser")
phoneNumberInput.addEventListener("keypress", addUserAfterKeypress)
addUserButton.addEventListener("click", addUserAfterClick)

function userLength() {
	return phoneNumberInput.value.length;
};

function addUserAfterKeypress(event) {
	if (userLength() > 0 && event.keyCode === 13) {
		addUser(userNameInput.value, emailInput.value, phoneNumberInput.value);
		userNameInput.value = "";
		emailInput.value = "";
		phoneNumberInput.value = "";
	};
}

function addUserAfterClick() {
	if (userLength() > 0) {
		addUser(userNameInput.value, emailInput.value, phoneNumberInput.value);
		userNameInput.value = "";
		emailInput.value = "";
		phoneNumberInput.value = "";
	};
}

function addUser() {
	userDatabase[userDatabase.length] = {
		userName: userNameInput.value,
		email: emailInput.value,
		phoneNumber: phoneNumberInput.value,
	};
}