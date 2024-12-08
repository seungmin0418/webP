function greet(greeting) {
    return function(name) {
    console.log(greeting + ", " + name);
}
}

let hello = greet('hello');
hello('sung-dong');
hello('world');
hello('student');

let good_morning = greet('good morning')
good_morning('seungmin');