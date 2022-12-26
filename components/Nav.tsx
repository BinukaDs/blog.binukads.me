import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, Collapse, Title, ThemeIcon, Image, useMantineColorScheme } from '@mantine/core';
import { IconBrandTwitter, IconBrandGithub, IconSun, IconMoonStars } from '@tabler/icons';
import Link from 'next/link';
import { useToggle } from '@mantine/hooks';


const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,

        
    },

    Title: {
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: theme.fontSizes.lg,
        }
    },

    links: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },

        
    },

    social: {
        width: 260,

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 10,
            display: "none"
        },
    },

    burger: {
        marginRight: theme.spacing.md,
        Color: theme.colors.blue[5],

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.red[1] : theme.colors.red[8],
        fontSize: theme.fontSizes.sm,
        fontWeight: 700,

        '&:hover': {
            // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[0],
            textDecoration: 'Underline',
            textDecorationColor: theme.colors.blue[5]
        },

        
    },

    icons: {
        marginRight: 5,
        backgroundColor: 'transparent',
        color: theme.colors.blue[5],

        

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.red[8] : theme.colors.red[1],
        },

        
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.red[8] : theme.colors.red[1],
            color: theme.colorScheme === 'dark' ? theme.colors.red[1] : theme.colors.red[8],
        },
    },

    themeiconmobile: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    themeicon: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    

    collapse: {
        position: "absolute",
        top: 80,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
        textAlign: "center",
        backgroundColor: theme.colorScheme === 'dark' ? "#1a1b1e" : "#ffffff",
        
      
    },

    mobileSocial: {
       marginLeft: 2
    }
}));


const links = [
    {
        link: "/",
        label: "Home",
    },
    {
        link: "/about",
        label: "About",

    },
];



export function Nav() {
    const [opened, toggleOpened] = useToggle();
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';


    const items = links.map((link) => (
        <Link href={link.link} key={link.label} passHref scroll={false}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={() => setActive(link.link)}

        >
            {link.label}
        </Link>
    ));

    return (
        <Header height={56} mb={50} mt={20}>
            <Container className={classes.inner}>
                <Burger color="#339af0" opened={opened} onClick={() => toggleOpened()} size="sm" className={classes.burger} />
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>

                <ActionIcon
                    className={classes.themeicon}
                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>

                

                <Title
                    order={2}
                    fw={700}
                    color="blue.5"
                    className={classes.Title}>blog.binukads.me ❄️</Title>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <a href="https://twitter.com/Binuka_Ds" >
                        <ThemeIcon className={classes.icons} size="lg" color="red.6" variant="light">
                            <IconBrandTwitter size={18} stroke={1.5} />
                        </ThemeIcon>
                    </a>
                    <a href="https://github.com/binukads" >
                        <ThemeIcon className={classes.icons} size="lg" color="red.6" variant="light">
                            <IconBrandGithub size={18} stroke={1.5} />
                        </ThemeIcon>
                    </a>
                </Group>

                <ActionIcon
                    className={classes.themeiconmobile}
                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>

                <div className={classes.collapse}>
                <Collapse
                    in={opened}
                    className={classes.collapseItems}
                    transitionDuration={300}
                    transitionTimingFunction="linear"
                >
                        {items}
                        <Group spacing={0} className={classes.mobileSocial} position="center" noWrap>
                            <a href="https://twitter.com/Binuka_Ds" >
                                <ThemeIcon className={classes.icons} size="lg" color="red.6" variant="light">
                                    <IconBrandTwitter size={18} stroke={1.5} />
                                </ThemeIcon>
                            </a>
                            <a href="https://github.com/binukads" >
                                <ThemeIcon className={classes.icons} size="lg" color="red.6" variant="light">
                                    <IconBrandGithub size={18} stroke={1.5} />
                                </ThemeIcon>
                            </a>
                        </Group>
                    
                    </Collapse></div>
            </Container>
        </Header>
    );
}

export default Nav;