require('cypress-xpath')

class DropdownelePage{
    dropdownLinkClick(){
        cy.xpath('//a[@href="/dropdown"]').click();
    }
    selectValueFromDropdown(){
        cy.get('select[id="dropdown"]').select('2');
    }
}

export const dropdownBtn = new DropdownelePage();