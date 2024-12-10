import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClassManagement({ schoolId }) {
  const [classes, setClasses] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newClass, setNewClass] = useState({
    name: '',
    grade: '',
    teacher: '',
    tuition: '',
  });

  // Fetch classes from the API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/smartskool/class-management/${schoolId}/`
        );
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, [schoolId]);

  // Handle creating a new class
  const handleCreateClass = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/smartskool/class-management/${schoolId}`,
        newClass,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setClasses((prevClasses) => [...prevClasses, response.data]);
      setShowCreateModal(false);
      setNewClass({ name: '', grade: '', teacher: '', tuition: '' });
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };

  // Handle opening and closing the modal
  const toggleCreateModal = () => {
    setShowCreateModal((prev) => !prev);
  };

  return (
    <div>
      <h1>Class Management</h1>
      <button onClick={toggleCreateModal} style={{ float: 'right' }}>
        Create New Class
      </button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Grade</th>
            <th>Teacher</th>
            <th>Tuition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td>{cls.name}</td>
              <td>{cls.grade}</td>
              <td>{cls.teacher}</td>
              <td>{cls.tuition_fee}</td>
              <td>
                <button onClick={() => alert(`Edit class: ${cls.name}`)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showCreateModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            border: '1px solid black',
          }}
        >
          <h2>Create New Class</h2>
          <input
            type="text"
            placeholder="Class Name"
            value={newClass.name}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Grade"
            value={newClass.grade}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, grade: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Teacher"
            value={newClass.teacher}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, teacher: e.target.value }))
            }
          />
          <input
            type="number"
            placeholder="Tuition"
            value={newClass.tuition}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, tuition: e.target.value }))
            }
          />
          <br />
          <button onClick={handleCreateClass}>Save</button>
          <button onClick={toggleCreateModal}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default ClassManagement;
