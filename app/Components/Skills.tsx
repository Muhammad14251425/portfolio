
import { groq } from "next-sanity";
import SkillsComponent from "./SkillsComponent";
import { sanityClient } from "@/sanity";
import { log } from "console";
import { revalidatePath } from "next/cache";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";


const query = groq`
*[_type == "skill"]
`;
export const dynamic = 'force-dynamic';
const Skills = async  () => {

  const data = await sanityClient.fetch(query,{
    ca
  })
  // const val = 
  
  return (
   <div>
    <h1></h1>
    <SkillsComponent skills={data}/>
   </div>
  )
}

export default Skills

