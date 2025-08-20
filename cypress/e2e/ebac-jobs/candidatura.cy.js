<reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
    }

    )
    it('Deve levar o usuário até o formulário de inscrição', () => {
         cy.get('.Vaga_vagaLink_DeFkk').first().click()
         cy.get('input').should('have.length',7)
})

        it('Deve preenchero formulário de inscrição', () => {
    
        cy.get('input[name="nome-completo"]').type('Renan Vieira')
        cy.get('input[name="telefone"]').type('44 12345678')
        cy.get('input[name="e-mail"').type('renan@gmail.com')
        cy.get('input[name="endereco"').type('Rua 1, 1, Centro, Paraná')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade').select('outros')
        cy.get('.Aplicacao_button_tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})