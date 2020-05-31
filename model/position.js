import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
    AstusSerialNumber: {type: String},
    Location:   {type: String},
    Longitude:  {type: Number },
    Latitude:   {type: Number},
    Heading:    {type: Number},
    Speed: { type: Number },
    Source: { type: String },
    CreatedDate: { type: Date }
});

export default mongoose.model('Position', positionSchema);