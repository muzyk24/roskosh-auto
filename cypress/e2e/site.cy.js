/// <reference types = 'cypress' />
import Cookies from "../fixtures/Page Object/cookies.cy";

describe ("e2e site test subpages", () => {

    beforeEach (function(){
        
        //catch exception from code
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });

        cy.visit('/');
        Cookies.acceptCookies();
    
    });

    it('visit page check pages from Toppage despite Shop', () => {
        cy.checkSinglePage("Nowości", "header");
        cy.checkSinglePage("Unikatowe modele", "header");
        cy.checkSinglePage("O marce", "header");
        cy.checkSinglePage("Blog", "header");
    });

    it('visit page from footer', () => {
        cy.checkSinglePage("O marce", "footer");
        cy.checkSinglePage("Kontakt", "footer");
        cy.checkSinglePage("FAQ", "footer");
        cy.checkSinglePage("Nowości", "footer");
        cy.checkSinglePage("Akcesoria kosmetyczne", "footer");
        cy.checkSinglePage("Idealne na prezent", "footer", "Polecamy"); 
        cy.checkSinglePage("Outlet", "footer");
        cy.checkSinglePage("Bon prezentowy", "footer");
        cy.checkSinglePage("Regulamin", "footer");
        cy.checkSinglePage("Dostawa", "footer");
        cy.checkSinglePage("Zwroty i reklamacje", "footer");
        cy.checkSinglePage("Polityka prywatności", "footer");
        cy.checkSinglePage("Sposoby płatności", "footer");
    });

    afterEach(function(){
        cy.visit('/');
    });


})