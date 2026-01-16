import express from 'express';
    import cors from 'cors';
    import bodyParser from 'body-parser';
    import db from './db.js';

    const app = express();
    const PORT = 3000;

    app.use(cors());
    app.use(bodyParser.json());

    // Rota raiz para evitar o erro "Cannot GET /" se acessar a porta errada
    app.get('/', (req, res) => {
      res.send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1>O Servidor Backend está rodando! 🚀</h1>
          <p>Você acessou a porta da API (3000).</p>
          <p>Para ver o site do casamento, por favor <strong>abra a porta do Frontend (geralmente 5173)</strong>.</p>
        </div>
      `);
    });

    // Rota para salvar RSVP
    app.post('/api/rsvp', (req, res) => {
      const { name, email, attending, guestsCount, message } = req.body;

      if (!name) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
      }

      try {
        const result = db.add({
          name, 
          email: email || '', 
          attending, 
          guestsCount: attending ? (guestsCount || 0) : 0, 
          message: message || ''
        });

        res.json({ success: true, id: result.lastInsertRowid });
      } catch (error) {
        console.error('Erro ao salvar RSVP:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
      }
    });

    // Rota para listar confirmações
    app.get('/api/rsvps', (req, res) => {
      try {
        const rsvps = db.getAll();
        res.json(rsvps);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
