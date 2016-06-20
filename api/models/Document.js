// Document.js
module.exports = {
  attributes: {
    codRef: {
      type: 'string',
      size: 255,
      required: true,
      unique: true
    },
    formalTitle: {
      type: 'string',
      size: 255
    },
    assignedTitle: {
      type: 'string',
      size: 255
    },
    description: {
      type: 'text',
      size: 4000
    },
    productionDate: {
      type: 'date'
    },
    sizeSupport: {
      type: 'string',
      size: 255
    },
    producersName: {
      type: 'string',
      size: 255
    },

    userCreated: {
      model: 'user'
    },
    userUpdated: {
      model: 'user'
    },
    documentGenre: {
      model: 'documentGenre'
    },
    documentIndexing: {
      model: 'documentIndexing',
      unique: true
    }
  }
}