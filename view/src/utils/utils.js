export const getHello = async () => {
    const response = await fetch('http://localhost:4000/');
    const data = await response.json();
    return data;
}

export const addUser = async (user) => {
    try {
      const response = await fetch('http://localhost:4000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  };