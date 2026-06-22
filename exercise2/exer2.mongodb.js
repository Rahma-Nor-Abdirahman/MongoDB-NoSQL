
// 1. Students older than 22
db.students.find({ age: { $gt: 22 } });

// 2. Students enrolled in React
db.students.find({ courses: "React" });

// 3. Students whose name starts with 'S'
db.students.find({ name: { $regex: /^S/ } });

// 4. Students whose age is either 18 or 21
db.students.find({ age: { $in: [18, 21] } });

// 5. Students who are NOT using Gmail
db.students.find({ email: { $not: /@gmail\.com$/ } });

// 6. Students enrolled in React AND older than 20
db.students.find({
  courses: "React",
  age: { $gt: 20 }
});

// 7. Students enrolled in React OR Node.js
db.students.find({
  courses: { $in: ["React", "Node.js"] }
});

// 8a. BONUS: Names containing "x"
db.students.find({ name: { $regex: /x/i } });

// 8b. BONUS: Emails ending in .edu
db.students.find({ email: { $regex: /\.edu$/ } });