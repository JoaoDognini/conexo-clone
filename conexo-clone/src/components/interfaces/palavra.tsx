import { Grupo } from "./grupo";

export interface Palavra {
	id: number;
	palavra: string;
	grupo: Grupo;
	selecionado: boolean;
	correto: boolean;
}