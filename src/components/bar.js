@log //es7语法，装饰器
class Bar{
    a = 1; //es7语法，等同于constructor里的this.a = a;
    say() {
        console.log('I am Bar');
    }
}
function log(target){
    console.log(target)
}

export default Bar;