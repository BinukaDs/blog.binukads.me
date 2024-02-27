import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    user: {
        display: 'block',
        width: '100%',
        borderRadius: '5px',
        padding: theme.spacing.md,
        textDecoration: "none",
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
        },
    },

    avatar: {
        border: "1px solid",
        borderColor: theme.colors.blue[5]
    },

    text: {
        textDecoration: "none"
    }
}));

interface UserButtonProps extends UnstyledButtonProps {
    image: '../../avatar.jpg';
    name: 'Binuka Dasunpriya';
    email: 'binukadasunpriya@gmail.com';
    date: string;
    icon?: React.ReactNode;
}

export function Binukads({ image, name, email, icon ,date }: UserButtonProps) {
    const { classes } = useStyles();

    return (
        <Link href={'/about'} className={classes.text}>
        <UnstyledButton className={classes.user}>
            <Group>
                <Avatar src={image} radius="xl" className={classes.avatar} />

                <div style={{ flex: 1 }}>
                    <Text size="sm" weight={500}>
                        {name}
                    </Text>

                    <Text color="dimmed" size="xs">
                        posted on {date}
                    </Text>
                </div>

                {icon || <IconChevronRight size={14} stroke={1.5} />}
            </Group>
            </UnstyledButton>
        </Link>
    );
}