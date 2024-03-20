export function formatCurrency(value: number, currency?: string) {
    const result = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency || 'BRL',
    }).format(value);

    // replace non-breaking space (&nbsp;) with a regular space
    return result.replace(/\u00a0/g, ' ');
};