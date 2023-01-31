import {Given,When,Then,Feature,And}  from "@badeball/cypress-cucumber-preprocessor";
import { brknimgs } from "../../pages/BrokenImagesPage";

Given('Go to the url to click broken imgs link {string}',url=>{
    cy.visit(url);
})
When('Click on the Broken Images link',()=>{
    brknimgs.clickBrokenImgLink();
});
Then('After Navigating to the Broken imgs,validate the images',()=>{
    brknimgs.getAllImgbrknLinks();
})