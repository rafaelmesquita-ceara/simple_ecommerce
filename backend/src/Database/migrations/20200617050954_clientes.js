
exports.up = function(knex) {
  return knex.schema.createTable('clientes', function(table){
    table.increments();
    table.string('CH_Nome').notNullable();
    table.string('CH_CPF').notNullable();
    table.string('CH_RG');
    table.integer('IN_SEXO').notNullable();
    table.dateTime('DT_NASCIMENTO');
    table.string('CH_EMAIL');
    table.string('CH_SENHA');
    table.dateTime('DT_Cadastro').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  
};
