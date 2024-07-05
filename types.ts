export type Character = {

    id:string;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    image: string;
    episode: Episode[];
    created:string;
}

export type Episode ={
    id: string;
name: string;
air_date: string;
episode: string;
characters: Character[];
created: string;
}
