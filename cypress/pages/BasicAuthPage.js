require('cypress-xpath')
class BasicAuthPage{

    linkClick(){
        cy.xpath('//a[@href="/basic_auth"]').click();
    }
    validateDataAfterLogin(){
      cy.get('p').should('include.text','Congratulations')
    }
}

export const basicAuth = new BasicAuthPage();