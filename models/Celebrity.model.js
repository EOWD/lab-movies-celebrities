const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const celebSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      occupation: {
        type: String,
        required: true,
      },
      catchPhrase: {
        type: String,
      },
      cast: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Movie', 
        },
      ],
  
  });
  



const Celebrity = mongoose.model('Celebrity', celebSchema);

module.exports = Celebrity;