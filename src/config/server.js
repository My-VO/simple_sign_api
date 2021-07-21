class Server {
    constructor({express, routes}) {
        this.app = express();
        this.initializeBodyParsing(express);
    }

    initializeBodyParsing(express) {
        this.app.use(express.urlencoded({ extended: false}));
        this.app.use(express.json());
    }

    listen(port) {
        this.app.listen(port, () => console.log(`Application started on port: ${port}`))
    }
}

export default Server;