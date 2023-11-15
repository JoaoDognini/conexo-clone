import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ListaDeJogos from './ListaDeJogos';

interface AlertDialogProps {
	jogos: string[];
}

export default function AlertDialog({ jogos }: AlertDialogProps) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<button onClick={handleClickOpen}>
				Jogar
			</button>
			<Dialog
				onClose={handleClose}
				open={open}
			>
				<DialogContent sx={{ backgroundColor: "#0f172a" }}>
					<ListaDeJogos jogos={jogos} />
				</DialogContent>
			</Dialog>
		</>
	);
}