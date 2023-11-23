import { useNavigate } from 'react-router-dom';
import style from './ListaDeJogos.module.scss';

interface ListaDeJogosProp {
	jogos: string[]
}

export default function ListaDeJogos({ jogos }: ListaDeJogosProp) {
	const navigate = useNavigate();

	function completo(jogo: string) {
		let jogoFinalizadoFormatado;
		const jogoFinalizado = localStorage.getItem(`jogoCompleto-${jogo}`)
		if (jogoFinalizado === null) return;
		if (jogoFinalizado) jogoFinalizadoFormatado = JSON.parse(jogoFinalizado!);

		return `${jogoFinalizadoFormatado ? style.jogo_completo : style.jogo_incompleto}`
	}

	return (
		<div className={style.jogos}>
			{jogos.map(jogo =>
				<button
					className={`${style.jogos_botao} ${completo(jogo)}`}
					onClick={() => navigate(`/${jogo}`)}
					key={jogo}
				>
					{jogo.replace('jogo', '')}
				</button>
			)}
		</div>
	)
}
