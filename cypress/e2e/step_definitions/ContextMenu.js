import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { contxtmnu } from "../../pages/ContextMenuPage";

Given('Go to the url for the right click functionality {string}',url=>{
    cy.visit(url);
});

When('I Click on context menu link',()=>{
    contxtmnu.linkClickContextLink();
})

Then('Click on right click of the div',()=>{
    contxtmnu.contextMenuClickDiv();
    contxtmnu.alertClickfn();
})