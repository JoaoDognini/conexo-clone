import logo from '../../assets/pense-nisso.png';
import style from './TelaInicial.module.scss';
import jogos from '../jogos.json';
import AlertDialog from './Dialog';
// import logoZeus from '../../assets/Zeus-Branco.png';

export default function TelaInicial() {
	const nomeJogos = Object.keys(jogos)

	return (
		<div className={style.tela_inicial}>
			<img src={logo} />
			<h2>Mais um Conexo</h2>
			<p>Forme 4 grupos de 4 palavras que tenham algo em comum</p>
			<AlertDialog jogos={nomeJogos} />
			{/* <img src={logoZeus} /> */}
		</div>
	)
}
