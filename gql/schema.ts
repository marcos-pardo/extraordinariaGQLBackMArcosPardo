export const typeDefs = `#graphql

type Character {
id:ID!
name:String
status:String
species:String
type:String
gender:String
image: String
episode: [Episode!]!
created:String
}


type Episode {
id: String
name: String
air_date: String
episode: String
characters: [Character!]!
created: String
}

type Query{
    character(id: ID!): Character 
    charactersByIds(ids: [ID!]!): [Character] 
}



`