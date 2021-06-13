const { Schema, model, Types } = require('mongoose');

const DocumentSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastModified: {
      type: Number,
    },
    size: {
      type: Number,
    },
    type: {
      type: String,
    },
    position: {
      type: String,
    },
    faculty: {
      type: String,
    },
    comment: {
      type: Array,
    },
    user: {
      type: Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Document', DocumentSchema);
