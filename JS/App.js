new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        cssClass: ""
    },
    methods: {
        changeTitle() {
            this.title = "Changed Title";
        }
    }
});
