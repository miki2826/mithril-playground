var app = {};

app.controller = function () {
    //this.dashboard = new dashboard.controller();
    //this.todo = new todo.controller();
};

app.view = function (ctrl) {
    //return [
    //    dashboard.view(ctrl.dashboard),
    //    todo.view(ctrl.todo)
    //]
};

m.route.mode = "hash";
m.route(document.body, "/", {
    "/": home,
    "/dashboard": dashboard,
    "/todo": todo
});

//initialize the application
m.module(document, {controller: app.controller, view: app.view});