// Utilitários para formatação de datas
export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('pt-BR');
};

export const formatDateTime = (dateString: string): string => {
    return new Date(dateString).toLocaleString('pt-BR');
}; 