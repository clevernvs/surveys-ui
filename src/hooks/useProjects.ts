import { useState, useEffect } from 'react';
import { Project, CreateProjectForm } from '../types';
import { apiService } from '../services/api';
import { MESSAGES } from '../constants/messages';

// Hook customizado para gerenciar projetos
export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await apiService.getProjects();
            setProjects(data);
        } catch (err: any) {
            setError(err.message || MESSAGES.ERROR.FETCH_PROJECTS);
        } finally {
            setLoading(false);
        }
    };

    const createProject = async (projectData: CreateProjectForm) => {
        try {
            const newProject = await apiService.createProject(projectData);
            setProjects(prev => [newProject, ...prev]);
            return newProject;
        } catch (err: any) {
            throw new Error(err.message || MESSAGES.ERROR.CREATE_PROJECT);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return {
        projects,
        loading,
        error,
        fetchProjects,
        createProject,
    };
}; 