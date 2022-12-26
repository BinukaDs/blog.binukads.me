
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import { Title, createStyles } from '@mantine/core';
import styles from "../styles/Home.module.css"


const useStyles = createStyles((theme) => ({

  blogTitle: {
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "20",
    color: theme.colorScheme === 'dark' ? theme.colors.red[2]: theme.colors.red[8],
    '&:hover': {
      textDecoration: "underline",
      textDecorationColor: theme.colorScheme === 'dark' ? theme.colors.red[2] : theme.colors.red[8]
    },

    
    
  },

  date: {
    color: theme.colors.blue[5]
  },

  Card: {
    position: "relative",
    marginBottom: "15px",
    borderBottom: "1px solid",
    borderColor: theme.colors.blue[5]
  },

  Middle: {
    display: "table - cell",
    verticalAlign: "middle"
  },

  Container: {
    marginLeft: "auto",
    marginRight: "auto",
    
    width: "50%",

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: "90%",
      
    }
  },

  pageTitle: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 30
    },
  }

}));

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })



  return {
    props: {
      posts
    }
  }
}





export default function Home({ posts }: any) {
  const { classes, cx } = useStyles();

  return (

    <div>
      <Head>
        <title>Home | blog.binukads.me</title>
      </Head>

      <Title
        className={classes.pageTitle}
        size={42}
        ta="center"
        mb={20}
        color="blue.5">
        Recent Articles
      </Title>

      {posts.map((post: any, index: any) => (
        
          // eslint-disable-next-line react/jsx-key
        <div className={classes.Container}>
          <div className={classes.Middle}>
            <div  className={classes.Card}>
              <Link href={'/blog/' + post.slug} passHref key={post.slug} className={classes.blogTitle} scroll={false}>
              <Title
                
                order={2}
                
              >{post.frontMatter.title}</Title></Link>
              <p >{post.frontMatter.description}</p>
              <p >
                <small className={classes.date}>
                  {post.frontMatter.date}
                </small>
              </p>
            </div></div></div>
        
      ))}

    </div>

  )
}


