export interface Home{
    id:number;
    houseNumber:number;
    houseAddress:number;
    length:number;
    members:
        [name:string,
        gender:string,
        age:number] ;  
}

export interface HomeResolved {
    home:Home;
    error?:any;
}