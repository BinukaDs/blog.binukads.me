/* eslint-disable react-hooks/rules-of-hooks */
import { ClassNames } from "@emotion/react";
import { createStyles } from "@mantine/core";
import Image from "next/image";
import classes from "../../pages/blog/[slug]"
import { Title } from "@mantine/core"
import Link from "next/link";


const useStyles = createStyles((theme) => ({
    topic: {
        paddingTop: "20px"
    }


}));

const topic = ({ text }: any) => {
    const { classes, cx } = useStyles();
    return (
        
        <Title
            fw={700}
            order={2}
            color="blue.5"
           
            className={classes.topic}>❄️ {text}</Title>
    );
}

export default topic;