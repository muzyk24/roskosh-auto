class HeaderList {

    get topBarPages() {
        return cy.get("[class='header_bottom_content_list_item_anchor']");
    }
}

export default new HeaderList();