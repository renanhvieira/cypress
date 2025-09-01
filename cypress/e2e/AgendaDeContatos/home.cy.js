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

        cy.get('.sc-beqWaB.eQdYIq').its('length').as('countBefore');

    
        cy.get('input[type="text"]').type(Nome);
        cy.get('input[type="email"]').type(Email);
        cy.get('input[type="tel"]').type(Telefone);

        cy.get('.adicionar').click();

        cy.get('.sc-beqWaB.eQdYIq').should('contain', Nome);
        cy.get('.sc-beqWaB.eQdYIq').should('contain', Email);
        cy.get('.sc-beqWaB.eQdYIq').should('contain', Telefone);
    }
)
});

    it('Alterar contato existente', () => {
    const nomeOriginal = 'Tests';
    const novoNome = 'Testes dos Testes';
    const novoTelefone = '9876543210';

    
    cy.get('input[type="text"]').type(nomeOriginal);
    cy.get('input[type="email"]').type('testes1@teste.com');
    cy.get('input[type="tel"]').type('9876543210');
    cy.get('.adicionar').click();

    cy.get('.sc-beqWaB.eQdYIq').contains(nomeOriginal).parent().find('.edit').click();

    cy.get('input[type="text"]').clear().type(novoNome);
    cy.get('input[type="tel"]').clear().type(novoTelefone);

    cy.get('.salvar').click();

    cy.get('.sc-beqWaB.eQdYIq').should('contain', novoNome);
    cy.get('.sc-beqWaB.eQdYIq').should('contain', novoTelefone);
  });


  it('Remover um contato ', () => {
   
    const nomeParaRemover = 'Teste 2';

   
    cy.get('input[type="text"]').type(nomeParaRemover);
    cy.get('input[type="email"]').type('testes2@teste.com');
    cy.get('input[type="tel"]').type('666666666666');
    cy.get('.adicionar').click();

    
    cy.on('window:confirm', (t) => {
      expect(t).to.equal('Deseja realmente remover esse contato?');
      return true; 
    });

    
    cy.get('.sc-beqWaB.eQdYIq').contains(nomeParaRemover).parent().find('.remover').click();

   
    cy.get('.sc-beqWaB.eQdYIq').should('not.contain', nomeParaRemover);
  });
