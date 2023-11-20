import { BrowserRouter, Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'
import Rodape from './components/Rodape'

function App() {

	return (
		<div className={style.app}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<TelaInicial />} />
					<Route path='/:jogo' element={<Jogo />} />
				</Routes>
			</BrowserRouter>

			<Rodape />
		</div>
	)
}

export default App
