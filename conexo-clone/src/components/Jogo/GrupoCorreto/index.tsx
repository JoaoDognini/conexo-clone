
import { Palavra } from '../../interfaces/palavra';
import style from './GrupoCorreto.module.scss';

interface GrupoCorretoProps {
	grupoCorreto: Palavra[];
}

export default function GrupoCorreto({ grupoCorreto }: GrupoCorretoProps) {
	const grupo = grupoCorreto[0].grupo;

	function grupoCor() {
		let grupoCor;
		switch (grupo.id) {
			case 1:
				grupoCor = '#c2410c'
				break;
			case 2:
				grupoCor = '#047857'
				break;
			case 3:
				grupoCor = '#0e7490'
				break;
			case 4:
				grupoCor = '#6d28d9'
				break;
			default:
				break;
		}

		return grupoCor;
	}

	function listaDePalavras() {
		const palavras: string[] = [];

		if (grupoCorreto.length) {
			grupoCorreto.forEach(
				palavra => palavras.push(palavra.palavra)
			)
		}

		return palavras.join(', ');
	}

	return (
		<div className={style.grupo_correto_wrapper}>
			<div className={`${style.grupo_correto}`} style={{ backgroundColor: grupoCor() }}>
				<h1 className={style.grupo_correto_titulo}>{grupo.nome}</h1>
				<span className={style.grupo_correto_palavras}>{listaDePalavras()}</span>
			</div>
		</div>
	)
}
