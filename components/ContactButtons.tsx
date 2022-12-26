import { Button, ButtonProps, ThemeIcon, createStyles, Tooltip } from '@mantine/core';
import { IconBrandTwitter, IconBrandGithub, IconBrandLinkedin, IconWorldWww,  } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    Icons: {
        backgroundColor: 'transparent',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.red[8] : theme.colors.blue[1]
        }
    }
}));

export function TwitterButton() {
    const { classes, cx } = useStyles();
    return (
        <Tooltip
      label="Twitter"
      color="red.5"
      withArrow
    >
        <a href="https://twitter.com/Binuka_Ds" >
             
            <ThemeIcon size={48} className={classes.Icons} color="blue.5" variant="light">
                <IconBrandTwitter size={32} stroke={1.5} />
            </ThemeIcon>
            
        </a></Tooltip>
    );
}

export function LinkedinButton() {
    const { classes, cx } = useStyles();
    return (
        <Tooltip
      label="LinkedIn"
      color="red.5"
      withArrow
    >
        <a href="https://www.linkedin.com/in/binukadasunpriya/" >

            <ThemeIcon size={48} className={classes.Icons} color="blue.5" variant="light">
                <IconBrandLinkedin  size={32} stroke={1.5} />
            </ThemeIcon>

        </a></Tooltip>
    );
}

export function GithubButton() {
    const { classes, cx } = useStyles();
    return (
        <Tooltip
      label="Github"
      color="red.5"
      withArrow
    >
        <a href="https://www.github.com/binukads" >

            <ThemeIcon size={48} className={classes.Icons} color="blue.5" variant="light">
                <IconBrandGithub size={32} stroke={1.5} />
            </ThemeIcon>

        </a></Tooltip>
    );
}

export function WebsiteButton() {
    const { classes, cx } = useStyles();
    return (
        <Tooltip
      label="Personal Website"
      color="red.5"
      withArrow
    >
        <a href="https://www.binukads.me" >

            <ThemeIcon size={48} className={classes.Icons} color="blue.5" variant="light">
                <IconWorldWww  size={32} stroke={1.5} />
            </ThemeIcon>

        </a></Tooltip>
    );
}



