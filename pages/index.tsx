import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Badge, Typography, Box, Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import CardComponent from '../components/Card.component'
import { Post } from '../models/Post.interface'

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Eduardo Lira</title>
        <meta name="description" content="Eduardo Lira | Ideias, café e tecnologias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <div>
          <Badge badgeContent={1} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="info">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="warning">
            <MailIcon />
          </Badge>
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color="success">
            <MailIcon />
          </Badge>
          <div style={{ height: '400px' }}>
            <Typography color='primary' variant='h1'>
              Eduardo Lira
            </Typography>
            <Typography color='secondary' variant='h3'>
              Developer
            </Typography>
            <Divider />
            <Typography color='warning' variant='h4'>
              NextJs Dark Mode Material UI
            </Typography>
          </div>
          <p>Ideias, Café e Tecnologias</p>
        </div>
      </Box>
      <div>
        {posts.map((post: Post, index: number) => (
          <CardComponent key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {

  const articlesDirectory = path.join('articles')

  const files = fs.readdirSync(articlesDirectory)

  const blogPosts = files.map((fileName: string) => {
    const slug = fileName.replace('.mdx', '')
    const article = fs.readFileSync(path.join('articles', slug + '.mdx'))
    const { data: metaData } = matter(article)
    return { slug, metaData }
  })

  return { props: { posts: blogPosts } };
};