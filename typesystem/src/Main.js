var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Upper Bound
var A = /** @class */ (function () {
    function A() {
        this.name = "a";
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "b";
        return _this;
    }
    return B;
}(A));
var AB = /** @class */ (function () {
    function AB() {
    }
    return AB;
}());
function f(param) {
    console.log(param.name);
}
var b = new B();
var a = new A();
// const ab = new AB()
f(b); // OK
f(a); // OK
// f(ab) // Error
// mixed upper bound
var A2 = /** @class */ (function () {
    function A2() {
    }
    return A2;
}());
var B2 = /** @class */ (function (_super) {
    __extends(B2, _super);
    function B2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B2;
}(A2));
var C2 = /** @class */ (function (_super) {
    __extends(C2, _super);
    function C2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return C2;
}(B2));
var D = /** @class */ (function () {
    function D() {
    }
    return D;
}());
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return E;
}(D));
function f1(param) {
    console.log(typeof param);
}
var c2 = new C2();
var e = new E();
f1(c2);
f1(e);
console.log("----------------------");
// Union types
var Point2D = /** @class */ (function () {
    function Point2D() {
        this.x = 0.0;
        this.y = 0.0;
    }
    return Point2D;
}());
var Point3D = /** @class */ (function () {
    function Point3D() {
        this.x = 0.0;
        this.y = 0.0;
        this.z = 0.0;
    }
    return Point3D;
}());
var point2d = new Point2D();
var point3d = new Point3D();
function testPoint(point) {
    console.log(point);
    console.log(typeof point);
}
function testPoint2d(point2d) {
    console.log(point2d);
    console.log(typeof point2d);
}
function testPoint3d(point3d) {
    console.log(point3d);
    console.log(typeof point3d);
}
testPoint(point2d); // OK - union type
testPoint(point3d); // OK - union type
testPoint2d(point2d); // OK
testPoint2d(point3d); // OK - estructural check
// testPoint3d(point2d) // Error
testPoint3d(point3d); // OK
console.log("----------------------");
// Records
var alaska = new Point2D();
var eua = new Point2D();
var brazil = new Point2D();
var X = {
    "Alaska": alaska,
    "eua": alaska,
    "brazil": alaska
};
console.log(X);
console.log(X.brazil);
