let error;

function submittingForm() {
  //   console.log("Nehal");
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let userName = document.getElementById("username").value;
  let Email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;

  error = false;

  //   console.log(firstName + " " + lastName + " " + userName);
  //   console.log(Email + " " + address + " " + phone);

  // firstName Validation
  if (firstName && firstName.length >= 3 && firstName.match(/^[0-9a-zA-Z]+$/)) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("first-name-invalid").style.display = "block";
    error = true;
  }
  // lastName Validation
  if (lastName && lastName.length >= 3 && lastName.match(/^[0-9a-zA-Z]+$/)) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("last-name-invalid").style.display = "block";
    error = true;
  }
  // userName Validation
  if (userName && userName.match(/^[0-9a-zA-Z.]+$/)) {
    document.getElementById("username-valid").style.display = "block";
    document.getElementById("username-invalid").style.display = "none";
  } else {
    document.getElementById("username-valid").style.display = "none";
    document.getElementById("username-invalid").style.display = "block";
    error = true;
  }
  // Email Validation
  if (
    Email &&
    Email.includes("@") &&
    Email.includes(".") &&
    Email.lastIndexOf(".") <= Email.length - 3 &&
    Email.indexOf("@") !== 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    error = true;
  }
  // address Validation
  if (address) {
    document.getElementById("Address-valid").style.display = "block";
    document.getElementById("Address-invalid").style.display = "none";
  } else {
    document.getElementById("Address-valid").style.display = "none";
    document.getElementById("Address-invalid").style.display = "block";
    error = true;
  }
  // phone Validation
  if (phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
    document.getElementById("phone-valid").style.display = "block";
    document.getElementById("phone-invalid").style.display = "none";
  } else {
    document.getElementById("phone-valid").style.display = "none";
    document.getElementById("phone-invalid").style.display = "block";
    error = true;
  }

  if (!error) {
    alert("Your details have been submitted successfully");
    setTimeout(() => {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("address").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("company").value = "";
      document.getElementById("website").value = "";
      document.getElementById("first-name-valid").style.display = "none";
      document.getElementById("last-name-valid").style.display = "none";
      document.getElementById("username-valid").style.display = "none";
      document.getElementById("email-valid").style.display = "none";
      document.getElementById("Address-valid").style.display = "none";
      document.getElementById("phone-valid").style.display = "none";
    }, 500);
  }
}

// Adding the Data into the Table
let addingTable = document.querySelector("button");
let table = document.querySelector("table");

let firstNameInput = document.querySelector("#firstname");
let lastNameInput = document.querySelector("#lastname");
let userNameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let addressInput = document.querySelector("#address");
let phoneInput = document.querySelector("#phone");
let companyInput = document.querySelector("#company");
let websiteInput = document.querySelector("#website");

let count = 0;

addingTable.addEventListener("click", function onAddingData() {
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let userName = userNameInput.value;
  let email = emailInput.value;
  let address = addressInput.value;
  let phone = phoneInput.value;
  let company = companyInput.value;
  let website = websiteInput.value;

  if (!error) {
    if (count == 0) {
      count = 1;
    } else {
      count++;
    }
    let template = `
      <tr> 
      <td>${count}</td>
      <td>${firstName} ${lastName}</td>
      <td>${userName}</td>
      <td>${email}</td>
      <td>${address}</td>
      <td>${phone}</td>
      <td>${company}</td>
      <td>${website}</td>
      </tr>
  `;
    table.innerHTML += template;
  }
});
