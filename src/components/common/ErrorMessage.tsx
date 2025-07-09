import React from 'react';
import { Alert, Box, Button } from '@mui/material';

interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
    severity?: 'error' | 'warning' | 'info';
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    message,
    onRetry,
    severity = 'error'
}) => {
    return (
        <Box sx={{ p: 2 }}>
            <Alert
                severity={severity}
                action={
                    onRetry && (
                        <Button color="inherit" size="small" onClick={onRetry}>
                            Tentar Novamente
                        </Button>
                    )
                }
            >
                {message}
            </Alert>
        </Box>
    );
};

export default ErrorMessage; 