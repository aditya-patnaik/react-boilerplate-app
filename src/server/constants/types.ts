const TYPES = {
    UserService: Symbol.for('UserService'),
    AuthMiddleware: Symbol.for('AuthMiddleware'),
    UserController: Symbol.for('UserController'),
    DBClient: Symbol.for('DBClient'),
    DBClientProvider: Symbol.for('DBClientProvider'),

    // Delete these
    AppService: Symbol.for('AppService'),
    AppController: Symbol.for('AppController'),
};

export default TYPES;