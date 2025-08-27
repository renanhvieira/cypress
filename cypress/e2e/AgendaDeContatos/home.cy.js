<reference types="cypress" />
describe('Testes', () => {
    it('Deve acessar a Agenda de contatos', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('.document.querySelector("#root > div > div > div:nth-child(1) > form"').should('have.length', 3)
    })

     it('Deve incluir um novo contato', () => {
        const Nome = 'Teste';
        const Email = 'teste@testes';
        const Telefone = '1234567890';

        cy.get('[data-cy="add-contact"]').click();

        cy.get('[data-cy="contact-name"]').type(Nome);
        cy.get('[data-cy="contact-email"]').type(Email);
        cy.get('[data-cy="contact-phone"]').type(Telefone);

        cy.get('[data-cy="save-contact"]').click();
    }
)
})