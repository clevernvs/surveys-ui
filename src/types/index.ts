// Tipos de dados da aplicação
export interface Project {
    id: number;
    title: string;
    status: string;
    created_at: string;
    client: { name: string };
    language: { code: string };
    project_type: string;
    sample_size: number;
}

export interface CreateProjectForm {
    title: string;
    description: string;
    sample_size: number;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    error?: string;
}

export type PageType = 'list' | 'create'; 