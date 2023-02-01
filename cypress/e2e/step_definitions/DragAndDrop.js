import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { dragDropAction } from "../../pages/DragAndDropPage";

Given('Go to the url to click drag and drop link {string}',url=>{
    cy.visit(url);
});
When("Click on the drag and drop link",()=>{
    dragDropAction.clickDragDropLink();
    dragDropAction.validateDragDropPage();
});
Then('After Navigating, drag and drop implement',()=>{
    dragDropAction.dragFromOndeDivtoDiv();
})