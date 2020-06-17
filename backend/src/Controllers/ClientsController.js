const connection = require('../Database/connection');

module.exports = {
  async Create(req, res){
    const {
      CH_Nome, CH_CPF, CH_RG, IN_SEXO, DT_NASCIMENTO, 
      CH_EMAIL, CH_SENHA
    } = req.body;
    await connection('clientes').insert({
      CH_Nome, CH_CPF, CH_RG, IN_SEXO, DT_NASCIMENTO, 
      CH_EMAIL, CH_SENHA
    });
    return res.status(204).send();
  },

  async Read(req, res){
    var clients = await connection('clientes').select(['*']);
    for ( i in clients ){
      clients[i].enderecos = await connection('enderecos')
        .where({'CD_CLIENTE' : clients[i].id})
        .select(['*']);    
    }
    console.log(clients)
    return res.json(clients)
  },

  async Update(req, res){
    const { id } = req.params;
    const {
      CH_Nome, CH_CPF, CH_RG, IN_SEXO, DT_NASCIMENTO, 
      CH_EMAIL, CH_SENHA
    } = req.body;
    await connection('clientes')
      .where('id', '=', id)
      .update({
        CH_Nome, CH_CPF, CH_RG, IN_SEXO, DT_NASCIMENTO, 
        CH_EMAIL, CH_SENHA
       });
    
       return res.status(204).send();
  },

  async Delete(req, res){
    const { id } = req.params;
    await connection('clientes').where('id', id).delete();
    return res.status(204).send();
  },
}