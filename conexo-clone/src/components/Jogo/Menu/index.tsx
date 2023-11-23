import { useNavigate } from 'react-router-dom';
import style from './Menu.module.scss';
import Voltar from '@mui/icons-material/ArrowBack'
import Ajuda from '@mui/icons-material/HelpOutline'
import { Dialog, DialogContent } from '@mui/material';
import { useState } from 'react';

export default function Menu() {
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	const abrePopUp = () => {
		setOpen(true);
	};

	const fechaPopUp = () => {
		setOpen(false);
	};

	return (
		<div className={style.topo}>
			<Voltar className={style.botao_voltar} onClick={() => navigate('/')} />
			<h2>CONEXO</h2>
			<Ajuda className={style.botao_ajuda} onClick={abrePopUp} />

			<Dialog
				onClose={fechaPopUp}
				open={open}
			>
				<DialogContent className={style.dialog}>
					<h1><Ajuda /> Como jogar</h1>
					<p>Forme grupos de 4 palavras que tenham algo em comum.</p>
					<p>Clique em uma palavra para selecioná-la. Se precisar, você pode clicar novamente para desselecionar.</p>
					<p>Assim que você selecionar 4 palavras o jogo irá automaticamente conferir se o grupo está correto.</p>
					<p>Se estiver correto, a categoria será revelada. Senão, tente novamente.</p>
					<p>Descubra os 4 grupos.</p>
				</DialogContent>
			</Dialog>
		</div>
	)
}
