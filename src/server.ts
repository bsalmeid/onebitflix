import express from 'express';
import { sequelize } from './database';

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('Conexão com Banco de Dados Realizada com Sucesso!!!')
    });
    console.log(`Servidor Iniciado na porta: ${PORT}`);
});