export interface ContentI {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    button: ButtonI,
    items: ItemsI[]
}

export interface ButtonI {
    status: boolean,
    text: string,
    link?: string
}

export interface ItemsI {
    title: string,
    description?: string,
    icon?: string
}