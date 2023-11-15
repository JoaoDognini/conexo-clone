import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'

function App() {


	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<TelaInicial />} />
					<Route path='/:jogo' element={<Jogo />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App
