import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper
} from '@mui/material';

interface CreateProjectForm {
    title: string;
    description: string;
    sample_size: number;
}

interface CreateProjectProps {
    onBack?: () => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ onBack }) => {
    const [formData, setFormData] = useState<CreateProjectForm>({
        title: '',
        description: '',
        sample_size: 0
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (field: keyof CreateProjectForm) => (
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
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/v2/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar projeto');
            }

            // Projeto criado com sucesso
            alert('Projeto criado com sucesso!');
            // Voltar para a lista de projetos
            if (onBack) {
                onBack();
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        // Voltar para a lista de projetos
        if (onBack) {
            onBack();
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
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
                                onClick={handleCancel}
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
                                {loading ? 'Salvando...' : 'Salvar'}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default CreateProject; 