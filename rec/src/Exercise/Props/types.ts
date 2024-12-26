type Info = {
    name: string;
    age: number;
    role: string;
    userid: string;
    lastLogin: Date;

}
type Admin = Info & {
    password: string;

}
export {type Info,type Admin} 