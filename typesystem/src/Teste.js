var Some = /** @class */ (function () {
    function Some(value) {
        this.value = value;
    }
    Some.prototype.getValue = function () { return this.value; };
    Some.prototype.map = function (f) { return new Some(f(this.value)); };
    Some.prototype.matchWith = function (pattern) {
        return new Some(pattern.Some(this.value));
    };
    return Some;
}());
var None = /** @class */ (function () {
    function None() {
    }
    None.prototype.getValue = function () { return; };
    None.prototype.map = function (f) { return new None(); };
    None.prototype.matchWith = function (pattern) {
        var v = pattern.None();
        if (typeof v === "undefined" || v === null) {
            return new None();
        }
        else {
            return new Some(v);
        }
    };
    return None;
}());
var aa = new Some("aa");
var aab = new None();
function testMatchWith(param) {
    var ff = param.matchWith({
        Some: function (value) {
            console.log('Some');
            console.log(value);
            return 3;
        },
        None: function () {
            console.log('none');
            return "none string";
        }
    });
    console.log('------aaaaaaa-------');
    console.log('ff');
    console.log(ff);
}
//testMatchWith(aa)
testMatchWith(aab);
