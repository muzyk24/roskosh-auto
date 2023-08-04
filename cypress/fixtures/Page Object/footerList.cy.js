class FooterList {

    get footerBarPages(){
        return cy.get('#footer');
    }

}

export default new FooterList();