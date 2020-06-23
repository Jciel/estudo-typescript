

// Upper Bound
class A { name: String = "a" }
class B extends A { name: String = "b" }
class AB {}

function f<T extends A>(param: T) {
    console.log(param.name)
}

const b = new B()
const a = new A()
// const ab = new AB()
f(b) // OK
f(a) // OK
// f(ab) // Error



// mixed upper bound
class A2 {}
class B2 extends A2 {}
class C2 extends B2 {}
class D {}
class E extends D {}

function f1<T extends U, U extends A2>(param: A2) {
    console.log(typeof param)
}

const c2 = new C2()
const e = new E()
f1(c2)
f1(e)


console.log("----------------------")



// Union types
class Point2D {
    x: Number = 0.0
    y: Number = 0.0
}

class Point3D {
    x: Number = 0.0
    y: Number = 0.0
    z: Number = 0.0
}

type Point =
    | Point2D
    | Point3D


const point2d = new Point2D()
const point3d = new Point3D()

function testPoint(point: Point) {
    console.log(point)
    console.log(typeof point)
}

function testPoint2d(point2d: Point2D) {
    console.log(point2d)
    console.log(typeof point2d)
}

function testPoint3d(point3d: Point3D) {
    console.log(point3d)
    console.log(typeof  point3d)
}

testPoint(point2d) // OK - union type
testPoint(point3d) // OK - union type

testPoint2d(point2d) // OK
testPoint2d(point3d) // OK - estructural check

// testPoint3d(point2d) // Error
testPoint3d(point3d) // OK


console.log("----------------------")

// Records

const alaska = new Point2D()
const eua = new Point2D()
const brazil = new Point2D()

const Locals: Record<string, Point2D> = {
    "Alaska": alaska,
    "eua": eua,
    "brazil": brazil,
}

console.log(Locals)
console.log(Locals.brazil)

console.log("-------------------------")



class Human { a = "Foot" }
class Car { b = "Wheels" }

class Jhon extends Human {}
class Lamborgini extends Car {}
class Test {}

const jhon = new Jhon()
const lamborgini = new Lamborgini()
// const test = new Test()


type HumanOrCar<T> = T extends Human ? Human : Car

let test: HumanOrCar<Human> = new Jhon()
let test2: HumanOrCar<Car> = new Lamborgini()

// function getCarOrHuman<HumanOrCar>(something: HumanOrCar): HumanOrCar extends Human ? Human : Car {
//     return something
// }
//
// const t = getCarOrHuman(jhon)
// const t1 = getCarOrHuman(lamborgini)
//
// console.log(t)
// console.log(t1)












console.log("\n----------------------------------\n")











function iterate(n: number, f: (a: number) => number, x: number): number {
    if (n == 0) {
        return x
    }
    return iterate(n - 1, f, f(x))
}
const square = (x: number) => x * x

const result = iterate(1, square, 3)
console.log('result')
console.log(result)








