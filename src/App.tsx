import React, { useState } from 'react';
import { PageType } from './types';
import ProjectsListPage from './pages/ProjectsListPage';
import CreateProjectPage from './pages/CreateProjectPage';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('list');

  const handleCreateProject = () => {
    setCurrentPage('create');
  };

  const handleBackToList = () => {
    setCurrentPage('list');
  };

  if (currentPage === 'create') {
    return <CreateProjectPage onBack={handleBackToList} />;
  }

  return <ProjectsListPage onCreateProject={handleCreateProject} />;
}

export default App;
