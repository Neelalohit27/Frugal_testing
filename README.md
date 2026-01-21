
# 📝 Intelligent Registration System – Frugal Testing

## 🎯 Project Overview

The **Intelligent Registration System** is developed as part of the **Frugal Testing – Software Engineer practical task**.
The goal of this project is to design a clean and user-friendly registration form with strong **client-side validations** and to automate critical test scenarios using **Cypress**, achieving **maximum test coverage with minimal complexity**.

This project focuses on **quality, simplicity, and effectiveness**, reflecting real-world testing and development practices.

---

## 🛠️ Technologies Used

* 🌐 **HTML** – Application structure
* 🎨 **CSS** – Styling and responsive layout
* ⚙️ **JavaScript** – Client-side validations and dynamic behavior
* 🧪 **Cypress** – End-to-end automation testing

---

## 🧾 Application Features

### 🔐 Registration Form

The registration form collects the following user details:

* 👤 First Name
* 👤 Last Name
* 📧 Email
* 📱 Phone Number
* 🚻 Gender
* 🌍 Country
* 🏙️ State
* 🏠 City
* 🔐 Password
* 🔐 Confirm Password

---

## ✔ Client-Side Validations

The application includes robust client-side validations to ensure accurate and complete user input:

* Mandatory field validation for all required inputs
* Inline error messages for invalid fields
* Submit button remains **disabled until all validations pass**
* Email format validation
* Password and confirm password matching validation
* Password strength indicator (**Weak / Medium / Strong**)

---

## 🤖 Automation Testing with Cypress

End-to-end automation tests are implemented using **Cypress** to validate application behavior across multiple scenarios.

### ❌ Negative Test Scenarios

* Attempts form submission with missing mandatory fields
* Verifies appropriate error messages are displayed
* Ensures the submit button remains disabled

### ✅ Positive Test Scenarios

* Submits the form with valid input data
* Verifies that a success message is displayed
* Confirms successful form submission

### 🧠 Logic Validation Scenarios

* Validates **Country → State → City** dropdown dependency
* Verifies password strength indicator behavior
* Tests password mismatch scenarios
* Confirms submit button enable/disable logic

---

## ▶ How to Run the Project

### 🟢 Step 1: Start the Application

Open a terminal in the project root directory and run:

```bash
npx serve frontend
```

This will start the application on a local server.
Open the displayed URL in your browser to verify the registration form.

---

### 🟢 Step 2: Run Cypress Automation Tests

Open a new terminal and run:

```bash
npx cypress open
```

In the Cypress window:

1. Select **E2E Testing**
2. Choose **Chrome**
3. Click on **registration.cy.js**

---

## 🏁 Conclusion

This project demonstrates a **practical and efficient approach** to building and testing a real-world registration system. By emphasizing essential validations, clear UI behavior, and reliable automation, the solution aligns strongly with the expectations of a **Frugal Testing Software Engineer**, showcasing a balance of **quality, simplicity, and effectiveness**.

---


