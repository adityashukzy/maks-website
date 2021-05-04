const mongoose = require("mongoose");
require("dotenv").config();

// Starting MongoDB local server
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.error("ERROR! ", error);
  }
})();
