import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { checkboxfunPage } from "../../pages/CheckFunctionalityPage";

Given('Go to the url which display list of links to practice {string}',url=>{
    cy.visit(url);
});
When("We click on the Checkboxes link",()=>{
    checkboxfunPage.clickCheckboxLink();
});
Then("User able to check and uncheck the checkboxes",()=>{
    checkboxfunPage.clickCheckBox();
});