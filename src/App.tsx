import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress, Paper } from '@mui/material';

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  client: { name: string };
  // Adicione outros campos relevantes se desejar
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/projects')
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

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Projetos
      </Typography>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && !error && (
        <Paper elevation={2}>
          <List>
            {projects.map((project) => (
              <ListItem key={project.id} divider>
                <ListItemText
                  primary={project.title}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        Cliente: {project.client?.name || 'N/A'}
                      </Typography>
                      <br />
                      {project.description}
                      <br />
                      <Typography component="span" variant="caption" color="text.secondary">
                        Status: {project.status}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
}

export default App;
