import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ListaDeJogos from './ListaDeJogos';

interface AlertDialogProps {
	jogos: string[];
}

export default function AlertDialog({ jogos }: AlertDialogProps) {
	const [open, setOpen] = useState(false);

	const abrePopUp = () => {
		setOpen(true);
	};

	const fechaPopUp = () => {
		setOpen(false);
	};

	return (
		<>
			<button onClick={abrePopUp}>
				Jogar
			</button>
			<Dialog
				onClose={fechaPopUp}
				open={open}
			>
				<DialogContent sx={{ backgroundColor: "#0f172a" }}>
					<ListaDeJogos jogos={jogos} />
				</DialogContent>
			</Dialog>
		</>
	);
}