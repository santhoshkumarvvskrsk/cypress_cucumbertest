import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { addOrdel } from "../../pages/AddOrDelPage";

Given('Go to the url {string}',url=>{
    cy.visit(url);
});
When("I Click on AddDel link",()=>{
    addOrdel.linkClick();
});
Then('I Click on AddDelButton {int}',countOfBtnClicks=>{
    addOrdel.isAddDelBtnExist(countOfBtnClicks);
})
When("Click on delte button until delete button is visible",()=>{
    var countOfEle = addOrdel.getCountOfBtns();
    addOrdel.clickDelBtns(countOfEle);
})

