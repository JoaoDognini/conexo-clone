import logoZeus from '../../assets/Zeus-Branco.png';
import style from './Rodape.module.scss';

export default function Rodape() {
	return (
		<footer className={style.rodape}>
			<img className={style.rodape_img} src={logoZeus} />
		</footer>
	)
}
