// DocumentIndexing.js
module.exports = {
  attributes: {
    conservationNotes: {
      type: 'text',
      size: 4000
    },
    generalNotes: {
      type: 'text',
      size: 4000
    },
    wordKeys: {
      type: 'string',
      size: 255
    },
    internalLocation: {
      type: 'string',
      size: 255
    },
    documentSpecies: {
      type: 'string',
      size: 255
    },
    descriptionLevel: {
      type: 'string',
      size: 255
    },
    accumulationDate: {
      type: 'date'
    },
    document: {
      collection:'document',
      via: 'documentIndexing'
    }
  }
}