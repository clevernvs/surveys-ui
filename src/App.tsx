import React from 'react';
import { Container, Typography } from '@mui/material';
import ProjectsTable from './ProjectsTable';

function App() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Projetos
      </Typography>
      <ProjectsTable />
    </Container>
  );
}

export default App;
