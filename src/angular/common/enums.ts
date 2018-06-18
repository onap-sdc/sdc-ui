/*
This file includes all common enum types.

NOTE: The string values might be used as css class names.
*/

export enum Size {
    x_large = 'x_large',
    large = 'large',
    medium = 'medium',
    small = 'small',
    x_small = 'x_small'
}

export enum BackgroundShape {
    circle = 'circle',
    rectangle = 'rectangle'
}

export enum BackgroundColor {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    error = 'error',
    warning = 'warning',
    info = 'info'
}

// TODO: Replace this with type
export enum Mode {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    error = 'error',
    warning = 'warning',
    info = 'info'
}

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    error = 'error',
    warning = 'warning',
    info = 'info'
}

export enum Placement {
    left = 'left',
    right = 'right',
    top = 'top',
    bottom = 'bottom'
}

export enum RegexPatterns {
    email = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    numbers = '^\\d+$'
}
