import logo from '../../assets/pense-nisso.png';
import style from './TelaInicial.module.scss';
import jogos from '../jogos.json';
import AlertDialog from './Dialog';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
// import logoZeus from '../../assets/Zeus-Branco.png';

export default function TelaInicial() {
	const nomeJogos = Object.keys(jogos)
	const [visivel, setVisivel] = useState(false);

	const limparStorage = () => {
		setVisivel(true);
		localStorage.clear()
		setTimeout(() => setVisivel(false), 1000)
	}

	return (
		<div className={style.tela_inicial}>
			<img src={logo} />
			<h2>Mais um Conexo</h2>
			<p>Forme 4 grupos de 4 palavras que tenham algo em comum</p>
			<AlertDialog jogos={nomeJogos} />
			<div className={style.limpar_cache}>
				<button
					onClick={limparStorage}
				>
					Limpar cache
				</button>

				{visivel && <CheckIcon className={style.icone} />}
			</div>
			{/* <img src={logoZeus} /> */}
		</div>
	)
}
