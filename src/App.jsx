import React, { useState } from 'react';
import { Camera, Sparkles, Music } from 'lucide-react';
import { motion } from 'framer-motion';

// Importando as fotos
import foto1 from './assets/image1.png';
import foto2 from './assets/image2.png';
import foto3 from './assets/image3.png';
import foto4 from './assets/image4.png';

function App() {
  const [notas] = useState([
    { id: 1, data: "22 de Junho, 2026", texto: "Dias chuvosos combinam com café quente e as músicas dessa playlist." },
    { id: 2, data: "21 de Junho, 2026", texto: "Às vezes, a música certa diz tudo o que a gente tá sentindo por dentro." },
    { id: 3, data: "19 de Junho, 2026", texto: "Felicidade é perceber a poesia nos pequenos detalhes do dia a dia." }
  ]);

  const fotosIsabela = [foto1, foto2, foto3, foto4];

  return (
    <div className="w-full min-h-screen bg-[#07040d] text-[#f5f2fa] selection:bg-[#9d4edd]/30 flex flex-col items-center">
      
      {/* Header Expandido */}
      <header className="relative w-full bg-[#120a1c] py-16 md:py-20 px-6 rounded-b-[2.5rem] md:rounded-b-[4rem] border-b border-[#9d4edd]/15 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.15)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="text-center relative z-10 w-full max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
          >
            isabela<span className="bg-gradient-to-r from-[#e0aaff] to-[#9d4edd] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]">.space</span>
          </motion.h1>
          <p className="text-base md:text-lg font-light text-[#8e8394] tracking-wide">
            o universo particular e as batidas favoritas da Isa ✨
          </p>
        </div>
      </header>

      {/* Conteúdo Principal Centralizado */}
      <main className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-12 md:py-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start w-full">
          
          {/* Coluna Esquerda: Galeria */}
          <section className="col-span-1 lg:col-span-7 w-full flex flex-col gap-6">
            <div className="flex items-center gap-3 ml-2">
              <Camera className="text-[#9d4edd]" size={28} />
              <h2 className="text-2xl font-bold tracking-tight">Galeria</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
              {fotosIsabela.map((url, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="w-full bg-[#120a1c] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-[#9d4edd]/15 shadow-xl aspect-[3/4]"
                >
                  <img 
                    src={url} 
                    alt={`Isabela ${index + 1}`} 
                    draggable={false}
                    className="w-full h-full object-cover select-none pointer-events-none" 
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Coluna Direita: Spotify e Notas */}
          <aside className="col-span-1 lg:col-span-5 w-full flex flex-col gap-8">
            
            {/* Spotify */}
            <section className="w-full bg-[#120a1c] rounded-[2rem] p-6 border border-[#9d4edd]/15 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Music className="text-[#9d4edd]" size={24} />
                <h3 className="text-lg font-bold text-[#e0aaff]">A Trilha Sonora Dela</h3>
              </div>
              <div className="w-full rounded-2xl overflow-hidden bg-transparent">
                <iframe 
                  src="https://open.spotify.com/embed/playlist/0CURbNR1JSt4tOHrAeDWBw?utm_source=generator&theme=0" 
                  width="100%" 
                  height="380" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="block w-full"
                />
              </div>
            </section>

                      {/* Notas Diárias - Cards Individuais Dinâmicos */}
            <section className="w-full">
              <div className="flex items-center gap-3 mb-6 ml-2">
                <div className="p-2 bg-[#9d4edd]/10 rounded-2xl">
                  <Sparkles className="text-[#9d4edd]" size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#f5f2fa]">Notas Diárias</h3>
              </div>

              <div className="flex flex-col gap-4">
                {notas.map((nota) => (
                  <motion.div 
                    key={nota.id} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 20, 46, 0.8)" }}
                    className="bg-[#120a1c] p-6 rounded-3xl border border-[#9d4edd]/10 shadow-lg hover:shadow-[#9d4edd]/5 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9d4edd]">
                        {nota.data}
                      </span>
                      <p className="text-sm md:text-base text-[#e6e1ed] leading-relaxed font-light">
                        "{nota.texto}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </aside>
        </div>
      </main>

      <footer className="w-full text-center py-8 text-[#8e8394] text-sm tracking-wide mt-auto">
        <p>Feito com 💜 para a Isabela</p>
      </footer>
    </div>
  );
}

export default App;