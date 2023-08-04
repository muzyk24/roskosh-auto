class HeaderList {

    get topBarPages() {
        return cy.get("#header");
    }
}

export default new HeaderList();