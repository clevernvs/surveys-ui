import React, { useEffect, useState } from 'react';
import {
  Container,
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
  language: { value: string };
  project_type: string;
  sample_size: number;
}

function App() {
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

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Projetos
      </Typography>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && !error && (
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
                    <TableCell>{project.language?.value || 'N/A'}</TableCell>
                    <TableCell>{project.project_type || 'N/A'}</TableCell>
                    <TableCell>{project.sample_size || 'N/A'}</TableCell>
                    <TableCell>{formatDate(project.created_at)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Container>
  );
}

export default App;
