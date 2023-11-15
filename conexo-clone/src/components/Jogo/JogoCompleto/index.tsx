import style from './JogoCompleto.module.scss';

interface JogoCompletoProps {
	tentativas: number;
}

export default function JogoCompleto({ tentativas }: JogoCompletoProps) {
	return (
		<div className={style.jogo_completo}>
			<h1>Parabéns!</h1>
			<p>Você conseguiu em <b>{tentativas}</b> tentativas</p>
		</div>
	)
}
