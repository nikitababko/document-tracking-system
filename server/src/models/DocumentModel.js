const { Schema, model } = require('mongoose');

const DocumentSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Document', DocumentSchema);
