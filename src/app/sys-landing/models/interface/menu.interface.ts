export interface MenuI {
    id?: number,
    icon?: string,
    name?: string,
    description?: string,
    url?: string,
    active?: boolean,
    child?: MenuI[]
}