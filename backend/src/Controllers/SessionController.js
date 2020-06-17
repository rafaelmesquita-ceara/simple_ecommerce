var jwt = require('jsonwebtoken');

module.exports = {
  Create(req, res){
    const { username, password } = req.body;
    if(username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD){
      return res.status(400).json({ error: 'NO USER FOUND.' });
    }
    var token = jwt.sign({ login : process.env.ADMIN_USERNAME }, process.env.SECRET, {
      expiresIn: 7200000 // expires in 2h
    });
    return res.status(200).json({"TOKEN: " : token})
  }
}
