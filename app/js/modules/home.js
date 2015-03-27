var home = {};

//view-model
home.vm = {};

//controller
home.controller = function () {
    dashboard.vm.greeting = "Hello";
};

m.route.mode = "hash";
//view
home.view = function (vm) {
    return m("div", [
        m("a[href='#/dashboard']", "dashboard"),
        m("br"),
        m("a[href='#/todo']", "todo")
    ]);
};