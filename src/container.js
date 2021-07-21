import { createContainer, asClass, asValue } from 'awilix';
import express from 'express';
import Server from './config/server';
import config from './config/env';

const container = createContainer();

container.register({
    config: asValue(config),
    express: asValue(express),
})

container.register({
    server: asClass(Server).singleton()
});

export default container;