<reference types="cypress" />


describe('Testes', () => {
    const URL = 'https://ebac-agenda-contatos-tan.vercel.app/'
    it('Deve acessar a Agenda de contatos', () => {
        cy.visit(URL)


        //ADICIONAR
        cy.get('[type="text"]').type('Adicionar')
        cy.get('[type="tel"]').type('445566778899')
        cy.get('[type="email"]').type('reteste@teste.com')

        cy.get('.adicionar').click()

        
        cy.contains('Testador Cypress').should('exist')
        cy.contains('cypress@teste.com').should('exist')
    })

        //ALTERAR

    it('Alterar contato existente', () => {
      cy.visit(URL)

    it('Alterar um contato existente', () => {
        
        cy.visit(URL)

        cy.get('[type="text"]').type('Alterar')
        cy.get('[type="tel"]').type('1234567890')
        cy.get('[type="email"]').type('alterar@teste.com')
        cy.get('.adicionar').click()

        
        cy.contains('CAlterar').parent().find('.editar').click()
        cy.get('[type="text"]').clear().type('Contato Alterado')
        cy.get('.alterar').click()


        cy.contains('Contato Alterado').should('exist')
        cy.contains('Contato para Alterar').should('not.exist')
    })

        //REMOCAO

    it('Deve remover um contato da lista', () => {
        cy.visit(URL)

        cy.get('[type="text"]').type('Contato para Remover')
        cy.get('[type="tel"]').type('1122334455')
        cy.get('[type="email"]').type('retesteremover@teste.com')
        cy.get('.adicionar').click()

        
        cy.contains('Contato para Remover').parent().find('.remover').click()


        cy.contains('Contato para Remover').should('not.exist')
    })
  })
})
