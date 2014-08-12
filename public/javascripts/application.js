var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.world = function () {
        alert('Hello, World!');
    };
    return Hello;
})();

var hello = new Hello();
hello.world();
