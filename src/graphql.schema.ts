
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    username: string;
    password: string;
}

export interface User {
    username?: Nullable<string>;
    password?: Nullable<string>;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getUserByUsername(username: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    addUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
