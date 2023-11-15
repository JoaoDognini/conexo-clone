/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import palavras from '../jogos.json'
import './Jogo.css'
import { Palavra } from '../interfaces/palavra';
import GrupoCorreto from './GrupoCorreto';
import Menu from './Menu';
import PalavrasEmJogo from './PalavrasEmJogo';
import JogoCompleto from './JogoCompleto';
import { useParams } from 'react-router-dom';
import { Grupo } from '../interfaces/grupo';
import { TipoJogo } from '../types/tipo-jogo';

export default function Jogo() {
	const { jogo } = useParams();
	const palavrasJogo = palavras[jogo as TipoJogo]
	const [chute, setChute] = useState<Palavra[]>([]);

	const [tentativas, setTentativas] = useState(() => {
		const tentativasFormatado = localStorage.getItem(`tentativas-${jogo}`)

		return tentativasFormatado ? JSON.parse(tentativasFormatado) : 0
	});

	const [palavrasEmJogo, setPalavrasEmJogo] = useState<Palavra[]>(() => {
		const palavrasEmJogoFormatado = localStorage.getItem(`palavrasEmJogo-${jogo}`);
		const palavrasAleatorias = palavrasJogo.sort(function (_a, _b) {
			return Math.random() - 0.5;
		});

		return palavrasEmJogoFormatado ? JSON.parse(palavrasEmJogoFormatado) : palavrasAleatorias
	});

	const [grupoCorreto, setGrupoCorreto] = useState<Palavra[][]>(() => {
		const grupoCorretoFormatado = localStorage.getItem(`grupoCorreto-${jogo}`);

		return grupoCorretoFormatado ? JSON.parse(grupoCorretoFormatado) : [];
	});

	function mesmoGrupo(palavras: Palavra[]) {
		const grupo = palavras[0].grupo.id;

		return palavras.every(e => e.grupo.id === grupo)
	}

	function deletarMesmoGrupo(lista: Palavra[], grupo: Grupo) {
		if (lista.length <= 1) return lista;

		const novoArray = lista.filter(obj => obj.grupo.id != grupo.id);

		return novoArray;
	}

	useEffect(() => {
		const grupoCorretoFormatado = JSON.stringify(grupoCorreto);
		localStorage.setItem(`grupoCorreto-${jogo}`, grupoCorretoFormatado);
		const palavrasEmJogoFormatado = JSON.stringify(palavrasEmJogo);
		localStorage.setItem(`palavrasEmJogo-${jogo}`, palavrasEmJogoFormatado);
		const tentativasFormatado = JSON.stringify(tentativas);
		localStorage.setItem(`tentativas-${jogo}`, tentativasFormatado);
	}, [grupoCorreto, palavrasEmJogo, tentativas, jogo])

	useEffect(() => {
		if (chute.length === 4) {
			if (mesmoGrupo(chute)) {
				const novasPalavras = deletarMesmoGrupo(palavrasEmJogo, chute[0].grupo)
				const novaLista = chute.map(obj => { return { ...obj, correto: true } });

				setGrupoCorreto(grupoAnterior => [...grupoAnterior, novaLista]);
				setPalavrasEmJogo(novasPalavras);
			} else {
				const palavras = palavrasEmJogo.map(palavra => { return { ...palavra, selecionado: false } })

				setPalavrasEmJogo(palavras)
			}

			const novaTentativa = tentativas + 1;
			setTentativas(novaTentativa)
			setChute([]);
		}
	}, [chute, grupoCorreto, palavrasEmJogo, tentativas])

	return (
		<div className='jogo'>
			<Menu />

			{palavrasEmJogo.length === 0 && <JogoCompleto tentativas={tentativas} />}

			<div className='chute'>
				Tentativas: {tentativas}
			</div>

			<div className='palavras'>
				{grupoCorreto.map((grupo, index) =>
					<GrupoCorreto key={index} grupoCorreto={grupo}></GrupoCorreto>
				)}
				{palavrasEmJogo.map(palavra =>
					<PalavrasEmJogo key={palavra.id} palavra={palavra} setChute={setChute} chute={chute} />
				)}
			</div>
		</div>
	)
}