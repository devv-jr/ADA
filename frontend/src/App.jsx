// Importaciones
import { useState } from 'react'
import './App.css'

// Componentes y Pantallas
import Navbar from './components/layout/Navbar.jsx'
import Sidebar from './components/layout/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar />
      <div className="container max-w-xl mx-auto w-9/12 px-4 mt-8">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>    
    </>
  )
}

export default App