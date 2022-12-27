import { createStyles, Anchor, Group, ActionIcon, ThemeIcon, Title, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandGithub } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
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

  icons: {
    marginRight: 5,
    backgroundColor: 'transparent',
    color: theme.colors.blue[5],
    

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.red[8] : theme.colors.red[1],
    }
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
      
    },

    color: theme.colorScheme === 'dark' ? theme.colors.red[1] : theme.colors.red[8],
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    lineheight: 1,

    '&:hover': {
     
      textDecoration: 'Underline',
      textDecorationColor: theme.colorScheme === 'dark' ? theme.colors.red[1] : theme.colors.red[8],
    },

    

    
  },

  footerLink: {
    color: theme.colors.blue[5],
   

    '&:hover': {
      color: theme.colors.blue[6]
    }
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

export function Footer() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.links}
      passHref
      scroll={false}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        

        <Group spacing={15}>{items}</Group>

        <Text
          fw={700}
          color="blue.5"
        > &copy; 2022 blog.binukads.me</Text>
        <Text
          fw={700}
          color="blue.5">
          made with ❤️ by <a href="https://www.binukads.me" className={classes.footerLink}>BinukaDs</a>. 
          </Text>

        <Group spacing={0} position="right" noWrap>
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
      </div>
    </div>
  );
}

export default Footer;