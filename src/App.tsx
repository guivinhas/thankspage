/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle, Mail, Smartphone, ArrowRight, Martini, GlassWater, Wine } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950" />
      
      {/* Glow Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(245,158,11,0.4)] relative"
          >
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20" />
            <CheckCircle className="w-12 h-12 text-white relative z-10" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
          >
            Parabéns! Sua compra foi <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              confirmada com sucesso
            </span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            O seu acesso ao <strong className="text-zinc-200 font-semibold">Manual de Cocktails</strong> e a todos os complementos adquiridos já foi enviado para o seu e-mail.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-zinc-950/60 p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-zinc-200 mb-2 text-lg">1. Verifique seu E-mail</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Procure por um e-mail da plataforma com seus dados de acesso. Não esqueça de olhar o spam.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-zinc-950/60 p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-zinc-200 mb-2 text-lg">2. Acesse a Plataforma</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Faça login com o seu e-mail de compra e a senha enviada para acessar todo o conteúdo.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-zinc-950/60 p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Martini className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-zinc-200 mb-2 text-lg">3. Comece a Criar</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Aproveite as receitas e técnicas exclusivas para preparar os melhores cocktails em casa.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-base text-zinc-400">
              Precisa de ajuda? <a href="https://wa.me/5531988059137" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 hover:underline transition-colors font-medium">Fale com o suporte no WhatsApp</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
