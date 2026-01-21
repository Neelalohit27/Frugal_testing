// Small helper to slow down execution for video clarity
const slow = () => cy.wait(600);

describe("Intelligent Registration System - Frugal Testing", () => {

  beforeEach(() => {
    // Set large viewport so most of the form is visible
    cy.viewport(1440, 900);

    // Visit application
    cy.visit("/index.html");

    // Basic sanity checks
    cy.title().should("contain", "Registration");
    cy.url().then(url => cy.log("Page URL:", url));
  });

  // ---------------- NEGATIVE SCENARIO ----------------
  it("Negative Test - Missing Last Name", () => {
    cy.get("#firstName").type("Lohit"); slow();
    cy.get("#email").type("lohit@gmail.com"); slow();
    cy.get("#phone").type("9876543210"); slow();

    cy.get("input[name='gender'][value='Male']").check(); slow();

    cy.get("#country").select("India"); slow();
    cy.get("#state").select("Telangana"); slow();
    cy.get("#city").select("Hyderabad"); slow();

    cy.get("#password").type("Password@123"); slow();
    cy.get("#confirmPassword").type("Password@123"); slow();
    cy.get("#terms").check(); slow();

    cy.get("#submitBtn").should("be.disabled");

    cy.screenshot("error-state");
  });

  // ---------------- POSITIVE SCENARIO ----------------
  it("Positive Test - Successful Registration", () => {
    cy.get("#firstName").type("Lohit"); slow();
    cy.get("#lastName").type("Bandaru"); slow();
    cy.get("#email").type("lohit@gmail.com"); slow();
    cy.get("#phone").type("9876543210"); slow();

    cy.get("input[name='gender'][value='Male']").check(); slow();

    cy.get("#country").select("India"); slow();
    cy.get("#state").select("Telangana"); slow();
    cy.get("#city").select("Hyderabad"); slow();

    cy.get("#password").type("Password@123"); slow();
    cy.get("#confirmPassword").type("Password@123"); slow();
    cy.get("#terms").check(); slow();

    cy.get("#submitBtn")
      .should("not.be.disabled")
      .click();

    cy.get("#successMessage")
      .should("be.visible")
      .and("contain", "Registration Successful");

    cy.screenshot("success-state");
  });

  // ---------------- LOGIC VALIDATION ----------------
  it("Logic Validation - Dropdown & Password Checks", () => {
    cy.get("#country").select("USA"); slow();
    cy.get("#state").children().should("have.length.greaterThan", 1);

    cy.get("#state").select("California"); slow();
    cy.get("#city").children().should("have.length.greaterThan", 1);

    cy.get("#password").type("123"); slow();
    cy.get("#strength").should("contain", "Weak");

    cy.get("#confirmPassword").type("1234"); slow();
    cy.get("#submitBtn").should("be.disabled");
  });

});
