const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://urielDesa:urielDesa123@mytinerarie-kivbx.mongodb.net/Mytinerarie', {
  useNewUrlParser: true
});

const connection = mongoose.connection
connection.once('open', () => console.log("OK"))
