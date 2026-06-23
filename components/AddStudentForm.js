"use client"

import { useState } from "react"

export default function AddStudentForm({ onAdd }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [grade, setGrade] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!firstName || !lastName || !dob || !grade) return

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
      <input placeholder="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
      <input placeholder="grade" value={grade} onChange={(e) => setGrade(e.target.value)} />

      <button type="submit">add student</button>
    </form>
  )
}