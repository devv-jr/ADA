import React from 'react';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Fondo oscuro para dispositivos móviles cuando el sidebar está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Contenedor del Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-stone-700 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 text-2xl font-bold border-b border-slate-800 flex justify-between items-center">
          <span>Mi Dashboard</span>
          <button onClick={toggleSidebar} className="md:hidden text-slate-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* Lista de navegación */}
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            🏠 Inicio
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            📊 Estadísticas
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            ⚙️ Configuración
          </a>
        </nav>
      </aside>
    </>
  );
}
