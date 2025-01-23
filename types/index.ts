export declare type Nillable<T> = T | null | undefined;

export declare type Nullable<T> = T | null;

export declare type Optional<T> = T | undefined;

export declare type ClassValue = Nillable<ClassValue[] | Record<string, Nillable<boolean>> | string>;
