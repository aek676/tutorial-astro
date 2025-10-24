import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: "Alumno Astro | Blog",
        description: "Mi diario de aprendizaje con Astro",
        site: context.site,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>es-es</language>`,
    })
}