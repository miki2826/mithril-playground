var dashboard = {};

//view-model
dashboard.vm = {};

//controller
dashboard.controller = function() {
    dashboard.vm.greeting = "Hello";
};

//view
dashboard.view = function(vm) {
    return m("h1", dashboard.vm.greeting);
};