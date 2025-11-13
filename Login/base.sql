-- Cria o banco de dados, se ainda não existir
CREATE DATABASE IF NOT EXISTS loja_virtual;
USE loja_virtual;

-- Cria a tabela de itens (produtos)
CREATE TABLE IF NOT EXISTS itens (
  item_id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(120),
  valor_unitario DECIMAL(10,2),
  estoque INT
);

-- Cria a tabela de contas de usuários
CREATE TABLE IF NOT EXISTS contas (
  conta_id INT AUTO_INCREMENT PRIMARY KEY,
  nome_usuario VARCHAR(60) UNIQUE,
  hash_senha VARCHAR(150)
);

-- Insere um usuário padrão (exemplo)
INSERT INTO contas (nome_usuario, hash_senha)
VALUES ('gestor', 'senha123');
