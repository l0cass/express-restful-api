import "dotenv/config"
import express from "express"

import "./config/db.js"
import PostModel from "./models/Post.js"

// Configura o middleware para analisar URLs codificadas e JSON no corpo das solicitações.
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Define uma rota GET para buscar todos os posts.
app.get("/posts", async (_req, res) => {
  try {
    const posts = await PostModel.find({ deletedAt: null })
    res.json({ posts })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
})

// Define uma rota GET para buscar um post específico pelo ID.
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params

  try {
    const post = await PostModel.findById({ _id: id })
    res.json({ post })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
})

// Define uma rota POST para criar um novo post.
app.post("/posts", async (req, res) => {
  const { title, content, author } = req.body

  if (!title || !content || !author) return res.status(400).json({ message: "Bad request" })

  try {
    const newPost = await PostModel.create({ title, content, author }) // Cria um novo post no banco de dados.
    res.status(201).json({ created: newPost })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
})

// Define uma rota DELETE para excluir um post por título (remoção lógica, sem deletar do banco).
app.delete("/posts", async (req, res) => {
  const { title } = req.body

  if (!title) return res.status(400).json({ message: "Bad request" })

  try {
    const postFound = await PostModel.findOne({ title }) // Busca um post pelo título.
    if (!postFound) return res.status(404).json({ message: "Not found" })

    postFound.softDelete()
    res.status(200).json({ deleted: postFound })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error })
  }
})

// Inicia o servidor na porta definida na variável de ambiente "PORT".
app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))
