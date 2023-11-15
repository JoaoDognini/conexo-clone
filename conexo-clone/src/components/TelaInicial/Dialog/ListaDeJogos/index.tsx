import { useNavigate } from 'react-router-dom';
import style from './ListaDeJogos.module.scss';

interface ListaDeJogosProp {
	jogos: string[]
}

export default function ListaDeJogos({ jogos }: ListaDeJogosProp) {
	const navigate = useNavigate();

	return (
		<div className={style.jogos}>
			{jogos.map(jogo =>
				<button
					className={style.jogos_botao}
					onClick={() => navigate(`/${jogo}`)}
					key={jogo}
				>
					{jogo.replace('jogo', '')}
				</button>
			)}
		</div>
	)
}
