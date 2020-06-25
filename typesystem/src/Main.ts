

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


console.log("\n----------------------------------\n")



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


console.log("\n----------------------------------\n")

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


console.log("\n----------------------------------\n")



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


console.log("\n----------------------------------\n")


// function Maybe<T>(value?: T): Maybe<T> {
//     if (typeof value === "undefined" || value === null) {
//         return new None()
//     } else {
//         return new Some(value)
//     }
// }
//
// interface Maybe<T> {
//     getValue(): T | void
//     map(f: (t: T) => X): Maybe<X>
//     // matchWith(pattern: { Some: (value: T) => B, None: () => B }): Maybe<B>
//     // matchWith(pattern: { Some: (value: T) => B, None: () => B }): Maybe<B>
// }
//
// class Some<T> implements Maybe<T> {
//     constructor(private value: T) {}
//     getValue(): T | void { return this.value }
//     map(f: (t: T) =>  Maybe<A>):  Maybe<A> { return f(this.value) }
//     // matchWith(pattern: { Some: (value: T) => B, None: () => B }) {
//     //     return Maybe(pattern.Some(this.value))
//     // }
// }
//
// class None<T> implements Maybe<T> {
//     getValue(): T | void { return }
//     map(f: (t: T) =>  Maybe<A>):  Maybe<A> { return Maybe() }
//     // matchWith(pattern: { Some: (value: T) => B, None: () => B }) {
//     //     return Maybe(pattern.None())
//     // }
// }
//
//
// const aa: Maybe<string> = Maybe("aa")
// const aab: Maybe<string> = Maybe()
//
// console.log(aa) // Some { value: "aa" }
// console.log(aa.getValue()) // aa
// console.log(aab) // None {}
//
// function procesSomeMaybe(param: Maybe<string>) {
//     if (param instanceof Some) {
//         console.log(param.getValue())
//     }
//
//     if (param instanceof None) {
//         console.log("não tem nada")
//     }
// }
//
// procesSomeMaybe(aa)
// procesSomeMaybe(aab)
//
// function testMap(param: Maybe<string>) {
//     const hh = param.map((d: string) => {
//         return Maybe<number>(5)
//     })
//
//     console.log('------hh-------')
//     console.log(hh)
// }
// testMap(aa)
// testMap(aab)
//
//
// function testMatchWith(param: Maybe<string>) {
//
//     let ff = param.matchWith({
//         Some: (value: string) => {
//             console.log('value')
//             console.log(value)
//             return value
//         },
//
//         None: (): void => {
//             console.log('none')
//             return
//         }
//     })
//
//     console.log('------aaaaaaa-------')
//
//
//     console.log('ff')
//     console.log(ff)
//
// }
// testMatchWith(aa)
// testMatchWith(aab)



// type IMaybe<T> = {
//     getValue(): T | void
//     map(f: (t: T) => T):  Maybe<T>
//     matchWith(pattern: { Some: (value: T) => T, None: () => T | void }): Maybe<T>
// }

type Maybe<T> =
    | None<T>
    | Some<T>

class Some<T> {
    constructor(private value: T) {}
    getValue(): T | void { return this.value }
    map<U>(f: (t: T) =>  U): Maybe<U> { return new Some(f(this.value)) }
    matchWith<U, C>(pattern: { Some: (value: T) => U, None: () => C }): Maybe<U> | Maybe<C> {
        return new Some(pattern.Some(this.value))
    }
}

class None<T> {
    getValue(): T | void { return }
    map<U>(f: (t: T) => U):  Maybe<U> { return new None() }
    matchWith<U, C>(pattern: { Some: (value: T) => U, None: () => C }): Maybe<U> | Maybe<C> {
        const v = pattern.None()
        if (typeof v === "undefined" || v === null) {
            return new None<C>()
        } else {
            return new Some(v)
        }
    }
}

const aa: Maybe<string> = new Some("aa")
const aab: Maybe<string> = new None()

function testMatchWith(param: Maybe<string>) {
    let ff = param.matchWith({
        Some: (value: string) => {
            console.log('Some')
            console.log(value)
            return 3
        },

        None: () => {
            console.log('none')
            return "adiciona uma string"
        }
    })

    console.log('------aaaaaaa-------')

    console.log('ff')
    console.log(ff)

}
//testMatchWith(aa)
testMatchWith(aab)

const m: Maybe<string> = new Some("Maybe ")

m.map(v => v.trim()).map(v => v.toUpperCase())


console.log("\n----------------------------------\n")



type CardType =
      "Visa"
    | "MasterCard"

type Currency =
      "BRL"
    | "USD"

type CredCardInfo = {
    cardType: CardType
    number: number
}

type PaymentMethod =
      "Cash"
    | "Paypal"
    | "Card"

type Payment = {
    currency: Currency
    method: PaymentMethod
    cardInfo: CredCardInfo
}



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








