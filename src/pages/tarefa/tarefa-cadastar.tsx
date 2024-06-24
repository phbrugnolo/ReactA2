import { Tarefa } from "../../models/Tarefa";
import { useState } from "react";
import axios from "axios";

function TarefaCadastrar() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

  function cadastrarTarefa(e : any) {
    e.preventDefault();
    const tarefa = {
        titulo: titulo,
        descricao: descricao,
        status: "Não iniciada",
        categoriaId: categoriaId,
    };
    
    axios.post('http://localhost:5000/tarefas/cadastrar', tarefa, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Erro ao cadastrar usuário:', error);
    });
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={cadastrarTarefa}>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            placeholder="Digite o titulo da tarefa"
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descricao:</label>
          <input
            type="text"
            placeholder="Digite a descricao da tarefa"
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CategoriaId</label>
          <input
            type="text"
            onChange={(e) => setCategoriaId(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default TarefaCadastrar;