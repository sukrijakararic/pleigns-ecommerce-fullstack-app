const db = require("../db/pool");

const getOrders = async (request, response, next) => {
  if (!request.user) {
    return response
      .status(401)
      .json({ error: "Please log in to see your orders" });
  }
  const userRespnse = await db.query("SELECT id FROM users WHERE email = $1", [
    request.user.email,
  ]);

  const userId = userRespnse.rows[0].id;

  try {
    const result = await db.query("SELECT * FROM orders WHERE userid = $1", [
      userId,
    ]);
    if (result.rows.length === 0) {
      return response.json({ message: "No orders found" });
    } else {
      response.json(result.rows);
    }
  } catch (err) {
    console.log(err);
  }
};

const viewOrderItems = async (request, response, next) => {
  if (!request.user) {
    return response.json({ error: "Please log in to view order items" });
  }
  const userRespnse = await db.query("SELECT id FROM users WHERE email = $1", [
    request.user.email,
  ]);

  const userId = userRespnse.rows[0].id;
  try {
    const result = await db.query(
      "SELECT * FROM orderitems JOIN orders ON orderitems.orderid = orders.id WHERE userid = $1",
      [userId]
    );
    response.json(result.rows);
  } catch (err) {
    console.log(err);
  }
};

const deleteOrder = async (request, response, next) => {
  const { orderId } = request.body;
  if (!request.user) {
    return response.json({ error: "Please log in to delete an order" });
  }
  const userRespnse = await db.query("SELECT id FROM users WHERE email = $1", [
    request.user.email,
  ]);

  const userId = userRespnse.rows[0].id;
  try {
    await db.query(
      "DELETE FROM orderitems WHERE orderid = $1 IN (SELECT id FROM orders WHERE userid = $2)",
      [orderId, userId]
    );

    await db.query("DELETE FROM orders WHERE userid = $1 AND id = $2", [userId, orderId]);
    response.json({ message: "Order deleted" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getOrders, deleteOrder, viewOrderItems };
