
exports.up = function(knex) {
  return knex.schema.createTable('enderecos', function(table){
    table.increments();
    table.string('CH_TIPO');
    table.string('CH_DESTINATARIO').notNullable();
    table.string('CH_CEP').notNullable();
    table.string('CH_ENDERECO').notNullable();
    table.integer('CD_NUMERO').notNullable();
    table.string('CH_COMPLEMENTO');
    table.string('CH_BAIRRO').notNullable();
    table.string('CH_CIDADE').notNullable();
    table.string('CH_UF').notNullable();
    table.string('CH_PAIS').notNullable();
    table.dateTime('DT_Cadastro').defaultTo(knex.fn.now());
    table.integer('CD_CLIENTE').notNullable();
    table.foreign('CD_CLIENTE').onDelete('CASCADE').references('id').inTable('clientes');
  });
};

exports.down = function(knex) {
  
};
