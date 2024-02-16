import ImageUrlBuilder from "@sanity/image-url"
import { createClient } from "next-sanity"


// export const config = {
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
//     apiVersion: '2024-02-15',
//     useCdn: true,
// }

// export const sanityClient = createClient(config)

// export const urlFor = (source:any) => createImageBuilder(config).image(source)


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false
})
const builder = ImageUrlBuilder(sanityClient)

export const urlFor = (source:any) => {
    return builder.image(source)
}