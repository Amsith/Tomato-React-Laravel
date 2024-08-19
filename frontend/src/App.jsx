import './App.css'
import Admin from './Components/AdminCompo/Admin/Admin'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminTable from './Components/Pages/AdminTable/AdminTable'
import AdminCreate from './Components/Pages/AdminCreate/AdminCreate'
import AdminEdit from './Components/Pages/AdminEdit/AdminEdit'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Shuffle from './Components/Shuffle/Shuffle'

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='admin' element={<Admin />}>

            <Route index element={<Navigate to='/admin/create' />} />
            <Route path='create' element={<AdminCreate />} />
            <Route path='table' element={<AdminTable />} />
            <Route path='edit/:id' element={<AdminEdit />} />
          </Route>


          <Route path="/about/:id" element={<About />} />
          <Route path="/shuffle" element={<Shuffle/>} />


           
        </Routes>

        <Footer />
      </HashRouter>
    </>
  )
}

export default App
