import React from 'react';
import { TextField, Box } from '@mui/material';

interface SearchFieldProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    fullWidth?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({
    value,
    onChange,
    placeholder = 'Pesquisar...',
    label = 'Pesquisar',
    fullWidth = true,
}) => {
    return (
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <TextField
                fullWidth={fullWidth}
                label={label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                variant="outlined"
                size="small"
                placeholder={placeholder}
            />
        </Box>
    );
};

export default SearchField; 