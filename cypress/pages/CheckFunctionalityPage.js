require('cypress-xpath')

class CheckFunctionalityPage{

    elements={
        checkboxLink:()=>cy.xpath('//a[@href="/checkboxes"]')
    };

    clickCheckboxLink(){
        this.elements.checkboxLink().click();
    }
    clickCheckBox(){
        // cy.get('form[id="checkboxes"]').children('input').should('be.checked').uncheck();
        // cy.get('form[id="checkboxes"]').children('input').should('not.checked').check();
        // cy.get('form[id="checkboxes"]').children('input').invoke('prop','checked').then(state=>{
        //     let stat;
        //     if(state){
        //         stat= state;
        //     }
            cy.get('form[id="checkboxes"]').children('input').each($ele=>{
                cy.log(cy.get($ele).invoke('prop','checked').then(state=>{
                    if(state){
                        cy.get($ele).uncheck();
                    }else{
                        cy.get($ele).check();
                    }
                }));
            })
        // })
        // cy.get('form[id="checkboxes"]').each(($row)=>{
        //     cy.wrap($row).find("input").should('be.visible').click({ multiple: true, force: true });
        // })
        // cy.get('input[type="checkbox"').children('.checked').uncheck();
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