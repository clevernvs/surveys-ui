import React from 'react';
import { Container, Box } from '@mui/material';

interface PageContainerProps {
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    sx?: any;
}

const PageContainer: React.FC<PageContainerProps> = ({
    children,
    maxWidth = 'lg',
    sx = {}
}) => {
    return (
        <Container maxWidth={maxWidth} sx={{ mt: 4, mb: 4, ...sx }}>
            <Box sx={{ minHeight: 'calc(100vh - 200px)' }}>
                {children}
            </Box>
        </Container>
    );
};

export default PageContainer; 