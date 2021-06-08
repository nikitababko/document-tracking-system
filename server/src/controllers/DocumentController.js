const DocumentModel = require('../models/DocumentModel');

const DocumentController = {
  uploadDocument: async (req, res) => {
    // const newpath = __dirname + '/files/';
    // const file = req.files.file;
    // const filename = file.name;

    // console.log(req.files);

    // file.mv(`${newpath}${filename}`, (err) => {
    //   if (err) {
    //     res.status(500).send({ message: 'File upload failed', code: 200 });
    //   }
    //   res.status(200).send({ message: 'File Uploaded', code: 200 });
    // });
    try {
      // const { name } = user;

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
