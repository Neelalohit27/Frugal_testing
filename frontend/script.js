// ===== ELEMENTS =====
const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const genderError = document.getElementById("genderError");

// ===== LOCATION DATA =====
const locationData = {
  India: {
    Telangana: ["Hyderabad", "Warangal"],
    Karnataka: ["Bangalore", "Mysore"]
  },
  USA: {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Dallas", "Austin"]
  }
};

// ===== INITIALIZE DROPDOWNS =====
state.innerHTML = "<option value=''>Select State</option>";
city.innerHTML = "<option value=''>Select City</option>";

// ===== DROPDOWN LOGIC =====
country.addEventListener("change", () => {
  state.innerHTML = "<option value=''>Select State</option>";
  city.innerHTML = "<option value=''>Select City</option>";

  if (!country.value) return;

  Object.keys(locationData[country.value]).forEach(st => {
    const opt = document.createElement("option");
    opt.value = st;
    opt.textContent = st;
    state.appendChild(opt);
  });

  validate();
});

state.addEventListener("change", () => {
  city.innerHTML = "<option value=''>Select City</option>";

  if (!state.value) return;

  locationData[country.value][state.value].forEach(ct => {
    const opt = document.createElement("option");
    opt.value = ct;
    opt.textContent = ct;
    city.appendChild(opt);
  });

  validate();
});

city.addEventListener("change", validate);

// ===== PASSWORD STRENGTH =====
password.addEventListener("input", () => {
  const strength = document.getElementById("strength");
  if (password.value.length < 6) {
    strength.textContent = "Weak";
    strength.style.color = "red";
  } else if (password.value.length < 10) {
    strength.textContent = "Medium";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Strong";
    strength.style.color = "green";
  }
});

// ===== VALIDATION LOGIC =====
function validate() {
  let valid = true;

  // First Name
  if (!firstName.value.trim()) {
    firstNameError.textContent = "First Name is required";
    valid = false;
  } else firstNameError.textContent = "";

  // Last Name
  if (!lastName.value.trim()) {
    lastNameError.textContent = "Last Name is required";
    valid = false;
  } else lastNameError.textContent = "";

  // Email
  if (!email.value.includes("@") || email.value.includes("tempmail")) {
    emailError.textContent = "Enter valid email";
    valid = false;
  } else emailError.textContent = "";

  // Phone
  if (phone.value.length < 10) {
    phoneError.textContent = "Enter valid phone number";
    valid = false;
  } else phoneError.textContent = "";

  // Gender
  const genderChecked = document.querySelector("input[name='gender']:checked");
  if (!genderChecked) {
    genderError.textContent = "Select gender";
    valid = false;
  } else genderError.textContent = "";

  // Location
  if (!country.value || !state.value || !city.value) valid = false;

  // Passwords
  if (!password.value || !confirmPassword.value) {
    passwordError.textContent = "Password required";
    valid = false;
  } else if (password.value !== confirmPassword.value) {
    passwordError.textContent = "Passwords do not match";
    valid = false;
  } else passwordError.textContent = "";

  // Terms
  if (!terms.checked) valid = false;

  submitBtn.disabled = !valid;
  return valid;
}

// ===== EVENT BINDINGS =====
[firstName, lastName, email, phone, password, confirmPassword].forEach(el =>
  el.addEventListener("input", validate)
);

document.querySelectorAll("input[name='gender']").forEach(r =>
  r.addEventListener("change", validate)
);

terms.addEventListener("change", validate);

// ===== SUBMIT =====
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validate()) {
    successMessage.textContent = "Registration Successful!";
    form.reset();
    submitBtn.disabled = true;
  }
});
