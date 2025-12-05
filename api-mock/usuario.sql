create database usuario;
	
create table usuario(
    id int auto_increment primary key,
    email varchar(150) not null,
    senha varchar(30) not null
);