var arr = [
    {
        name:'tom',
        age:20
    },
    {
        name:'tifany',
        age:25
    },
    {
        name:'lisa',
        age: 30
    }
];

function find(age) {
    var ret;
    this.some(function (item) {
        if (item.age === Number(age)){
            ret = item;
            return true;
        }
    });
    return ret;
}


console.log(find.call(arr,25));