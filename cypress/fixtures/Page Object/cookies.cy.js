class Cookies{

    get acceptButton(){
       return cy.get('[class="btn btn-primary core_acceptCookies"]');
    }

    acceptCookies(){
        this.acceptButton.click();
    }
}

export default new Cookies();