1. flex overflow-x-auto.....put on parent tag, horizontly scrolling the images

# Senity

    1. Senity: npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
    2. Open now
        http://localhost:3000/studio
    3. Add schema(blue print in senity folder)
    4. Create lib folder in src...and also craete sanityClient.ts file, and import following cradintials
        i. import { createClient } from 'next-sanity'
        ii. import { apiVersion, dataset, projectId, useCdn } from '../env'
    5. Go to any file where you want to fetch data, and fetch data using GRAQ Query.
        import { client } from "@/lib/sanityClient";

    6. To fetch image url from sanity, 1st instal following
        npm install --save @sanity/image-url
        import imageUrlBuilder from '@sanity/image-url'

# Add to cart

    1. app/api/cart/route.ts
    2. npm i drizzle-orm
    3. npm i drizzle-orm @vercel/postgres


# React slick
    1. npm install react-slick --save
    