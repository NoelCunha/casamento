import React, { useState } from 'react';
    import { Check, X, Loader2, Heart, MapPin, Calendar, Clock, ArrowDown } from 'lucide-react';

    function App() {
      return (
        <div className="min-h-screen bg-[#FAFAF9]">
          
          {/* Hero Section com Imagem de Fundo */}
          <header className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Imagem de Fundo com Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
                alt="Casamento Background" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Conteúdo do Hero */}
            <div className="relative z-10 text-center text-white px-4 animate-up">
              <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 opacity-90">
                Save The Date
              </p>
              
              <h1 className="font-script text-7xl md:text-9xl mb-2 text-[#F5E6D3]">
                Joyce & Leonardo
              </h1>
              
              <div className="w-24 h-px bg-[#F5E6D3] mx-auto my-8 opacity-70"></div>

              <p className="font-serif text-xl md:text-2xl italic tracking-wide opacity-95">
                18 de Abril de 2026
              </p>
              
              <p className="uppercase tracking-[0.2em] text-sm mt-4 opacity-80">
                Leandro Ferreira • Minas Gerais
              </p>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
              <ArrowDown className="text-white/70 w-6 h-6" />
            </div>
          </header>

          {/* Seção de Detalhes (Papel Branco sobre Fundo Creme) */}
          <main className="relative z-20 -mt-20 container-custom pb-20">
            <div className="bg-white shadow-2xl rounded-sm p-8 md:p-16 animate-up delay-200">
              
              {/* Informações Principais */}
              <div className="grid md:grid-cols-3 gap-12 text-center border-b border-stone-100 pb-16 mb-16">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-4 text-[#C5A059]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Data</h3>
                  <p className="text-stone-500">18 de Abril, 2026</p>
                  <p className="text-stone-400 text-sm">Sábado</p>
                </div>

                <div className="flex flex-col items-center border-x-0 md:border-x border-stone-100 px-0 md:px-8">
                  <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-4 text-[#C5A059]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Horário</h3>
                  <p className="text-stone-500">Cerimônia às 18:00h</p>
                  <p className="text-stone-400 text-sm">Recepção a seguir</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-4 text-[#C5A059]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Local</h3>
                  <p className="text-stone-500">Matriz de Leandro Ferreira</p>
                  <p className="text-stone-400 text-sm">Leandro Ferreira - Minas Gerais</p>
                </div>
              </div>

              {/* Seção RSVP */}
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-[#C5A059] uppercase tracking-widest text-xs font-bold">Confirmação de Presença</span>
                  <h2 className="font-script text-5xl md:text-6xl mt-2 mb-6 text-stone-800">R.S.V.P.</h2>
                  <p className="text-stone-500 italic">
                    Por favor, confirme sua presença até o dia 4 de Abril.
                  </p>
                </div>

                <RsvpForm />
              </div>

            </div>
          </main>

          <footer className="bg-[#292524] text-stone-400 py-12 text-center text-sm uppercase tracking-widest">
            <p>Feito com amor para Joyce & Leonardo</p>
          </footer>
        </div>
      );
    }

    function RsvpForm() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: 'yes',
        guestsCount: 0,
        message: ''
      });
      const [status, setStatus] = useState('idle');

      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simula envio - em produção, conecte a um serviço como Formspree, EmailJS ou Google Forms
        setTimeout(() => {
          console.log('RSVP enviado:', {
            ...formData,
            attending: formData.attending === 'yes',
            guestsCount: parseInt(formData.guestsCount)
          });
          setStatus('success');
        }, 1000);
      };

      if (status === 'success') {
        return (
          <div className="text-center py-8 animate-up bg-stone-50 rounded p-8">
            <Heart className="w-12 h-12 text-[#C5A059] mx-auto mb-4 fill-[#C5A059]" />
            <h3 className="font-serif text-3xl text-stone-800 mb-2">Obrigado!</h3>
            <p className="text-stone-600 mb-6">Sua resposta foi enviada com sucesso.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-xs uppercase tracking-widest text-[#C5A059] border-b border-[#C5A059] pb-1 hover:text-stone-800 hover:border-stone-800 transition-colors"
            >
              Enviar outra resposta
            </button>
          </div>
        );
      }

      return (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="input-wrapper">
            <input
              type="text"
              id="name"
              required
              className="input-field"
              placeholder=" "
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <label htmlFor="name" className="input-label">Nome Completo</label>
          </div>

          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder=" "
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <label htmlFor="email" className="input-label">Email (Opcional)</label>
          </div>

          <div className="py-4">
            <p className="text-center text-xs uppercase tracking-widest text-stone-400 mb-4 font-bold">Você irá comparecer?</p>
            <div className="flex gap-4 justify-center">
              <label className={`
                cursor-pointer px-6 py-4 border transition-all duration-300 flex items-center gap-2
                ${formData.attending === 'yes' 
                  ? 'border-[#C5A059] bg-[#C5A059] text-white shadow-md' 
                  : 'border-stone-200 text-stone-500 hover:border-stone-400'}
              `}>
                <input 
                  type="radio" 
                  name="attending" 
                  value="yes" 
                  checked={formData.attending === 'yes'}
                  onChange={(e) => setFormData({...formData, attending: e.target.value})}
                  className="hidden" 
                />
                <Check className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs font-bold">Sim, irei</span>
              </label>

              <label className={`
                cursor-pointer px-6 py-4 border transition-all duration-300 flex items-center gap-2
                ${formData.attending === 'no' 
                  ? 'border-stone-800 bg-stone-800 text-white shadow-md' 
                  : 'border-stone-200 text-stone-500 hover:border-stone-400'}
              `}>
                <input 
                  type="radio" 
                  name="attending" 
                  value="no" 
                  checked={formData.attending === 'no'}
                  onChange={(e) => setFormData({...formData, attending: e.target.value})}
                  className="hidden" 
                />
                <X className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs font-bold">Não poderei</span>
              </label>
            </div>
          </div>

          {formData.attending === 'yes' && (
            <div className="animate-up">
              <p className="text-center text-xs uppercase tracking-widest text-stone-400 mb-4 font-bold">Total de Acompanhantes</p>
              <div className="flex justify-center gap-2">
                {[0, 1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({...formData, guestsCount: num})}
                    className={`
                      w-10 h-10 rounded-full font-serif text-lg transition-all duration-300 border
                      ${parseInt(formData.guestsCount) === num 
                        ? 'bg-[#C5A059] text-white border-[#C5A059] scale-110' 
                        : 'bg-transparent text-stone-400 border-stone-200 hover:border-[#C5A059] hover:text-[#C5A059]'}
                    `}
                  >
                    {num === 0 ? 'Eu' : `+${num}`}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="input-wrapper">
            <textarea
              id="message"
              rows="2"
              className="input-field resize-none"
              placeholder=" "
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <label htmlFor="message" className="input-label">Mensagem aos Noivos</label>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#292524] text-white py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#C5A059] transition-colors duration-500 disabled:opacity-50 shadow-lg"
          >
            {status === 'submitting' ? 'Enviando...' : 'Confirmar Presença'}
          </button>
        </form>
      );
    }

    export default App;
