const db = require("../db/pool");
const bcrypt = require("bcrypt");

// Register a new user
const registerUserAndCreateCart = async (request, response, next) => {
  // Extract the email, password, firstname, and lastname from the request body
  const { email, password, firstname, lastname } = request.body;
  const existingUser = await getUserByEmail(email);

  if (!email || !password || !firstname || !lastname) {
    response.status(400).json({ message: "All fields are required" });
    return;
  }

  // Check if the email already exists in the database
  else if (existingUser) {
    return response
      .status(400)
      .json({ message: "Hmm.. That pilot already exists" });
  }

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Insert the user into the database and return the newly inserted user
    const result = await db.query(
      "INSERT INTO users (email, password, firstname, lastname) VALUES (LOWER($1), $2, $3, $4) RETURNING *",
      [email, hashedPassword, firstname, lastname]
    );

    const userId = result.rows[0].id;
    const created = new Date();
    const modified = new Date();

    // Create a new cart for the user
    await db.query(
      "INSERT INTO carts (userid, created, modified) VALUES ($1, $2, $3)",
      [userId, created, modified]
    );

    // Return a 201 Created response with the newly inserted user
    response.status(201).json({ message: "User created", user: firstname });
  } catch (err) {
    console.log(err);
  }
};

// Get a user by their email and password
const getUserById = async (id) => {
  console.log("getUserById called with id:", id);
  const parsedId = parseInt(id);

  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [
      parsedId,
    ]);

    if (result.rows.length === 0) {
      return null;
    } else {
      return result.rows[0];
    }
  } catch (err) {
    throw err;
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await db.query(
      "SELECT * FROM users WHERE email = LOWER($1)",
      [email]
    );
    return result.rows[0];
  } catch (err) {
    console.log(err);
  }
};
const changePAssword = async (request, response, next) => {
  const { email, password } = request.body;

  if (!password) {
    response.status(400).json({ message: "Password is required" });
    return;
  } else if (!email) {
    response.status(400).json({ message: "Email is required" });
    return;
  }

  const user = await getUserByEmail(email);

  if (!user) {
    response.status(400).json({ message: "Email not found" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await db.query(
      "UPDATE users SET password = $1 WHERE email = $2",
      [hashedPassword, email]
    );
    response.json({ message: "Password changed" });
  } catch (err) {
    console.log(err);
  }
};

const deleteUserById = async (request, response, next) => {
  const parsedId = parseInt(request.params.id);

  try {
    const result = await db.query("DELETE FROM users WHERE id = $1", [
      parsedId,
    ]);
    response.json({ message: "User deleted" });
  } catch (err) {
    response.status(500).json({ message: "Something went wrong" });
  }
};

const getUserByIdForRouter = async (request, response, next) => {
  console.log("getUserByIdForRouter called with id:", request.params.id);
  const { id } = request.params;
  const parsedId = parseInt(id);
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [
      parsedId,
    ]);

    if (result.rows.length === 0) {
      response.status(404).json({ message: "User not found" });
    } else {
      response.json(result.rows[0]);
    }
  } catch (err) {
    console.log(err);
  }
};

const showUser = async (request, response, next) => {
  console.log("showUser: ", request.user);
  if (!request.user) {
    response.status(401).json({ message: "Please log in" });
  } else {
    const result = await db.query("SELECT email, firstname, lastname FROM users where email = $1", [
      request.user.email,
    ]);
    response.json(result.rows[0]);
  }
};

module.exports = {
  registerUserAndCreateCart,
  getUserByEmail,
  getUserById,
  changePAssword,
  deleteUserById,
  getUserByIdForRouter,
  showUser,
};
