// Code generated by 'gots'. DO NOT EDIT.

type Comparable = string | number | boolean;

// From genericstruct/genericstruct.go
interface Baz<S extends Foo<string, string>, I extends Comparable, X extends Foo<I, I>> {
    A: S;
    B: X;
    C: I;
}

// From genericstruct/genericstruct.go
interface Foo<A extends Comparable, B extends any> {
    FA: A;
    FB: B;
}