//
// type Maybe<T> =
//     | None<T>
//     | Some<T>
//
//
// class Some<T> {
//     constructor(private value: T) {}
//     getValue(): T | void { return this.value }
//     map(f: (t: T) =>  T): Maybe<T> { return new Some(f(this.value)) }
//     matchWith(pattern: { Some: (value: T) => T, None: () => T | void }): Maybe<T> {
//         return new Some(pattern.Some(this.value))
//     }
// }
//
// class None<T> {
//     getValue(): T | void { return }
//     map(f: (t: T) => T):  Maybe<T> { return new None() }
//     matchWith(pattern: { Some: (value: T) => T, None: () => T | void }): Maybe<T> {
//         const v = pattern.None()
//         if (typeof v === "undefined" || v === null) {
//             return new None()
//         }
//         return new Some(v)
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
//     console.log('ff')
//     console.log(ff)
//
// }
// // testMatchWith(aa)
// testMatchWith(aab)
