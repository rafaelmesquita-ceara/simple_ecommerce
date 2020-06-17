const connection = require('../connection');
exports.up = function(knex) {
  return knex.schema.createTable('produtos', function(table){
    table.string('CD_Produtos').primary();
    table.string('CH_Nome').notNullable();
    table.integer('VF_Ativo').notNullable();
    table.string('CH_Categoria').notNullable();
    table.string('CH_Descricao').notNullable();
    table.float('VR_PrecoVenda').notNullable();
    table.float('VR_PrecoCusto');
    table.string('CH_Imagem');
    table.integer('IN_Estoque');
    table.dateTime('DT_Cadastro').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  
};
