import React, { useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import { CreateProjectForm as CreateProjectFormType } from '../types';
import { MESSAGES } from '../constants/messages';
import Header from '../components/layout/Header';
import CreateProjectForm from '../components/projects/CreateProjectForm';

interface CreateProjectPageProps {
    onBack: () => void;
}

const CreateProjectPage: React.FC<CreateProjectPageProps> = ({ onBack }) => {
    const { createProject } = useProjects();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (projectData: CreateProjectFormType) => {
        setLoading(true);
        try {
            await createProject(projectData);
            alert(MESSAGES.SUCCESS.PROJECT_CREATED);
            onBack();
        } catch (error: any) {
            throw new Error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header
                title="Criar Novo Projeto"
                actionButton={{
                    label: "Voltar",
                    onClick: onBack
                }}
            />
            <CreateProjectForm
                onSubmit={handleSubmit}
                onCancel={onBack}
                loading={loading}
            />
        </>
    );
};

export default CreateProjectPage; 