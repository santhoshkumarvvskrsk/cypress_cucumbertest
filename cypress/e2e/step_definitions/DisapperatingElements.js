import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { dispele } from "../../pages/DisappearingElementsPage";

Given('Go to the url to test disappearing elements {string}',url=>{
    cy.visit(url);
});

When('I Click on disappearing elements link',()=>{
    dispele.deLinkClick();
    dispele.validateHeading();
})
When('I Click on Home button',()=>{
    dispele.homeMnuClick();
})
Then('Disappearing elements links should be displayed',()=>{
    dispele.linkDispaly();
})
When('again click on Disappearing elements',()=>{
    dispele.deLinkClick();
    dispele.validateHeading();
})
Then('About menu should be displayed',()=>{
    dispele.aboutMenuDisplay();
})
When('I click on About menu',()=>{
    dispele.aboutMenuClick();
})
Then('Validate Not Found should be displayed and redirect to {string}',url=>{
    dispele.elementDisplay();
    cy.visit(url);
})
When('I click on Contact us menu',()=>{
    dispele.contactMenuClick();
})
Then('Validate Not Found',()=>{
    dispele.elementDisplay();
    // cy.visit(url);
})
