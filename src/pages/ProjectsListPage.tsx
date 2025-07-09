import React from 'react';
import { useProjects } from '../hooks/useProjects';
import { MESSAGES } from '../constants/messages';
import Header from '../components/layout/Header';
import PageContainer from '../components/layout/PageContainer';
import ProjectsTable from '../components/projects/ProjectsTable';

interface ProjectsListPageProps {
    onCreateProject: () => void;
}

const ProjectsListPage: React.FC<ProjectsListPageProps> = ({ onCreateProject }) => {
    const { createProject } = useProjects();

    const handleCreateProject = async (projectData: any) => {
        try {
            await createProject(projectData);
            alert(MESSAGES.SUCCESS.PROJECT_CREATED);
            onCreateProject(); // Volta para a lista
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    return (
        <>
            <Header
                title="Lista de Projetos"
                actionButton={{
                    label: "Criar Projeto",
                    onClick: onCreateProject
                }}
            />
            <PageContainer>
                <ProjectsTable />
            </PageContainer>
        </>
    );
};

export default ProjectsListPage; 