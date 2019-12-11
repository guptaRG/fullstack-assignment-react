import User from "./models/user"
import { Dispatch } from "redux"
import ToDo from "./models/to_do"
import Bucket from "./models/bucket"

export interface Theme {
    button: {
        variant: 
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'dark'
        | 'light'
        | 'link'
        | 'outline-primary'
        | 'outline-secondary'
        | 'outline-success'
        | 'outline-danger'
        | 'outline-warning'
        | 'outline-info'
        | 'outline-dark'
        | 'outline-light',
        size?: 'sm' | 'lg'
    },
    header: {
        bg: string
    }
}

export interface BucketState {
    buckets: Array<Bucket>
}

export interface ActionDispatch {
    (dispatch:Dispatch): void
}

export interface RequestHeader {
    'Content-type'?: string,
    'Authorization'?: string,
    'Accept'?: string
}

export interface ToDoState {
    toDos: Array<ToDo>
}

export interface AuthenticationState {
    loggedIn?: Boolean,
    loggingIn?: Boolean,
    user?: User,
}

export interface Alert {
    type?: String,
    message?: String
}

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface RootState {
    authentication: AuthenticationState,
    alert: Alert,
    toDoReducer: ToDoState
}

export type AuthenticationAction = {
    type: string,
    user?: User,
    error?: string
}

export type ToDoAction = {
    type: string,
    error?: string,
    toDos: Array<ToDo>
}

export type BucketAction = {
    type: string,
    error?: string,
    buckets: Array<Bucket>
}

export type AlertAction = {
    message?: string,
    type: string
}

export type LoginProps = {
    theme: Theme,
    login:Function,
    logout: Function,
    loggingIn?: Boolean
}

export type LoginState = {
    username: string,
    password: string,
    submitted: boolean
}

export type AppProps = {
    theme: Theme,
    clearAlerts: Function,
    alert: Alert
}

export type HomeProps = {
    theme: Theme,
    toDos: Array<ToDo>,
    getToDos: Function
}

export type HomeState = {
    toDoOpen: boolean,
    bucketOpen: boolean
}

export type ClickableCardProps = {
    theme: Theme,
    title: String,
    toggleCard: () => void,
    open: boolean,
    items: Array<any>
}

export type HTTP_METHOD =
    "get" |
    "GET" |
    "delete" |
    "DELETE" |
    "head" |
    "HEAD" |
    "options" |
    "OPTIONS" |
    "post" |
    "POST" |
    "put" |
    "PUT" |
    "patch" |
    "PATCH" |
    undefined
