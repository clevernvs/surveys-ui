import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ProjectsTable from './ProjectsTable';
import CreateProject from './CreateProject';

function App() {
  const [currentPage, setCurrentPage] = useState<'list' | 'create'>('list');

  const handleCreateProject = () => {
    setCurrentPage('create');
  };

  const handleBackToList = () => {
    setCurrentPage('list');
  };

  if (currentPage === 'create') {
    return <CreateProject onBack={handleBackToList} />;
  }

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
