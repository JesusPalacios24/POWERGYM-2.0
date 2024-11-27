const mongoose = require("mongoose");

const getModelForCollection = (collectionName) => {
  // Genera un esquema vacío que permita almacenar cualquier estructura
  const schema = new mongoose.Schema({}, { strict: false });
  return mongoose.model(collectionName, schema);
};
