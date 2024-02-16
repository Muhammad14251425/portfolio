
import { sanityClient } from "@/sanity";
import { Skille } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";


const query = groq`
*[_type == "skill"]
`;
type Data = {
    skills: Skille[]
}

export default async function handler (req:NextApiRequest, res:NextApiResponse){
const skills: Skille[] = await sanityClient.fetch(query)
res.status(200).json({skills})
}