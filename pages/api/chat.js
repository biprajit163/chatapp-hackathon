
import socketio from 'socket.io';


const ioHandler = (req, res) => {
    
    if(!res.socket.server.io) {
        console.log("First use, starting socket.io");

        // create the websocket server
        const io = new socketio.Server(res.socket.server);

        io.on("connection", (socket) => {
            // when message is submitted, broadcast it.

            socket.on("message-submitted", (msg) => {
                socket.emit("message", msg);
                socket.broadcast.emit("message", msg);
            });
        });

        res.socket.server.io = io;
    } else {
        console.log("Server already started")
    }

    res.end();
}

export default ioHandler;
