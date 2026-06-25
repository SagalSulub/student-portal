  "use client"

import { useState } from "react"

export default function AddStudentForm({ onAdd }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [grade, setGrade] = useState("")

  const handleSubmit = (e) => {
  e.preventDefault()

  // Check all fields are filled in
  if (!firstName || !lastName || !dob || !grade) {
    alert("Please fill in all fields.")
    return
  }

  // Check grade is between 9 and 12
  if (grade < 9 || grade > 12) {
    alert("Grade must be between 9 and 12.")
    return
  }

  // Check dob is not in the future
  if (new Date(dob) > new Date()) {
    alert("Date of birth cannot be in the future.")
    return
  }

  onAdd({
    id: Date.now(),
    firstName,
    lastName,
    dob,
    grade
  })

  setFirstName("")
  setLastName("")
  setDob("")
  setGrade("")
}
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Student</h3>

      <input placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input placeholder="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <input placeholder="grade" type="number" min="9" max="12" value={grade} onChange={(e) => setGrade(e.target.value)} />

      <button type="submit">add student</button>
    </form>
  )
}
