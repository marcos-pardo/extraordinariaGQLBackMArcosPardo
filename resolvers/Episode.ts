import { GraphQLError} from "graphql";
import {Character, Episode } from "../types.ts"
import { parseConstValue } from "graphql";

const Episode ={
    characters: async(parent:Episode):Promise<Character[]> =>{
        const ch: Promise<Character>[] = parent.characters.map(async element =>{
            const response = await fetch (element);
            if(!response){
                throw new GraphQLError(`No episode found with id ${element}`)
            }
            const data = await response.json();
            const episode={
                id:data.id,
                name:data.name,
                status:data.status,
                species:data.species,
                type:data.type,
                gender:data.gender,
                location: data.location,
                image: data.image,
                episode: data.episode,
                created:data.created,
            }

            return episode;
            })
            const characters = await Promise.all(ch);
            return characters; }};

            export default Episode;