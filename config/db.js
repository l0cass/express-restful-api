import mongoose from "mongoose"

// Conecta ao banco de dados MongoDB usando a URI armazenada na variável de ambiente "MONGO_URI".
await mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("MongoDB Atlas connected."))
  .catch((error) => console.log(error))
