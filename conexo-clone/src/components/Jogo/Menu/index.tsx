import { useNavigate } from 'react-router-dom';

export default function Menu() {
	const navigate = useNavigate();

	return (
		<div className='topo'>
			<button onClick={() => navigate('/')}>Voltar</button>
			<h2>CONEXO</h2>
			<button>Ajuda</button>
		</div>
	)
}
