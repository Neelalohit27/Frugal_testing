📝 Intelligent Registration System – Frugal Testing:

🎯 Project Overview:
This project implements an Intelligent Registration System as part of the Frugal Testing Software Engineer practical task.
The objective is to design a clean registration form with strong client-side validations and automate key test scenarios using Cypress, ensuring maximum coverage with minimal complexity.

🛠️ Technologies Used:
🌐 HTML – Structure of the application
🎨 CSS – Styling and responsive layout
⚙️ JavaScript – Client-side validations and dynamic behavior
🧪 Cypress – End-to-end automation testing

Application Features:
🧾 Registration Form:
The form collects the following user details:
👤 First Name
👤 Last Name
📧 Email
📱 Phone Number
🚻 Gender
🌍 Country
🏙️ State
🏠 City
🔐 Password and Confirm Password

Client-Side Validations:
✔ Mandatory field validation for required inputs
✔ Inline error messages for invalid fields
✔ Submit button disabled until all validations pass
✔ Email format validation
✔ Password and confirm password matching
✔ Password strength indicator (Weak / Medium / Strong)

🤖 Automation Testing with Cypress:
Automation tests are written using Cypress to validate the application behavior across multiple scenarios.
❌ Negative Test Scenario:
Attempts submission with missing mandatory fields
Verifies error messages are displayed
Ensures submit button remains disabled

✅ Positive Test Scenario:
Submits form with all valid data
Verifies success message is displayed
Confirms successful form submission

🧠 Logic Validation Scenario:
Validates country → state → city dropdown dependency
Verifies password strength indicator
Tests password mismatch behavior
Confirms submit button enable/disable logic

How to Run the Project
🟢 Step 1: Start the Application
Open a terminal in the project root directory and run:npx serve frontend
This will start the application on a local server.
Open the displayed URL in your browser to verify the registration form.

🟢 Step 2: Run Cypress Automation Tests
Open a new terminal and run:npx cypress open
In the Cypress window:
➡ Select E2E Testing
➡ Choose Chrome
➡ Click on registration.cy.js

Conclusion:
This project demonstrates a practical and efficient approach to building and testing a real-world registration system. By focusing on essential validations, clear UI behavior, and reliable automation, the solution aligns well with the expectations of a Frugal Testing Software Engineer, emphasizing quality, simplicity, and effectiveness.

