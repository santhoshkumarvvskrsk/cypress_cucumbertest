require('cypress-xpath')

class CheckFunctionalityPage{

    elements={
        checkboxLink:()=>cy.xpath('//a[@href="/checkboxes"]')
    };

    clickCheckboxLink(){
        this.elements.checkboxLink().click();
    }
    clickCheckBox(){
        cy.get('form[id="checkboxes"]').each(($row)=>{
            cy.wrap($row).find("input").should('be.visible').click({ multiple: true, force: true });
        })
        //    if($row.attr('checked')){
        //     cy.get('input').uncheck();
        //    }
               
            // if(cy.get('input').not('.checked')){
            //     cy.get('input').check();
            // }else{
                
            // }
            // if(cy.get('input').should('be.checked')){
            //     cy.get('input').uncheck();
            // }else{
            //     cy.get('input').check();
            // }
            // cy.get('input[type="checkbox"]').as('checkbox').invoke('is',':checked').then(checked=>{
            //     if(checked){
            //         cy.get('@checkbox').uncheck();
            //     }else{
            //         cy.get('@checkbox').check();
            //     }
            // })
        // cy.get('input').check().should('have.attr','checked');
    }
}

export const checkboxfunPage = new CheckFunctionalityPage();