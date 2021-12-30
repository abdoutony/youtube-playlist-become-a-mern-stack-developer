// export a function that returns a model 
module.exports = (mongoose) => {
  
  // define you data schema
  var ContactSchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    company: {
      type: String,
    },
    phone: {
      type: Number,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  });


  // convert the schema into a model
  const Contact = mongoose.model("Contact", ContactSchema);
  return Contact;
};
