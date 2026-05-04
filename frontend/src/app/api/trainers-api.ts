const BASE_URL = 'http://localhost:3000/api/trainers';

export async function getTrainers() {
    const response = await fetch(BASE_URL);
    return await response.json();
}