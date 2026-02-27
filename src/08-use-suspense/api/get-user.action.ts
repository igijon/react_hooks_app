export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async(id: number) => {
    console.log('Función llamada');
    await new Promise((res) => setTimeout(res, 2000));
    console.log('Función resuelta');
    return {
        id: id,
        name: 'Inma Gijón',
        location: 'Ciudad Real, España',
        role: 'Profesora de desarrollo web',
    };
} 