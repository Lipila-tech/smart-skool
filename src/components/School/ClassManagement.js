import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axios';

function ClassManagement({ schoolId }) {
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [newClass, setNewClass] = useState({
    name: '',
    grade: '',
    teacher: '',
    tuition_fee: '',
    capacity: '',
  });

  // Fetch classes from the API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosInstance.get(
          `/schools/${schoolId}/classrooms/`
        );
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, [schoolId]);

  // Fetch teacher from the API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axiosInstance.get(
          `/schools/${schoolId}/teacher/users/`
        );
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, [schoolId]);


  // Handle creating a new class
  const handleCreateClass = async () => {
    try {
      const response = await axiosInstance.post(
        `/schools/${schoolId}/create/classroom/`,
        newClass,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setClasses((prevClasses) => [...prevClasses, response.data]);
      setSuccessMessage('Class created successfully!');
      setTimeout(() => setSuccessMessage(''), 10000);
      setShowCreateModal(false);
      setNewClass({ name: '', grade: '', teacher: '', tuition_fee: '', capacity: ''});
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };

  // Handle opening and closing the modal
  const toggleCreateModal = () => {
    setShowCreateModal((prev) => !prev);
  };

  // Function to get the color code for capacity
  const getCapacityColor = (classObj) => {
    const capacity = parseInt(classObj.capacity, 10);
    const enrolled = parseInt(classObj.enrolled, 10);

    if (enrolled > capacity) return 'red'; // Over capacity
    if (enrolled < capacity / 2) return 'orange'; // Less than half capacity
    return 'green'; // Good capacity
  };

  return (
    <div>
      <h1>Class Management</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button onClick={toggleCreateModal} style={{ float: 'right' }}>
        Create New Class
      </button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Grade</th>
            <th>Teacher</th>
            <th>Tuition(ZMW)</th>
            <th>Capacity</th>
            <th>Total Students</th> {/* New column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cls.name || 'N/A'}</td>
              <td>{cls.grade || 'N/A'}</td>
              <td>{cls.teacher || 'N/A'}</td>
              <td>k {cls.tuition_fee || 'N/A'}</td>
              <td style={{ color: getCapacityColor(cls) }}>
                {cls.capacity || 'N/A'}
              </td>
              <td>
                {/* New column showing total enrolled students */}
                <span style={{ color: getCapacityColor(cls) }}>
                  {cls.enrolled || 0}
                </span>
              </td>
              <td>
                {/* New button to view class details */}
                <button onClick={() => alert(`View class details: ${cls.name}`)}>
                  View Class
                </button>
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
          <select
              name="teacher"
              value={newClass.teacher}
              onChange={(e) =>
                setNewClass((prev) => ({ ...prev, teacher: e.target.value }))
              }
              required
              className=""
            >
              <option value="" disabled>
                Select a teacher
              </option>
              {teachers.map((teacher) => (
                <option key={teacher.user_id} value={teacher.user_id}>
                  {`${teacher.firstname} ${teacher.lastname}`}
                </option>
              ))}
            </select>
          <input
            type="number"
            placeholder="Tuition"
            value={newClass.tuition_fee}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, tuition_fee: e.target.value }))
            }
          />
          <input
            type="number"
            placeholder="Max No of Students"
            value={newClass.capacity}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, capacity: e.target.value }))
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
