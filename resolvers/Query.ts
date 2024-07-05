import { GraphQLError} from "graphql";
import { Character } from "../types.ts";

const Query ={
    character:async(_:unknown, args:{id:string}): Promise<Character> =>{

        try{
            const{id} =args;
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
            if (!response) throw new GraphQLError("user not found");
            const data = response.json();
            return data;
        }
        catch (e){
            throw new GraphQLError(e.message);
        }
    },

    charactersByIds:async(_:unknown, args:{ids:string[]}): Promise<Character[]> =>{

        try{
            const id = args.ids.join();
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
            if (!response) throw new GraphQLError("user not found");
            const data = response.json();
            return data;
        }
        catch (e){
            throw new GraphQLError(e.message);
        }
    }
}

    export default Query;












