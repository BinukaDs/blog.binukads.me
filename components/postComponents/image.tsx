/* eslint-disable react-hooks/rules-of-hooks */
import { createStyles } from "@mantine/core";
import Image from "next/image";



const useStyles = createStyles((theme) => ({
    thumbnail: {
        borderRadius: 5,
        width: "90%",
        height: 'auto',
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        marginTop: "20px",
        marginBottom: "20px",
        background: "transparent no-repeat center",
        backgroundSize: "cover"
    },


}));


const image = ({ link, alter }: any) => {
    const { classes, cx } = useStyles();
    return (
        <Image src={link} width={1920} height={1080} alt={alter} className={classes.thumbnail}></Image>
    );
}


export default image;
