const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("library");
    const books = db.collection("books");

    const result = await books.insertMany([
      { title: "The Alchemist", author: "Paulo Coelho", year: 1988, genre: "Fiction" },
      { title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-Help" },
      { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic" }
    ]);

    console.log(`${result.insertedCount} books added`);
  } finally {
    await client.close();
  }
}

main().catch(console.error);