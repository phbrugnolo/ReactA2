import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TarefaCadastrar from './pages/tarefa/tarefa-cadastar';
import TarefaListar from './pages/tarefa/tarefa-listar';
import TarefaListarConcluida from './pages/tarefa/tarefa-concluida';
import TarefaListarNaoConcluida from './pages/tarefa/tarefa-nao-concluida';
import TarefaEditar from './pages/tarefa/tarefa-editar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tarefa/cadastrar">Cadastrar Tarefa</Link>
            </li>
            <li>
              <Link to="/tarefa/listar">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/listar/concluida">Listar Tarefas Concluidas</Link>
            </li>
            <li>
              <Link to="/tarefa/listar/nao-concluida">Listar Tarefas Não Concluidas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaListar/>}></Route>
          <Route path="/tarefa/cadastrar" element={<TarefaCadastrar/>}></Route>
          <Route path="/tarefa/listar" element={<TarefaListar/>}></Route>
          <Route path="/tarefa/listar/concluida" element={<TarefaListarConcluida/>}></Route>
          <Route path="/tarefa/listar/nao-concluida" element={<TarefaListarNaoConcluida/>}></Route>
          <Route path={"/tarefa/alterar/:tarefaId" }element={<TarefaEditar/>}></Route>
        </Routes>
        <footer>
          <p>Desenvolvido por phbrugnolo &copy; 2024</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
