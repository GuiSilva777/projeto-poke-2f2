import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'


const App = () => {

  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="PokeFlex" element={<Home/>} />
    <Route path="PokeGrid" element={<Home/>} />
    </Routes>
  )
}

export default App
