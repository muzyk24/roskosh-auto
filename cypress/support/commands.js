import HeaderList from "../fixtures/Page Object/headerList.cy"
import FooterList from "../fixtures/Page Object/footerList.cy";

Cypress.Commands.add('checkSinglePage', (name, location, passage) =>{
    if (location == "header") {
        HeaderList.topBarPages.contains(name).click();
    } else if (location == "footer") {
        FooterList.footerBarPages.contains(name).click();
    }  
    
    if (name == "Idealne na prezent") {
        cy.title().should('contain', passage)
    } else {
    cy.title().should('contain', name);
    
    }
})

