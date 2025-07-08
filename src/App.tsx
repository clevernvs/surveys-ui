import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ProjectsTable from './ProjectsTable';

function App() {
  const handleCreateProject = () => {
    // Por enquanto, apenas um console.log
    // Aqui você pode implementar a navegação para a página de criar projeto
    console.log('Navegar para página de criar projeto');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Lista de Projetos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateProject}
          sx={{ minWidth: 200 }}
        >
          Criar Projeto
        </Button>
      </Box>
      <ProjectsTable />
    </Container>
  );
}

export default App;
