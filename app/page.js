"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import StudentList from "../components/StudentList"
import AddStudentForm from "../components/AddStudentForm"
import Footer from "../components/Footer"
import studentsData from "../data/students"

export default function Home() {
  // main page (index)
  // contains form and the list of student
  const [students, setStudents] = useState(studentsData)

  const addStudent = (student) => {
    setStudents([...students, student])
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <Navbar />

      <h1>Student Portal</h1>
      <p>Welcome to the school system</p>

      <AddStudentForm onAdd={addStudent} />

      <StudentList students={students} />

      <Footer />
    </div>
  )
}
