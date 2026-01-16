import fs from 'fs';
    import path from 'path';

    // Usando um arquivo JSON simples para persistência neste ambiente
    const DB_FILE = 'rsvps.json';

    // Inicializa o arquivo se não existir
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify([]));
    }

    export default {
      add: (rsvp) => {
        const data = JSON.parse(fs.readFileSync(DB_FILE));
        const newRsvp = { 
          id: Date.now(), 
          ...rsvp, 
          created_at: new Date().toISOString() 
        };
        data.push(newRsvp);
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
        return { lastInsertRowid: newRsvp.id };
      },
      getAll: () => {
        if (!fs.existsSync(DB_FILE)) return [];
        return JSON.parse(fs.readFileSync(DB_FILE));
      }
    };
