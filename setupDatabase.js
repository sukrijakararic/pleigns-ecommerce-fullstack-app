const { Client } = require("pg");
const { DB } = require("./config");

(async () => {
  const usersTableStmt = `
    CREATE TABLE IF NOT EXISTS users (
      id              BIGINT               PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      email           VARCHAR(50),      
      password        TEXT,
      firstName       VARCHAR(50),
      lastName        VARCHAR(50),
      google_profile  JSON
    );
  `;

  const productsTableStmt = `
    CREATE TABLE IF NOT EXISTS products (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      name            VARCHAR(100)     NOT NULL,
      price           BIGINT          NOT NULL,
      description     VARCHAR(500)     NOT NULL,
      image           VARCHAR(100)     NOT NULL
    );
  `;

  const ordersTableStmt = `
    CREATE TABLE IF NOT EXISTS orders (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      total           INT             NOT NULL,
      status          VARCHAR(50)     NOT NULL,
      userId          INT             NOT NULL,
      created         DATE            NOT NULL,
      modified        DATE            NOT NULL,
      FOREIGN KEY (userId) REFERENCES users(id)
    );
  `;

  const orderItemsTableStmt = `
    CREATE TABLE IF NOT EXISTS orderItems (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      created         DATE            NOT NULL,
      orderId         INT             NOT NULL,
      qty             INT             NOT NULL,
      price           INT             NOT NULL,
      productId       INT             NOT NULL,
      name            VARCHAR(50)     NOT NULL,
      description     VARCHAR(500)    NOT NULL,
      FOREIGN KEY (orderId) REFERENCES orders(id)
    );
  `;

  const cartsTableStmt = `
    CREATE TABLE IF NOT EXISTS carts (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      userId          INT             NOT NULL,
      modified        DATE            NOT NULL,
      created         DATE            NOT NULL,
      FOREIGN KEY (userId) REFERENCES users(id)
    );
  `;

  const cartItemsTableStmt = `
    CREATE TABLE IF NOT EXISTS cartItems (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      cartId          INT             NOT NULL,
      productId       INT             NOT NULL,
      qty             INT             NOT NULL,
      FOREIGN KEY (cartId) REFERENCES carts(id),
      FOREIGN KEY (productId) REFERENCES products(id)
    );
  `;

  const populateProductsStmt = `
    INSERT INTO products (name, price, description, image)
    VALUES
      ('Cessna 172 Skyhawk', 359000, 'American four-seat, single-engine, high wing, fixed-wing aircraft made by the Cessna Aircraft Company.', './public/cessna172Skyhawk.webp'),
      ('SeaRey', 1000000, 'The Progressive Aerodyne Searey is an American two-seat, single-engine, amphibious flying boat designed and manufactured by Progressive Aerodyne originally in Orlando, Florida, and now in Tavares, Florida.', './searey.webp'),
      ('Cirrus Vision SF50', 3000000, 'The Cirrus Vision SF50, also known as the Vision Jet, is a single-engine very light jet designed and produced by Cirrus Aircraft of Duluth, Minnesota, United States.', '/cirrus-vision-sf50.webp'),
      ('Vans RV-10', 120000, 'The RV-10 is a true four-person airplane, not just an airplane with four seats. It will carry four FAA standard adults, full fuel and sixty pounds of baggage while remaining at or below max gross weight.', '/src/assets/vans-rv10.webp'),
      ('Lockheed Martin F-35 Lightning II', 10000000, 'The F-35 Lightning II, also known as the F-35 Lightning, is a family of single-seat, single-engine, all-weather stealth multirole fighters manufactured by Lockheed Martin.', '/src/assets/f35.webp'),
      ('Cessna 150', 75000, 'The Cessna 150 is a two-seat, single-engine, fixed-wing aircraft manufactured by Cessna. It is one of the most popular flight training aircraft in the world.' ,'/src/assets/cessna150.webp'),
      ('Cessna 182 Skylane', 790000, 'The Cessna 182 Skylane is an American four-seat, single-engine, light airplane built by Cessna of Wichita, Kansas. It has the option of adding two child seats in the baggage area.', '/src/assets/cessna182Skylane.webp'),
      ('Piper PA-46', 1100000, 'The Piper M-Class (PA-46; formerly called the Malibu, Malibu Mirage, Malibu Meridian, and Matrix) is a family of American light aircraft manufactured by Piper Aircraft of Vero Beach, Florida. The aircraft are powered by single engines and have six seats.' ,'/src/assets/piper-malibu.webp'),
      ('Beechcraft-58 Baron', 500000, 'The Beechcraft Baron is a light twin-engined piston aircraft designed and produced by Beechcraft. The aircraft was introduced in 1961. A low-wing monoplane developed from the Travel Air, it remains in production.' ,'/src/assets/beechcraft-58.webp'),
      ('Cessna 400', 650000, 'The Cessna 400, marketed as the Cessna TTx, is a single-engine, fixed-gear, low-wing general aviation aircraft built from composite materials by Cessna Aircraft. The Cessna 400 was originally built by Columbia Aircraft as the Columbia 400 until December 2007. From 2013, the aircraft was built as the Cessna TTx Model T240.', '/src/assets/cessnaTTx.webp'),
      ('Cessna 210N', 250000, 'The Cessna 210 Centurion is a six-seat, high-performance, retractable-gear, single-engined, high-wing general-aviation light aircraft. First flown in January 1957, it was produced by Cessna until 1986.', '/src/assets/cessna210.webp'),
      ('Daher TBM 960', 4500000, 'The SOCATA TBM (now Daher TBM) is a family of high-performance single-engine turboprop business and utility light aircraft manufactured by Daher. It was originally collaboratively developed between the American Mooney Airplane Company and French light aircraft manufacturer SOCATA.', '/src/assets/tbm960.webp');
  `

  try {
    const db = new Client({
      user: DB.PGUSER,
      host: DB.PGHOST,
      database: DB.PGDATABASE,
      password: DB.PGPASSWORD,
      port: DB.PGPORT,
    });

    await db.connect();

    // Create tables on database
    await db.query(usersTableStmt);
    await db.query(productsTableStmt);
    await db.query(ordersTableStmt);
    await db.query(orderItemsTableStmt);
    await db.query(cartsTableStmt);
    await db.query(cartItemsTableStmt);

    // Populate products table
    await db.query(populateProductsStmt);

    await db.end();
  } catch (err) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
  }
})();
