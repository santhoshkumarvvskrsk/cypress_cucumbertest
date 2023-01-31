require('cypress-xpath')

class CheckFunctionalityPage{

    elements={
        checkboxLink:()=>cy.xpath('//a[@href="/checkboxes"]')
    };

    clickCheckboxLink(){
        this.elements.checkboxLink().click();
    }
    clickCheckBox(){
        cy.get('input').check().should('have.attr','checked');
    }
}

export const checkboxfunPage = new CheckFunctionalityPage();