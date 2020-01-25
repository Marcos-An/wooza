const mongoose = require('mongoose');
const repository = require('../repositories');

exports.get = async (req, res) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getByName = async (req, res) => {
  try {
    var data = await repository.getByName(req.params.Name);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.post = async (req, res) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: 'Deu tudo certo' });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.put = (req, res) => {
  const id = req.params.id;
  res.status(201).send({
    id: id,
    item: req.body
  });
};

exports.del = async (req, res) => {
  try {
    await repository.del(req.body.id);
    res.status(200).send('Produto removido com sucesso');
  } catch (error) {
    res.status(400).send('Erro ao remover');
  }
};
