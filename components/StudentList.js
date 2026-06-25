export default function StudentList({ students }) {
  // displaying student list
  return (
    <div>
      <h3>Students</h3>
      {students.map((s) => (
        <div key={s.id}>
          <p>{s.firstName} {s.lastName}</p>
          <p>dob: {s.dob}</p>
          <p>grade: {s.grade}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
