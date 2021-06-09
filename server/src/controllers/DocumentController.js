const DocumentModel = require('../models/DocumentModel');

const DocumentController = {
  uploadDocument: async (req, res) => {
    try {
      const newDocument = new DocumentModel({
        name: 'test',
      });

      await newDocument.save();

      res.json({
        msg: 'Аккаунт был активирован!',
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },
};

module.exports = DocumentController;
