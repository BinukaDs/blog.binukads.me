/* eslint-disable react-hooks/rules-of-hooks */
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import exp from 'constants';
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    alert: {
        marginTop: "20px",
        marginBottom: "20px",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        borderRadius: "7px"
    }
}))


const note = ({ note }: any) => {
    const { classes, cx } = useStyles();
    return ( 
        <Alert className={classes.alert} icon={<IconAlertCircle size={32} />} title="Note:" color="blue.8"    variant="outline">
            {note}
        </Alert>
     );
}
 
export default note;