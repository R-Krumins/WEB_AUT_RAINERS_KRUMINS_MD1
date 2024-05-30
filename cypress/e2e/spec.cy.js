describe("template spec", () => {
  const touchies = [
    ["#row1", "Two"],
    ["#row2", "Four"],
    ["#row2", "Six"],
    ["#row3", "Eight"],
  ];

  const noTouchies = [
    ["#row1", "One"],
    ["#row1", "Three"],
    ["#row2", "Five"],
    ["#row3", "Seven"],
    ["#row3", "Nine"],
  ];

  it("selectable highlight works", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://demoqa.com/selectable");
    
    cy.get("#demo-tab-grid").click();

    touchies.forEach(([r, n]) => cy.get(r).contains(n).click());
    touchies.forEach(([r, n]) => cy.get(r).contains(n).should("have.class", "active"));
    noTouchies.forEach(([r, n]) => cy.get(r).contains(n).should("not.have.class", "active"));
  });
});
