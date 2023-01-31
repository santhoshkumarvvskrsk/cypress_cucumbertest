import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { basicAuth } from "../../pages/BasicAuthPage";

Given('Go to the url of Basic authentication {string}',url=>{
    cy.visit(url);
});

Then('Validate the data after login',()=>{
    basicAuth.validateDataAfterLogin();
})