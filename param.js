function changeName(obj) {
    obj.name = 'colder';
}

let ksd = {name: 'ksd'};
console.log(ksd);
changeName(ksd);
console.log(ksd);