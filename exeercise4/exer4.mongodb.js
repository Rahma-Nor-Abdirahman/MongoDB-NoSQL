// Top Performing Students per Course

/*
Assumed Data Structure:

db.students = {
  name: "Ali",
  courses: [
    { course: "React", score: 90 },
    { course: "Node.js", score: 80 }
  ]
}
*/

// 1. Find courses with students scoring > 85
// + count top performers per course

db.students.aggregate([
  // Break array into individual course documents
  { $unwind: "$courses" },

  // Keep only high-performing students (score > 85)
  {
    $match: {
      "courses.score": { $gt: 85 }
    }
  },

  // Group by course name and count students
  {
    $group: {
      _id: "$courses.course",
      topStudents: { $sum: 1 }
    }
  },

  // Sort courses by highest number of top students
  {
    $sort: { topStudents: -1 }
  }
]);