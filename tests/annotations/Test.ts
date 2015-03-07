
class ExampleAnnotation  {
    constructor(private name: String){
    }

    public getName() {
        return this.name;
    }

}


module testmod {
@ExampleAnnotation("name1");
export class MyClass {


    static maybe : string = "maybe";

    @ExampleAnnotation("12345")
    static hello() {

    }

    @ExampleAnnotation("property")
    public property : MyClass;

    @ExampleAnnotation("constructor")
    constructor() {

    }

    @ExampleAnnotation("function1")
    public function1(arg : HTMLElement){

    }

    @ExampleAnnotation("function2")
    public function2(arg){

    }

    public function3(arg){

    }

}

    export class Extended extends MyClass {

    }
}
