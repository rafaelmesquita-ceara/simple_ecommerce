const connection = require('../Database/connection');

module.exports = {
  async Create(req, res){
    const {
      CD_Produtos, CH_Nome, VF_Ativo, CH_Categoria, CH_Descricao, 
      VR_PrecoVenda, VR_PrecoCusto, CH_Imagem, IN_Estoque
    } = req.body;
    await connection('produtos').insert({
      CD_Produtos, CH_Nome, VF_Ativo, CH_Categoria, CH_Descricao, 
      VR_PrecoVenda, VR_PrecoCusto, CH_Imagem, IN_Estoque
    });
    return res.status(204).send();
  },

  async Read(req, res){
    var products = await connection('produtos').select(['*']);
    return res.json(products)
  },

  async Update(req, res){
    const { CD_Produtos } = req.params;
    const {
      CH_Nome, VF_Ativo, CH_Categoria, CH_Descricao, 
      VR_PrecoVenda, VR_PrecoCusto, CH_Imagem, IN_Estoque
    } = req.body;
    await connection('produtos')
      .where('CD_Produtos', '=', CD_Produtos)
      .update({
        CH_Nome, VF_Ativo, CH_Categoria, CH_Descricao, 
        VR_PrecoVenda, VR_PrecoCusto, CH_Imagem, IN_Estoque
       });
    
       return res.status(204).send();
  },

  async Delete(req, res){
    const { CD_Produtos } = req.params;
    await connection('produtos').where('CD_Produtos', CD_Produtos).delete();
    return res.status(204).send();
  },
}