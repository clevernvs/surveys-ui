import { Project, CreateProjectForm, ApiResponse } from '../types';
import { API_ENDPOINTS, HTTP_METHODS, HTTP_HEADERS } from '../constants/api';
import { MESSAGES } from '../constants/messages';

// Serviço centralizado para chamadas da API
class ApiService {
    private async makeRequest<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        try {
            const response = await fetch(endpoint, {
                headers: {
                    [HTTP_HEADERS.CONTENT_TYPE]: HTTP_HEADERS.APPLICATION_JSON,
                    ...options.headers,
                },
                ...options,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw new Error(MESSAGES.ERROR.NETWORK_ERROR);
        }
    }

    async getProjects(): Promise<Project[]> {
        return this.makeRequest<Project[]>(API_ENDPOINTS.PROJECTS);
    }

    async createProject(projectData: CreateProjectForm): Promise<Project> {
        return this.makeRequest<Project>(API_ENDPOINTS.PROJECTS, {
            method: HTTP_METHODS.POST,
            body: JSON.stringify(projectData),
        });
    }
}

export const apiService = new ApiService(); 