use casa_do_codigo_nodejs;

create table livros (
   id int not null auto_increment,
   titulo varchar(255),
   descricao text,
   preco decimal(10,2),
   constraint PK_LIVROS primary key (id)
);


insert into livros(titulo, descricao, preco)
values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);

insert into livros(titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);

insert into livros(titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);

select * from livros;
 


