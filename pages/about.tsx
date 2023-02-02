import { Text, Title, Center, createStyles, Grid, ThemeIcon } from '@mantine/core';
import { TwitterButton, LinkedinButton, GithubButton, WebsiteButton } from '../components/ContactButtons';
import Image from 'next/image';
import Head from 'next/head';
import profile from '../public/avatar.jpg'

const useStyles = createStyles((theme) => ({

    Title: {
        borderBottom: "1px solid",
        borderColor: "blue.5"
    },

    Inner: {
        position: "relative",
        
    },

    Middle: {
        display: "table - cell",
        verticalAlign: "middle"
    },

    Container: {
        marginLeft: "auto",
        marginRight: "auto",
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9],
        width: "50%",

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: "90%",

        }
    },

    Image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        borderRadius: '10px'
    },

    Special: {
        color: theme.colors.blue[5],
        fontWeight: 700
    }

}));

const About = () => {
    const { classes, cx } = useStyles();
    return (
        <div className={classes.Container}>
            <Head>
                <title>About | blog.binukads.me</title>
            </Head>
            <div className={classes.Middle}>
                <div className={classes.Inner}>
                    <Title
                        order={1}
                        color='blue.5'
                        className={classes.Title}
                    >About👋</Title>
                    <Image
                        className={classes.Image}
                        src={profile}
                        width={110}
                        height={110}
                        alt="profile" />

                    <p>Hi!, I am <span className={classes.Special}>Binuka Dasunpriya</span>, A <span className={classes.Special}>16</span> years old <span className={classes.Special}>Sri Lankan</span> web developer. and also I am the developer, writer & owner of this blog. If you want to contact me, please use the links down below. 👇🙂</p>

                    <Center mt={30}>
                    <WebsiteButton></WebsiteButton>
                    <TwitterButton></TwitterButton>
                    <LinkedinButton></LinkedinButton>
                    <GithubButton></GithubButton>
                    </Center>
                        
                </div>
            </div>
        </div>
    );
}

export default About;