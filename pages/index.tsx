import type { NextPage } from 'next'
import Head from 'next/head'
import { Badge, Typography, Box, Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'


const Home: NextPage = () => {

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
    </div>
  )
}

export default Home
