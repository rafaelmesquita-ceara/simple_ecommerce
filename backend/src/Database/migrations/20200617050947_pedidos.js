
exports.up = function(knex) {
  return knex.schema.createTable('pedidos', function(table){
    table.increments();

    table.string('CH_LOCALVENDA');
    table.float('VR_FRETE').notNullable();
    table.float('VR_TOTAL').notNullable();
    table.string('CH_PAGAMENTO').notNullable();
    table.string('CH_STATUS').notNullable();
    table.dateTime('DT_Cadastro').defaultTo(knex.fn.now());

    table.integer('CD_COBRANCA').notNullable(); //Endereço para cobrança
    table.foreign('CD_COBRANCA').references('id').inTable('enderecos');

    table.integer('CD_ENTREGA').notNullable(); //Endereço para entrega
    table.foreign('CD_ENTREGA').references('id').inTable('enderecos');

    table.integer('CD_CLIENTE').notNullable();
    table.foreign('CD_CLIENTE').references('id').inTable('clientes');
  });
};

exports.down = function(knex) {
  
};
