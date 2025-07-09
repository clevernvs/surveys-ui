import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

interface HeaderProps {
    title: string;
    actionButton?: {
        label: string;
        onClick: () => void;
        disabled?: boolean;
    };
}

const Header: React.FC<HeaderProps> = ({ title, actionButton }) => {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                {actionButton && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={actionButton.onClick}
                        disabled={actionButton.disabled}
                        sx={{ minWidth: 200 }}
                    >
                        {actionButton.label}
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header; 