// Code generated by 'guts'. DO NOT EDIT.

// From basicgenerics/basicgenerics.go
export interface Basic<A extends Constraint> {
    readonly Foo: A;
    readonly Bar: string;
}

// From basicgenerics/basicgenerics.go
export type Constraint = string | boolean;
