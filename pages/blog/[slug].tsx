import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Prism } from '@mantine/prism';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Button from '../../components/Button'
import { title } from 'process'
import { createStyles, Title, Code, Text } from '@mantine/core'
import Image from 'next/image'
import image from '../../components/postComponents/image'
import topic from '../../components/postComponents/topic'
import note from '../../components/postComponents/note'
import kbd from '../../components/postComponents/kbd'
import { Binukads } from '../../components/profiles/Binuka_Dasunpriya'
import Head from 'next/head'



const useStyles = createStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginBottom: '20',

    },

    Container: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: '50px',
        width: "50%",

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: "90%",

        }
    },

    Middle: {
        display: "table - cell",
        verticalAlign: "middle"
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    main: {
        textAlign: 'center'
    },

    remote: {
        textAlign: 'center'
    },

    date: {
        color: theme.colors.blue[5],
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '20px'
    },

    thumbnail: {
        width: "100%",
        height: 'auto',
        borderRadius: 7,
        marginTop: "20px",
        marginBottom: "20px",
        backgroundSize: "cover",
        background: "transparent no-repeat center"
    },

    mdx: {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
    }
}));



export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }: any) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

const PostPage = ({ frontMatter: { title, date, author, thumbnail }, mdxSource }: any) => {
    const { classes, cx } = useStyles();
    return (

        <div className={classes.Container}>
            <Head>
                <link rel="icon" href="../../public/favicon.ico" />
                <link rel="apple-touch-icon" href="../../public/favicon.ico" />
                <title>{title} | blog.binukads.me</title>
            </Head>
            <div className="mt-4">
                <Title
                    className={classes.title}
                    color='blue.5'
                    fw={700}>
                    {title}</Title>
                <Image className={classes.thumbnail} width="1920" height="1080" src={thumbnail} alt="thumbnail"></Image>

                <Binukads image={'../../avatar.jpg'} name={'Binuka Dasunpriya'} email={'binukadasunpriya@gmail.com'} date={date}></Binukads>


                <div className={classes.Middle}>
                    <Text className={classes.mdx}>
                        <MDXRemote {...mdxSource} components={{ Button, Prism, image, topic, Code, note, kbd }} className={classes.inner} /></Text>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
