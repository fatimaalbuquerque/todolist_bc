create database db_todolist_22c;

use db_todolist_22c;

create table tarefa (
	id int unsigned,  /* unsigned é começar a contar do 0 */
    descricao varchar(50) not null,
    concluido enum('S', 'N') default 'N' not null,
    constraint primary key(id)
);

create user usr_todolist_22c identified by 'fa2007';

/* conceder acesso à */
grant select, insert, update, delete
	on db_todolist_22c.* /* (*) define q pode fzr tudo isso em todas as tabelas do banco de dados */
    to usr_todolist_22c@'%';