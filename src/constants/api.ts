// Constantes da API
export const API_ENDPOINTS = {
    PROJECTS: '/api/v2/projects',
} as const;

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
} as const;

export const HTTP_HEADERS = {
    CONTENT_TYPE: 'Content-Type',
    APPLICATION_JSON: 'application/json',
} as const; 