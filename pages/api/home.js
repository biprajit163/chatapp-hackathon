
import socketio from 'socket.io';


export default (req, res) => {
    res.status(200).json({
        status: "ok",
        marco: "polo"
    });
}

