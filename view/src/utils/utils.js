export const serverUrlGoogle = "http://localhost:4000/google";

export const addUser = async (user) => {
  try {
    const response = await fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const login = async (user) => {
  try {
    const response = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch("http://localhost:4000/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const getGoogleUser = async () => {
  try {
    const response = await fetch("http://localhost:4000/getGoogleUser");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
 };

 export const getLocalUser = async () => {
  try {
    const response = await fetch("http://localhost:4000/users/getLocalUser");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
 };