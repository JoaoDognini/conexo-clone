import { Palavra } from "../../interfaces/palavra";

interface PalavraProps {
	palavra: Palavra;
	setChute: React.Dispatch<React.SetStateAction<Palavra[]>>;
	chute: Palavra[];
}

export default function PalavrasEmJogo({ palavra, setChute, chute }: PalavraProps) {
	const adiciona = (palavra: Palavra) => {
		if (chute.length === 4) return;
		if (chute.find(chute => chute.id === palavra.id)) {
			const lista = chute.filter(chute => chute.id !== palavra.id)
			palavra.selecionado = false;
			setChute(lista);
			return;
		}

		palavra.selecionado = true;
		setChute(listaAntiga => [...listaAntiga, palavra])
	}

	return (
		<div className="palavra_wrapper" key={palavra.id}>
			<div
				className={`palavra ${palavra.selecionado ? 'selecionado' : ''}`}
				onClick={() => adiciona(palavra)}
			>
				<h5>{palavra.palavra}</h5>
			</div>
		</div>
	)
}
