function growTree(name: string, period: number) {
  return {
    name,
    age: period,
    isAlive: true,
  }
}

type Tree = ReturnType<typeof growTree>

const tree= {
    name: 'oak',
    age: 10,
    isAlive: true,
}

type TextConditions<T> = T extends number ? Tree :
    T extends string ? { abs: string} : { error: string }


type MessageOf<T> = T extends { message: unknown } ? T["message"] : never; // type check for message property

type Message = MessageOf<{ message: "hello" }>; // "hello"
type NotMessage = MessageOf<{ error: "some error" }>; // never



///

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

let Str: Flatten<number>;
