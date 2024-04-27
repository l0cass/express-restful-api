import mongoose from "mongoose"

// Cria um novo esquema para a coleção "Post" no banco de dados MongoDB.
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  author: {
    type: String,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
})

// Define um método para marcar um post como "soft delete" (remoção lógica, sem excluir do banco).
PostSchema.methods.softDelete = function () {
  this.deletedAt = new Date()
  this.save()
}

// Cria um modelo para a coleção "Post" com base no esquema definido.
const PostModel = mongoose.model("Post", PostSchema)

export default PostModel
