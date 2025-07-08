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
    TableRow,
    TextField,
    Box
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
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Função para filtrar projetos
    const filterProjects = (projects: Project[], search: string) => {
        if (!search.trim()) return projects;

        const searchLower = search.toLowerCase();
        return projects.filter(project =>
            project.title.toLowerCase().includes(searchLower) ||
            project.client?.name.toLowerCase().includes(searchLower) ||
            project.status.toLowerCase().includes(searchLower) ||
            project.language?.code.toLowerCase().includes(searchLower) ||
            project.project_type.toLowerCase().includes(searchLower)
        );
    };

    // Atualizar projetos filtrados quando projetos ou termo de pesquisa mudar
    useEffect(() => {
        setFilteredProjects(filterProjects(projects, searchTerm));
    }, [projects, searchTerm]);

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
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <TextField
                    fullWidth
                    label="Pesquisar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    variant="outlined"
                    size="small"
                    placeholder="Digite para pesquisar por título, cliente, status, idioma ou tipo..."
                />
            </Box>
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
                        {filteredProjects.map((project) => (
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
            {filteredProjects.length === 0 && searchTerm && (
                <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Typography color="text.secondary">
                        Nenhum projeto encontrado para "{searchTerm}"
                    </Typography>
                </Box>
            )}
        </Paper>
    );
};

export default ProjectsTable; 