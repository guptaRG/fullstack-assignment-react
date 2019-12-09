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

export interface RequestHeader {
    'Content-type'?: string,
    'Authorization'?: string,
    'Accept'?: string
}

export type AuthenticationAction = {
    type: string,
    user?: User
}

export type AlertAction = {
    message?: string,
    type: string
}

export type User = {
    id: Number,
    token: string,
    first_name?: string,
    last_name?: string,
    username?: string,
    email?: string
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
    alert: Alert
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
}

export type HomeState = {
    toDoOpen: boolean,
    bucketOpen: boolean
}

export type ClickableCardProps = {
    theme: Theme,
    title: String,
    toggleCard: () => void,
    open: boolean
}
