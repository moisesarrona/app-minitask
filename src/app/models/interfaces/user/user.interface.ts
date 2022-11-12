export interface UserI {
    id: number,
    name: string,
    lastname : string,
    birthday: string,
    username: string,
    description?: string,
    phone?: string,
    email: string,
    password: string,
    status: boolean,
    created_at?: Date,
    updated_at?: Date,
}