import { Global } from '@mantine/core';
import bold from './GreycliffCF-Bold.woff2';
import heavy from './GreycliffCF-Heavy.woff2';

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Segoe Ui',
                        src: `url('${bold}') format("woff2")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                
            ]}
        />
    );
}