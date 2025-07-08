import React, { useEffect, useState } from 'react';

interface Project {
    id: number;
    title: string;
    description?: string;
    // Adicione outros campos conforme necessário
}

const ProjectsList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v2/projects`)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao buscar projetos');
                return response.json();
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

    if (loading) return <div>Carregando projetos...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div>
            <h2>Lista de Projetos</h2>
            {projects.length === 0 ? (
                <p>Nenhum projeto encontrado.</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <strong>{project.title}</strong>
                            {project.description && <span> - {project.description}</span>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProjectsList; 