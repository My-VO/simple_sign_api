class UserRouter {
    constructor({router, userController, auth}) {
        this.router = router;
        this.initializeRoutes(userController, auth);

        return this.router;
    }

    initializeRoutes(userController) {
        this.router.route('/users')
            .get(userController.getAll);

        this.router.route('/users/authenticate').post(userController.login);
    }
};

export default UserRouter;