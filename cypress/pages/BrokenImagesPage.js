require('cypress-xpath')

class BrokenImagesPage{
    elements ={
        brokenImgsLink:()=>cy.xpath("//a[text()='Broken Images']")
    }

    clickBrokenImgLink(){
        this.elements.brokenImgsLink().click();
    }
    getAllImgbrknLinks(){
        cy.get('div>img').each(($img)=>{
            // cy.wrap($img).find("img").should('be.visible').should(([img])=>{
                expect($img.css('width')).to.equal('120px');
                
            // })
        })
        
    }
    
}

export const brknimgs = new BrokenImagesPage();