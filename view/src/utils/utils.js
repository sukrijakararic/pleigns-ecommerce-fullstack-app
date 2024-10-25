export const getHello = async () => {
    const response = await fetch('http://localhost:4000/');
    const data = await response.json();
    return data;
}