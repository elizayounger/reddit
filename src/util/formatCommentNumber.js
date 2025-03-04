export function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'; // Convert to millions
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k'; // Convert to thousands
    }
    return num.toString(); // Return the original number if it's less than 1000
}
