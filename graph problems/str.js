var g = () => {
    var m = ['heelp', this.name, 'w', this.location].join(' ');
    console.log(m);
}
var p = {name : 'a', location: 'b'};
g.call(this.p);