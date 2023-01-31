require('cypress-xpath')

class ContextMenu{

    linkClickContextLink(){
        cy.xpath('//a[@href="/context_menu"]').click();
    }
    contextMenuClickDiv(){
        cy.xpath('//div[@id="hot-spot"]').rightclick();
    }
    alertClickfn(){
        cy.on('window:confirm',(txt)=>{
            expect(txt).to.contains('You selected a context menu').click();
        })
    }
}

export const contxtmnu = new ContextMenu();