// 1. Insert 3 students
db.students.insertMany([
  {
    name: "Rahma Nor",
    email: "rahma@gmail.com",
    points: 50,
    courses: ["React", "Node.js"]
  },
  {
    name: "Sara Mohamed",
    email: "sara@gmail.com",
    points: 70,
    courses: ["HTML", "CSS"]
  },
  {
    name: "Said Ali",
    email: "said@gmail.com",
    points: 40,
    courses: ["JavaScript", "MongoDB"]
  }
]);

// 2. Use $set to update one email
db.students.updateOne(
  { name: "Ali Hassan" },
  { $set: { email: "ali.hassan@newmail.com" } }
);

// 3. Use $inc to increase points
db.students.updateOne(
  { name: "Sara Mohamed" },
  { $inc: { points: 10 } }
);

// 4. Use $push to add a new course
db.students.updateOne(
  { name: "Said Ali" },
  { $push: { courses: "Express.js" } }
);

// 5. Use $pull to remove a course
db.students.updateOne(
  { name: "Ali Hassan" },
  { $pull: { courses: "Node.js" } }
);

// 6. BONUS: $set + $inc + $push together
db.students.updateOne(
  { name: "Sara Mohamed" },
  {
    $set: { email: "sara.updated@gmail.com" },
    $inc: { points: 5 },
    $push: { courses: "React Native" }
  }
);