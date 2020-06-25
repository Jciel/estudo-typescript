//
// type Maybe<T> =
//     | None<T>
//     | Some<T>
//
// class Some<T> {
//     constructor(private value: T) {}
//     getValue(): T | void { return this.value }
//     map(f: (t: T) =>  T): Maybe<T> { return new Some(f(this.value)) }
//     matchWith<U, C>(pattern: { Some: (value: T) => U, None: () => C }): Maybe<U> | Maybe<C> {
//         return new Some(pattern.Some(this.value))
//     }
// }
//
// class None<T> {
//     getValue(): T | void { return }
//     map(f: (t: T) => T):  Maybe<T> { return new None() }
//     matchWith<U, C>(pattern: { Some: (value: T) => U, None: () => C }): Maybe<U> | Maybe<C> {
//         const v = pattern.None()
//         if (typeof v === "undefined" || v === null) {
//             return new None<C>()
//         } else {
//             return new Some(v)
//         }
//     }
// }
//
//
// const aa: Maybe<string> = new Some("aa")
// const aab: Maybe<string> = new None()
//
// function testMatchWith(param: Maybe<string>) {
//     let ff = param.matchWith({
//         Some: (value: string) => {
//             console.log('Some')
//             console.log(value)
//             return 3
//         },
//
//         None: () => {
//             console.log('none')
//             return "adiciona uma string"
//         }
//     })
//
//     console.log('------aaaaaaa-------')
//
//     console.log('ff')
//     console.log(ff)
//
// }
// //testMatchWith(aa)
// testMatchWith(aab)
