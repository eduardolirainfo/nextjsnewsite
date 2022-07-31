import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '../models/Post.interface'
import { Badge, Typography, Box, Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import CardComponent from '../components/Card.component'

const Blog: NextPage = ({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                {posts.map((post: Post, index: number) => (
                    <CardComponent key={index} post={post} />
                ))}
            </div>
        </>
    )
}

export default Blog


export const getStaticProps: GetStaticProps = async () => {
    const articlesDirectory = path.join('articles');

    const files = fs.readdirSync(articlesDirectory);

    const blogPosts: Post[] = files.map((fileName: string) => {
        const slug = fileName.replace('.mdx', '');
        const article = fs.readFileSync(path.join('articles', fileName));
        const { data: metaData } = matter(article);
        return { slug, metaData } as Post;
    });

    return {
        props: {
            posts: blogPosts.sort(
                (a: Post, b: Post) =>
                    new Date(b.metaData.dateString).valueOf() -
                    new Date(a.metaData.dateString).valueOf()
            ),
        },
    }
}