// Code generated by 'gots'. DO NOT EDIT.

// From nullable/nullable.go
interface EmptyFields {
    // empty interface{} type, falling back to unknown
    empty: unknown;
}

// From nullable/nullable.go
interface NullableFields {
    omitEmpty?: string;
    nullable: string | null;
    nullableOmitEmpty?: string | null;
}