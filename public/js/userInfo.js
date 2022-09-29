const mainDiv = document.getElementById("all-users");
let loading = true;

const getUsers = async () => {
	let allUsers = await axios.get("/users");
	let userArray = allUsers.data;

	for (let user of userArray) {
		let div = document.createElement("div");
		div.classList.add("card", "my-3");
		div.style.width = "20rem";
		let cardBody = document.createElement("div");
		cardBody.classList.add("card-body");
		div.append(cardBody);

		let name = document.createElement("p");
		name.innerText = `Full Name: ${user.firstName} ${user.lastName}`;
		name.classList.add("card-text");
		cardBody.append(name);

		let email = document.createElement("p");
		email.innerText = `Email: ${user.email}`;
		email.classList.add("card-text");
		cardBody.append(email);

		let userId = document.createElement("p");
		userId.innerText = `User ID: ${user.id}`;
		userId.classList.add("card-text");
		cardBody.append(userId);

		let actStatus = document.createElement("p");
		actStatus.innerText = ` Account Status: ${user.state}`;
		actStatus.classList.add("card-text");
		cardBody.append(actStatus);

		let btnDiv = document.createElement("div");
		btnDiv.classList.add("d-grid", "gap-2");

		let updateBtn = document.createElement("button");
		updateBtn.classList.add("btn", "btn-primary");
		updateBtn.innerText = "Activate User";
		if (user.state === "active") {
			updateBtn.setAttribute("disabled", "");
			updateBtn.innerText = "User Already Active!";
		}
		btnDiv.append(updateBtn);

		let editProfileBtn = document.createElement("button");
		editProfileBtn.classList.add("btn", "btn-success");
		editProfileBtn.innerText = "Edit User Info";
		btnDiv.append(editProfileBtn);

		let deleteBtn = document.createElement("button");
		deleteBtn.classList.add("btn", "btn-outline-danger");
		deleteBtn.innerText = "Delete User";
		btnDiv.append(deleteBtn);

		cardBody.append(btnDiv);

		mainDiv.appendChild(div);
	}

	loading = false;
};

// wait until data has been received from backend server and then display.
window.addEventListener(
	"load",
	() => {
		getUsers();
	},
	false
);
