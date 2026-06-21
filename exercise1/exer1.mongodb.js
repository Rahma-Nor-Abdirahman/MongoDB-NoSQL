// 1. Create database
use dugsiiye

// 2. Create Collection and inserting
db.students.insertMany([
  {
    name: 'Rahma',
    age: 19,
    email: 'rnuur3501@gmail.com',
    courses: ['react.js', 'node.js']
  },
  {
    name: 'RIMAA',
    age: 18,
    email: 'RAHMA@gmail.com',
    courses: ['anatomy', 'psychology']
  },
  {
    name: 'Ruun',
    age: 17,
    email: 'rrun@gmail.com',
    courses: ['english', 'exam']
  },
  {
    name: 'RUUXI',
    age: 15,
    email: 'Ruuxi@gmail.com',
    courses:['biology,chemistry']
  }
])

// 3 View All Data
db.students.find().pretty()


// 4 Update
db.students.updateOne(
  { name: "Rahma" },
  { $set: { email: "Rahiima@newmail.com" } }
)


// 5 Delete One Student
db.students.deleteOne({ name: "Ruuxi" })


// 6 Optional: Insert Student with Nested Address
db.students.insertOne({
  name: "Rahiima Nor",
  age: 19,
  email: "Rahma@gmail.com",
  courses: ["React", "Node.js"],
  address: {
    city: "Mogadishu",
    district: "Hodan",
    street: "Street 12"
  }
})

