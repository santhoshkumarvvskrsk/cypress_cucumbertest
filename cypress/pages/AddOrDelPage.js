require('cypress-xpath')

class AddOrDelPage{
    
    elements ={
        addOrRemovelink: ()=>cy.xpath("//a[@href='/add_remove_elements/']"),
        addEleBtn:()=>cy.xpath("//button[text()='Add Element']"),
        delDiv:()=>cy.get("#elements"),
        delBtn:()=>cy.xpath("//button[text()='Delete']")
    };
    
    linkClick(){
        this.elements.addOrRemovelink().click();
    }
    clickAddEleBtn(){
        this.elements.addEleBtn().click();
    }
    delBtnfn(){
        this.elements.delBtn().click();
    }
    isAddDelBtnExist(cc){
       
       if(cy.xpath("//button[text()='Add Element']").should('be.visible')){
         for(let j=0;j<cc;j++){
            this.elements.addEleBtn().click();
         }
       }
        
    }
   getCountOfBtns(){
    var cc=
    cy.xpath("//button[text()='Delete']").its('length');
   }
   clickDelBtns(count){
        console.log(count+" no. of del buttons");
        cy.get('#elements').each(($row)=>{
            cy.wrap($row).find("button").should('be.visible').click({ multiple: true, force: true });
        })

   }
}

export const addOrdel = new AddOrDelPage();