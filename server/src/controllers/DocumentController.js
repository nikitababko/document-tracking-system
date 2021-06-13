const DocumentModel = require('../models/DocumentModel');

const DocumentController = {
  uploadDocument: async (req, res) => {
    const {
      name,
      lastModified,
      size,
      type,
      position,
      faculty,
      comment,
      userId,
    } = req.body;

    console.log(
      name,
      lastModified,
      size,
      type,
      position,
      faculty,
      comment,
      userId
    );

    try {
      const newDocument = new DocumentModel({
        name,
        lastModified,
        size,
        type,
        position,
        faculty,
        comment,
        user: userId,
      });

      await newDocument.save();

      res.json({
        msg: 'Документы отправлены!',
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },

  getAllDocuments: async (req, res) => {
    try {
      const allDocuments = await DocumentModel.find();

      res.json({
        msg: 'Документы получены!',
        allDocuments,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },

  findDocument: async (req, res) => {
    try {
      const existingDocument = await DocumentModel.findById(
        req.body.documentId
      ).populate('user', '-password');

      res.json({
        msg: 'Документ найден!',
        existingDocument,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  },
};

module.exports = DocumentController;
