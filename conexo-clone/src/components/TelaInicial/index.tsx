import logo from '../../assets/identidade-gincana-ferias.png';
import style from './TelaInicial.module.scss';
import jogos from '../jogos.json';
import PopUpJogos from './Dialog';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

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
			<div className={style.tela_inicial_logo_textos}>
				<img className={style.img_logo} src={logo} />
				<div className={style.textos}>
					<h2>Conexo</h2>
					<p>Forme 4 grupos de 4 palavras que tenham algo em comum</p>
				</div>
			</div>
			<PopUpJogos jogos={nomeJogos} />
			<div className={style.limpar_cache}>
				<button
					onClick={limparStorage}
				>
					Limpar cache
				</button>

				{visivel && <CheckIcon className={style.icone} />}
			</div>
		</div>
	)
}
