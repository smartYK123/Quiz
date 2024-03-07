import mongoose from "mongoose";
const { Schema } = mongoose;


const staffSchema = new Schema({
  portalId: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model('staff', staffSchema);
