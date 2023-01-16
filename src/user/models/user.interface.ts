
export interface User{
    id?:  number;
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;

}

export enum UserRole {
    ADMIN = 'admin',
    CHIEHEDITOR = 'chiefeditor',
    EDITOR = 'editor',
    USER = 'user'
}