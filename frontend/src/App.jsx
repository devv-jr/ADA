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
      {/* Barra lateral */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenido principal de la página */}
      <div className="flex-1 flex flex-col overflow-hidden md:pl-64">
        {/* Header / Botón de menú para móviles */}
        <header className="bg-white shadow-sm p-4 flex items-center md:hidden">
          <button onClick={toggleSidebar} className="p-2 text-slate-600 hover:bg-slate-100 rounded-md">
            ☰ Menú
          </button>
          <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
        </header>
      </div>  
    </>
  )
}

export default App