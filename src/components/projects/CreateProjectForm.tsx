import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Box,
    Paper
} from '@mui/material';
import { CreateProjectForm as CreateProjectFormType } from '../../types';
import { MESSAGES } from '../../constants/messages';
import PageContainer from '../layout/PageContainer';

interface CreateProjectFormProps {
    onSubmit: (data: CreateProjectFormType) => Promise<void>;
    onCancel: () => void;
    loading?: boolean;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
    onSubmit,
    onCancel,
    loading = false
}) => {
    const [formData, setFormData] = useState<CreateProjectFormType>({
        title: '',
        description: '',
        sample_size: 0
    });
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: keyof CreateProjectFormType) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = field === 'sample_size' ? parseInt(event.target.value) || 0 : event.target.value;
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        try {
            await onSubmit(formData);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <PageContainer maxWidth="md">
            <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Criar Novo Projeto
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            fullWidth
                            label="Título do Projeto"
                            value={formData.title}
                            onChange={handleInputChange('title')}
                            required
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            label="Descrição"
                            value={formData.description}
                            onChange={handleInputChange('description')}
                            required
                            multiline
                            rows={4}
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            label="Tamanho da Amostra"
                            type="number"
                            value={formData.sample_size}
                            onChange={handleInputChange('sample_size')}
                            required
                            variant="outlined"
                            inputProps={{ min: 1 }}
                            sx={{ maxWidth: 300 }}
                        />

                        {error && (
                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>
                        )}

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                            <Button
                                variant="outlined"
                                onClick={onCancel}
                                disabled={loading}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={loading}
                            >
                                {loading ? MESSAGES.UI.SAVING : 'Salvar'}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </PageContainer>
    );
};

export default CreateProjectForm; 