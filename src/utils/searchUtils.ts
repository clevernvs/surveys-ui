import { Project } from '../types';

// Utilitários para busca e filtros
export const filterProjects = (projects: Project[], searchTerm: string): Project[] => {
    if (!searchTerm.trim()) return projects;

    const searchLower = searchTerm.toLowerCase();
    return projects.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.client?.name.toLowerCase().includes(searchLower) ||
        project.status.toLowerCase().includes(searchLower) ||
        project.language?.code.toLowerCase().includes(searchLower) ||
        project.project_type.toLowerCase().includes(searchLower)
    );
}; 