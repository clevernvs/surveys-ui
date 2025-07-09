import React, { useState, useEffect } from 'react';
import {
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box
} from '@mui/material';
import { Project } from '../../types';
import { useProjects } from '../../hooks/useProjects';
import { filterProjects } from '../../utils/searchUtils';
import { formatDate } from '../../utils/dateUtils';
import { MESSAGES } from '../../constants/messages';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import SearchField from '../forms/SearchField';

const ProjectsTable: React.FC = () => {
    const { projects, loading, error, fetchProjects } = useProjects();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    // Atualizar projetos filtrados quando projetos ou termo de pesquisa mudar
    useEffect(() => {
        setFilteredProjects(filterProjects(projects, searchTerm));
    }, [projects, searchTerm]);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} onRetry={fetchProjects} />;

    return (
        <Paper elevation={2}>
            <SearchField
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder={MESSAGES.UI.SEARCH_PLACEHOLDER}
                label="Pesquisar projetos..."
            />
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
                        {MESSAGES.UI.NO_PROJECTS_FOUND} "{searchTerm}"
                    </Typography>
                </Box>
            )}
        </Paper>
    );
};

export default ProjectsTable; 