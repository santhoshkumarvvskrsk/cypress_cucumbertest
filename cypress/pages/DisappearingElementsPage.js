require('cypress-xpath');

class DisappearingElementsPage{
    elements= {
        disappearingPageLink:()=>cy.xpath('//a[@href="/disappearing_elements"]'),
        pageHeading:()=>cy.xpath('Disappearing Elements'),
        homeMenu:()=>cy.xpath('//a[@href="/"]'),
        aboutMenu:()=>cy.xpath('//a[@href="/about/"]'),
        contactMenu:()=>cy.xpath('//a[@href="/contact-us/"]'),
        portfolioMenu:()=>cy.xpath('//a[@href="/portfolio/"]'),
        galleryMenu:()=>cy.xpath('//a[@href="/gallery/"]'),
        notFound:()=>cy.xpath('//h1[text()="Not Found"]'),
        dsHeading:()=>cy.xpath('//h3[text()="Disappearing Elements"]')
    }
    deLinkClick(){
        this.elements.disappearingPageLink().click();
    }
    homeMnuClick(){
        this.elements.homeMenu().click();
    }
    aboutMenuClick(){
        this.elements.aboutMenu().click();
    }
    contactMenuClick(){
        this.elements.contactMenu().click();
    }
    portfolioMenuClick(){
        this.elements.portfolioMenu().click();
    }
    galleryMenuClick(){
        this.elements.galleryMenu().click();
    }
    elementDisplay(){
        this.elements.notFound().should('be.visible');
    }
    validateHeading(){
        this.elements.dsHeading().should('have.text','Disappearing Elements')
    }
    linkDispaly(){
        this.elements.disappearingPageLink().should('be.visible');
    }
    aboutMenuDisplay(){
        this.elements.aboutMenu().should('be.visible');
    }
}

export const dispele = new DisappearingElementsPage();