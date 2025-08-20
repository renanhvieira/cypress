<reference types="cypress" />
describe('Testes para a home', () => {
    it('Deve renderizar 4 vagas', () => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('Deve filtrar por fullstack', () => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
        cy.get('.FormVagas_campo_E1ppF').type('fullstack{enter}')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    }
)
})