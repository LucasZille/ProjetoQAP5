describe('Login', () => {
    
    it('Login existente e validado com sucesso', () =>{
        
        cy.visit('https://sso.validacao.acesso.gov.br/login?client_id=contas.validacao.acesso.gov.br')
        .get('#login-cpf')
        cy.get('#accountId').type("09074445470")
        let urlAntes;
        cy.url().then((url) => {
            urlAntes = url;
          });
          cy.get('#enter-account-id').click()
          cy.url().should('not.eq', urlAntes);

        cy.get('#accountId').type("69535159704")
        cy.get('#enter-account-id').click()
        cy.url().should('not.eq', urlAntes);

    
    })
    it('Login não existe', () => {
        
        cy.visit('https://sso.validacao.acesso.gov.br/login?client_id=contas.validacao.acesso.gov.br&authorization_id=19029971956')
        cy.get('#accountId').type('29429346723');
        cy.get('#enter-account-id').click();
        cy.get('div.erro').should('be.visible')
        .should('have.text','\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tCPF informado inválido.  (ERL0000400)\n\t\t\t\t\t\t')

        cy.get('#accountId').type('23232323232');
        cy.get('#enter-account-id').click();
        cy.get('div.erro').should('be.visible')
        .should('have.text','\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tCPF informado inválido.  (ERL0000400)\n\t\t\t\t\t\t')
    
    })

});