describe("admin", () => {
  it("visit login page", () => {
    cy.visit("/login");
  });
  it("check login as admin", () => {
    cy.get("#normal_login_email").type("duc@gmail.com")
    cy.get("#normal_login_password").type("123456")
    cy.get("button").click()
    cy.get('[data-cy="edit-button"]').should("be.visible")
    cy.get('[data-cy="delete-button"]').should("be.visible")
    cy.get('[data-cy="add-button"]').should("be.visible")
  });
});
describe("staff", () => {
  it("visit login page", () => {
    cy.visit("/login");
  });
  it("check login as staff", () => {
    cy.get("#normal_login_email").type("hieu@gmail.com")
    cy.get("#normal_login_password").type("123456")
    cy.get("button").click()
    cy.get('[data-cy="edit-button"]').should("not.be.exist")
    cy.get('[data-cy="delete-button"]').should("not.be.exist")
    cy.get('[data-cy="add-button"]').should("not.be.exist")
  });
});
