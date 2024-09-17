describe('Catálogo de Veículos', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); 
    });
  
    it('deve exibir uma lista de veículos', () => {
      cy.get('[data-cy=car-list]').should('exist');
      cy.get('[data-cy=car-item]').should('have.length.greaterThan', 0); 
    });
  
    it('deve permitir filtrar veículos por marca', () => {
      cy.get('[data-cy=filter-brand]').select('Toyota'); 
      cy.get('[data-cy=car-item]').each(($el) => {
        cy.wrap($el).should('contain.text', 'Toyota'); 
      });
    });
  });

  describe('Cadastro de Cliente', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signup'); 
    });
  
    it('deve permitir o cadastro de um novo cliente', () => {
      cy.get('[data-cy=name-input]').type('John Doe');
      cy.get('[data-cy=email-input]').type('john.doe@example.com');
      cy.get('[data-cy=password-input]').type('password123');
      cy.get('[data-cy=register-button]').click();
  
      
      cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });
  
    it('deve exibir mensagem de erro se o e-mail já estiver em uso', () => {
      
      cy.get('[data-cy=name-input]').type('Jane Doe');
      cy.get('[data-cy=email-input]').type('john.doe@example.com'); 
      cy.get('[data-cy=password-input]').type('password123');
      cy.get('[data-cy=register-button]').click();
  
      
      cy.contains('E-mail já em uso').should('be.visible');
    });
  });

  describe('Login de Cliente', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login'); 
    });
  
    it('deve permitir o login com credenciais válidas', () => {
      cy.get('[data-cy=email-input]').type('john.doe@example.com');
      cy.get('[data-cy=password-input]').type('password123');
      cy.get('[data-cy=login-button]').click();
  
      
      cy.contains('Bem-vindo, John Doe').should('be.visible');
    });
  
    it('deve exibir mensagem de erro com credenciais inválidas', () => {
      cy.get('[data-cy=email-input]').type('john.doe@example.com');
      cy.get('[data-cy=password-input]').type('wrongpassword');
      cy.get('[data-cy=login-button]').click();
  
      
      cy.contains('Credenciais inválidas').should('be.visible');
    });
  });

  describe('Adicionar Veículo', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/admin'); 
      cy.get('[data-cy=login-admin]').click(); 
    });
  
    it('deve permitir adicionar um novo veículo', () => {
      cy.get('[data-cy=add-car-button]').click();
      cy.get('[data-cy=model-input]').type('Honda Civic');
      cy.get('[data-cy=year-input]').type('2023');
      cy.get('[data-cy=price-input]').type('150');
      cy.get('[data-cy=submit-button]').click();
  
    
      cy.contains('Honda Civic').should('be.visible');
    });
  });