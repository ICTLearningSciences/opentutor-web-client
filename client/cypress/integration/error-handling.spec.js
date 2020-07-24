describe("Error popup", () => {
  it("shows a 404 error for an invalid lesson", () => {
    cy.server();
    cy.viewport(660, 1000);
    cy.visit("/?lesson=q12312"); // change URL to match your dev URLs

    cy.server().route({
      method: "POST",
      url: "**/dialog/q12312",
      status: 404,
      response: "fixture:e404.json",
    });
    cy.get("#error-popup").contains("Could not find lesson");
  });

  it("shows a 403 error when cheating", () => {
    cy.server();
    cy.viewport(660, 1000);
    cy.visit("/?lesson=q1"); // change URL to match your dev URLs

    cy.route({
      method: "POST",
      url: "**/dialog/q1/session",
      status: 403,
      response: "fixture:e403.json",
    });
    cy.get("#outlined-multiline-static").type("PLACEHOLDER");
    cy.get("#submit-button").click();
    cy.get("#error-popup").contains("Nice Try!");
  });

  it("shows a 410 error for ended session", () => {
    cy.server();
    cy.viewport(660, 1000);
    cy.visit("/?lesson=q2"); // change URL to match your dev URLs

    cy.route({
      method: "POST",
      url: "**/dialog/q2/session",
      status: 410,
      response: "fixture:e410.json",
    });
    cy.get("#outlined-multiline-static").type("PLACEHOLDER");
    cy.get("#submit-button").click();
    cy.get("#error-popup").contains("Lesson session ended");
  });

  it("shows a generic/502 error for all other server errors", () => {
    cy.server();
    cy.viewport(660, 1000);
    cy.visit("/?lesson=q2"); // change URL to match your dev URLs

    cy.route({
      method: "POST",
      url: "**/dialog/q2",
      status: 502,
      response: "fixture:e502.json",
    });
    cy.get("#error-popup").contains("Server Error");
  });
});