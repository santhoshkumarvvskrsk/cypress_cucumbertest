import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { dropdownBtn } from "../../pages/DropdownelePage";

Given('Go to the url for the dropdown functionality {string}',url=>{
    cy.visit(url);
});

When("I Click on dropdown menu link",()=>{
    dropdownBtn.dropdownLinkClick();
});

Then("Select option2 value in the dropdown",()=>{
    dropdownBtn.selectValueFromDropdown();
});