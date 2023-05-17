import {createClient} from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'zsrezprb',
    dataset: 'production',
    useCdn: true,
    token: process.env.E_COMMERCE_TOKEN,
    apiVersion: '2023-05-17'
});

const builder = imageUrlBuilder(client)

export const urlfor = (source) => {
    builder.image(source)
}
