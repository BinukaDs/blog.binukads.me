import *  as  data from '../pages/blog/featured.json'
import { Text, Title, Center } from '@mantine/core';
import fsPromises from 'fs/promises';
import path from 'path'

// interface Placeholder {
//     data: {
//         name: string;
//         id: string;
//     }[];
// }

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'featured.json');
    const jsonData = await fsPromises.readFile('../pages/blog/featured.json');
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}


export default function Featured(props) {

    const names = props.data
    return (
        <div>
            <Title>Featured</Title>
            <h3>{names.name}</h3>
        </div>
    );
}

