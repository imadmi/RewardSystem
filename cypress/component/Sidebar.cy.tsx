import '../support/tailwind.css';
import CustomarList from "../../src/components/CustomerList";

describe("Example of tests", () => {
  it("tests CustomerList compoenent", () => {
    cy.mount(<CustomarList />);
    cy.get("h1").should("have.text", "Customers");
    cy.get("[data-cy='title']").contains("Customers");
    cy.get("[data-cy='existing']").should("not.exist");
  });
});
