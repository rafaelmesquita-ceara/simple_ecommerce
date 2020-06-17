const connection = require('../Database/connection');

module.exports = {
  async Create(req, res){
    const {
      CH_TIPO, CH_DESTINATARIO, CH_CEP, CH_ENDERECO, CD_NUMERO, 
      CH_COMPLEMENTO, CH_BAIRRO, CH_CIDADE, CH_UF, CH_PAIS, CD_CLIENTE
    } = req.body;
    await connection('enderecos').insert({
      CH_TIPO, CH_DESTINATARIO, CH_CEP, CH_ENDERECO, CD_NUMERO, 
      CH_COMPLEMENTO, CH_BAIRRO, CH_CIDADE, CH_UF, CH_PAIS, CD_CLIENTE
    });
    return res.status(204).send();
  },

  async Read(req, res){
    var adress = await connection('enderecos').select(['*']);
    return res.json(adress)
  },

  async Update(req, res){
    const { id } = req.params;
    const {
      CH_TIPO, CH_DESTINATARIO, CH_CEP, CH_ENDERECO, CD_NUMERO, 
      CH_COMPLEMENTO, CH_BAIRRO, CH_CIDADE, CH_UF, CH_PAIS, CD_CLIENTE
    } = req.body;
    await connection('enderecos')
      .where('id', '=', id)
      .update({
        CH_TIPO, CH_DESTINATARIO, CH_CEP, CH_ENDERECO, CD_NUMERO, 
        CH_COMPLEMENTO, CH_BAIRRO, CH_CIDADE, CH_UF, CH_PAIS, CD_CLIENTE
       });
    
       return res.status(204).send();
  },

  async Delete(req, res){
    const { id } = req.params;
    await connection('enderecos').where('id', id).delete();
    return res.status(204).send();
  },
}