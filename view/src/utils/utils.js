export const serverUrlGoogle = "/api/google";

export const addUser = async (user) => {
  try {
    const response = await fetch("/api/users/register", {
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
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch("/api/users/logout", {
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

export const getUser = async () => {
  try {
    const response = await fetch("/api/users/loggedIn");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch("/api/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

export const addToCart = async (productId, qty) => { 
  try {
    const response = await fetch("/api/cart/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, qty }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
}

export const getCart = async () => {
  try {
    const response = await fetch("/api/cart/myCart");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting cart:", error);
    throw error;
  }
 }
