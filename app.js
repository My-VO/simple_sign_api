import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';


const application = new Server({express});

application.listen(config.app_port);