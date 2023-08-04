/// <reference types = 'cypress' />

describe ("e2e site test subpages", () => {

    beforeEach (function(){
        
        //catch exception from code
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });

        cy.visit('/');
        cy.get('[class="btn btn-primary core_acceptCookies"]').click();
    });

    it('visit page check pages from Toppage', ()=>{

    })

})