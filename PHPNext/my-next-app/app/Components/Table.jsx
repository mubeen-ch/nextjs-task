"use client";
import React, { useState, useEffect } from "react";

const Table = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState("");
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/courses');
      const data = await response.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/courses/${id}`, {
      method: 'DELETE',
    });
    setCourses(courses.filter(course => course.id !== id));
  };
  const handleSave = async () => {
    if (newCourseName.trim()) {
      const newCourse = { id: courses.length > 0 ? courses[courses.length - 1].id + 1 : 1, name: newCourseName }; 
      await fetch('http://localhost:5000/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      setCourses([...courses, newCourse]);
      setNewCourseName("");
    }
  };

  return (
    <div>
      <table className="w-2/6 table-auto mx-auto mt-20">
        <thead>
          <tr>
            <th className="border-b border-black p-2">#</th>
            <th className="border-b border-black p-2">Courses</th>
            <th className="border-b border-black p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="text-center">
              <td className="border-b border-gray-300 px-4 py-2">{course.id}</td>
              <td className="border-b border-gray-300 px-4 py-2">{course.name}</td>
              <td className="border-b border-gray-300 px-4 py-2">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col w-2/5 gap-3 mt-40 border-2 border-gray py-4 px-5 mx-auto rounded-md">
        <label
          htmlFor="newCourse"
          className="block text-gray-700 text-lg font-medium"
        >
          Add new course:
        </label>
        <input
          type="text"
          id="newCourse"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md outline-none"
        />
        <button
          onClick={handleSave}
          className="bg-blue-600 w-16 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Table;
