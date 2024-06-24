import { Categoria } from "./Categoria";

export interface Tarefa {
    titulo: string;
    descricao: string;
    status: string;
    categoria?: Categoria;
    criadoEm?: string;
    tarefaId?: string;
    categoriaId?: string;

}