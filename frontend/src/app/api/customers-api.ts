const BASE_URL = 'http://localhost:3000/api/customers';

export async function getCustomers() {
    const response = await fetch(BASE_URL);
    return await response.json();
}

export async function addCustomer(customer: any) {
    await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    });
}

export async function deleteCustomer(id: number) {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
}