import { useNavigate } from 'react-router-dom';
import style from './Menu.module.scss';
import Voltar from '@mui/icons-material/ArrowBack'
import Ajuda from '@mui/icons-material/HelpOutline'

export default function Menu() {
	const navigate = useNavigate();

	return (
		<div className={style.topo}>
			<Voltar className={style.botao_voltar} onClick={() => navigate('/')} />
			<h2>CONEXO</h2>
			<Ajuda className={style.botao_ajuda} />
		</div>
	)
}
