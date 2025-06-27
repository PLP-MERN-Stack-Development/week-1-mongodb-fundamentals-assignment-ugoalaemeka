// MongoDB Queries

// 1. Find all books
db.books.find()

// 2. Find books by Paulo Coelho
db.books.find({ author: "Paulo Coelho" })

// 3. Sort books by year descending
db.books.find().sort({ year: -1 })

// 4. Find books published after 2000
db.books.find({ year: { $gt: 2000 } })

// 5. Count books by genre
db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 } } }
])