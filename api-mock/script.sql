-- criar um banco de dados para trabalhar

create database sistema_produtos;

use sistema_produtos;

-- criar tabela "produtos" com algumas colunas basicas

create table produtos (
	id  int auto_increment primary key, -- ID ÚNICO
	nome varchar (100) not null, -- Nome do produto
    email varchar (100) not null, -- Email (exemplo generico)
    telefone varchar (20), -- Telefone
    cpf varchar (14), -- CPF
    endereco varchar (150) -- Endereço simples
);

-- inserir dois registros
insert into produtos(nome, email, telefone, cpf, endereco) values
	('Eduardo Ramos', 'edu.ramos@orutos.com', '1245454-777', '454.545.454.55', 'Rua Orutos F'),
    ('Juliana Clara', 'juliana@oruto.com', '4654548-464','454.445.654.45', 'Rua Orutos H');

select * from produtos where id = 1;
select * from produtos where id = 2;