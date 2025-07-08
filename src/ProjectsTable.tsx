import React, { useEffect, useState } from 'react';
import {
    Typography,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

interface Project {
    id: number;
    title: string;
    status: string;
    created_at: string;
    client: { name: string };
    language: { code: string };
    project_type: string;
    sample_size: number;
}

const ProjectsTable: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/v2/projects')
            .then((res) => {
                if (!res.ok) throw new Error('Erro ao buscar projetos');
                return res.json();
            })
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Paper elevation={2}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Nome</strong></TableCell>
                            <TableCell><strong>Cliente</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                            <TableCell><strong>Idioma</strong></TableCell>
                            <TableCell><strong>Tipo de Projeto</strong></TableCell>
                            <TableCell><strong>Tamanho da amostra</strong></TableCell>
                            <TableCell><strong>Data de Criação</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell>{project.id}</TableCell>
                                <TableCell>{project.title}</TableCell>
                                <TableCell>{project.client?.name || 'N/A'}</TableCell>
                                <TableCell>{project.status}</TableCell>
                                <TableCell>{project.language?.code || 'N/A'}</TableCell>
                                <TableCell>{project.project_type || 'N/A'}</TableCell>
                                <TableCell>{project.sample_size || 'N/A'}</TableCell>
                                <TableCell>{formatDate(project.created_at)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ProjectsTable; 