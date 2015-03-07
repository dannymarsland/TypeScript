Function.prototype.getAnnotations = Function.prototype.getAnnotations || function () {return this.__annotations || []; }
Function.prototype.getParameters = Function.prototype.getParameters || function () {return this.__parameters || []; }
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ExampleAnnotation = (function () {
    function ExampleAnnotation(name) {
        this.name = name;
    }
    ExampleAnnotation.prototype.getName = function () {
        return this.name;
    };
    ExampleAnnotation.prototype.__propertyAnnotations = [];
    ExampleAnnotation.prototype.__staticPropertyAnnotations = [];
    return ExampleAnnotation;
})();
var testmod;
(function (testmod) {
    var MyClass = (function () {
        function MyClass() {
        }
        MyClass.constructor.__annotations = [];
        MyClass.constructor.__annotations.push(new ExampleAnnotation("constructor"));
        MyClass.hello = function () {
        };
        MyClass.hello.__annotations = [];
        MyClass.hello.__annotations.push(new ExampleAnnotation("12345"));
        MyClass.prototype.function1 = function (arg) {
        };
        MyClass.prototype.function1.__parameters = [];
        MyClass.prototype.function1.__parameters.push( function(){ return typeof HTMLElement != 'undefined' ? HTMLElement : undefined });
        MyClass.prototype.function1.__annotations = [];
        MyClass.prototype.function1.__annotations.push(new ExampleAnnotation("function1"));
        MyClass.prototype.function2 = function (arg) {
        };
        MyClass.prototype.function2.__parameters = [];
        MyClass.prototype.function2.__parameters.push( function(){ return undefined });
        MyClass.prototype.function2.__annotations = [];
        MyClass.prototype.function2.__annotations.push(new ExampleAnnotation("function2"));
        MyClass.prototype.function3 = function (arg) {
        };
        MyClass.maybe = "maybe";
        MyClass.prototype.__propertyAnnotations = [];
        MyClass.prototype.__staticPropertyAnnotations = [];
        MyClass.prototype.__propertyAnnotations.property = [];
        MyClass.prototype.__propertyAnnotations.property.push(new ExampleAnnotation("property"));
        MyClass.prototype.__annotations = [];
        MyClass.prototype.__annotations.push(new ExampleAnnotation("name1"));
        return MyClass;
    })();
    testmod.MyClass = MyClass;
    var Extended = (function (_super) {
        __extends(Extended, _super);
        function Extended() {
            _super.apply(this, arguments);
        }
        Extended.prototype.__propertyAnnotations = [];
        Extended.prototype.__staticPropertyAnnotations = [];
        return Extended;
    })(MyClass);
    testmod.Extended = Extended;
})(testmod || (testmod = {}));
