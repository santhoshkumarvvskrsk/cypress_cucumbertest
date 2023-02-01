require('cypress-xpath');
require('@4tw/cypress-drag-drop');

class DragAndDropPage{
    elements ={
        dragDropLink: ()=>cy.xpath("//a[@href='/drag_and_drop']"),
        dragStart:()=>cy.xpath('//header[text()="A"]'),
        dragEnd:()=>cy.xpath('//header[text()="B"]'),
        dragDropHeading:()=>cy.xpath('//h3[text()="Drag and Drop"]')
    }

    clickDragDropLink(){
        this.elements.dragDropLink().click();
    }
    validateDragDropPage(){
        this.elements.dragDropHeading().should('be.visible');
    }
    dragFromOndeDivtoDiv(){
        // cy.get('#column-a').dragTo('#column-b');
        const dataTransfer = new DataTransfer();
        cy.get('#column-a').trigger('dragstart',{
            dataTransfer
        });
        cy.get('#column-b').trigger('drop',{
            dataTransfer
        });
    }
}

export const dragDropAction = new DragAndDropPage();