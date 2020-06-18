let Correios = require('node-correios');
let correios = new Correios();
module.exports = {
  CalculaFrete(req, res){
    const 
    { 
      nCdServico, sCepOrigem, sCepDestino, nVlPeso,
      nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro
    } = req.body;
    let args = 
    {
      nCdServico, sCepOrigem, sCepDestino, nVlPeso,
      nCdFormato, nVlComprimento, nVlAltura, nVlLargura, nVlDiametro
    }
    
    correios.calcPrecoPrazo(args)
    .then(result => {
      return res.json(result);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json(error);
    });
  },

  BuscaPorCEP(req, res){
    
    const { cep } = req.body;

    correios.consultaCEP({ cep })
    .then(result => {
      return res.json(result);
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json(error);
    });

  }
}