import { GraphQLError, Location} from "graphql";
import {Character, Episode, } from "../types.ts"


const Character ={
    episode: async(parent:Character):Promise<Episode[]> =>{
        const episodesPromises: Promise<Episode>[] = parent.episode.map(async element =>{
            const response = await fetch (element);
            if(!response){
                throw new GraphQLError(`No episode found with id ${element}`)
            }
            const data = await response.json();
            const episodio:Episode={
                id: data.id,
                name:data.name, 
                air_date:data.air_date, 
                episode:data.episode,
                characters:data.characters,
                created:data.created
            }

            return episodio;
            })
            const episodes:Episode[] = await Promise.all(episodesPromises);
            return episodes; },

        };

            export default Character;


