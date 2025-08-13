import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.router.js';
import path from 'path'
import { msgManager } from './managers/messages.manager.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', express.static(path.join(process.cwd(), "src", "public")));

app.engine('handlebars', handlebars.engine()); 
app.set('view engine', 'handlebars');  
app.set('views', path.join(process.cwd(), "src", "views"));  

app.use('/chat', viewsRouter);

const httpServer = app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});

const socketServer = new Server(httpServer);

socketServer.on('connection', async(socket)=>{
    console.log('nueva conexion', socket.id);
    socketServer.emit('messages', await msgManager.getAll())   //se emite a todos los clientes
    
    socket.on('disconnect', ()=>{
        console.log('usuario desconectado', socket.id);
    })

    socket.on('newUser', (user)=>{
        console.log(`${user} ha ingresado al chat`)
    })

    socket.on('chat:message', async (msg)=>{
        await msgManager.create(msg);
        socketServer.emit('messages', await msgManager.getAll())
    })

    socket.on('newUser', (user)=>{
        socket.broadcast.emit('newUser', user)
    })

    socket.on('chat:typing', (data)=>{
        socket.broadcast.emit('chat:typing', data)
    })
})