const connection = require('../Database/connection');

module.exports = {
  async Create(req, res){
    const {
      CH_LOCALVENDA, VR_FRETE, VR_TOTAL, CH_PAGAMENTO,
      CD_COBRANCA, CD_ENTREGA, CD_CLIENTE
    } = req.body;
    const  CH_STATUS = "PEDIDO REALIZADO";
    await connection('pedidos').insert({
      CH_LOCALVENDA, VR_FRETE, VR_TOTAL, CH_PAGAMENTO, CH_STATUS,
      CD_COBRANCA, CD_ENTREGA, CD_CLIENTE
    });
    return res.status(204).send();
  },

  async Read(req, res){
    var sales = await connection('pedidos').select(['*']);
    return res.json(sales)
  },

  async Update(req, res){
    const { id } = req.params;
    const {
      CH_LOCALVENDA, VR_FRETE, VR_TOTAL, CH_PAGAMENTO, CH_STATUS,
      CD_COBRANCA, CD_ENTREGA, CD_CLIENTE
    } = req.body;
    await connection('pedidos')
      .where('id', '=', id)
      .update({
        CH_LOCALVENDA, VR_FRETE, VR_TOTAL, CH_PAGAMENTO, CH_STATUS,
        CD_COBRANCA, CD_ENTREGA, CD_CLIENTE
       });
    
       return res.status(204).send();
  },

  async Delete(req, res){
    const { id } = req.params;
    await connection('pedidos').where('id', id).delete();
    return res.status(204).send();
  },
}