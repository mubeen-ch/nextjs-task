"use client";
import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState("");

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.courses); 
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleSave = () => {
    if (newCourseName.trim()) {
      const newCourse = { id: courses.length + 1, name: newCourseName };
      setCourses([...courses, newCourse]);
      setNewCourseName("");
    }
  };

  return (
    <header className="flex items-center gap-12 py-4 px-20 bg-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-5xl font-bold text-blue-700">Hurak</h1>
      </div>
      <nav className="hidden md:flex items-center gap-12 ">
        <div className="relative group">
          <button className="font-medium text-lg">Courses</button>
          <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border rounded-md hidden group-hover:block">
            <ul className="text-sm">
              {courses.map((course) => (
                <li
                  key={course.id}
                  className="flex items-center justify-between hover:bg-gray-100 p-2 cursor-pointer"
                >
                  {course.name} <FaChevronRight className="text-gray-500" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="font-medium text-lg">Licences</button>
        <button className="font-medium text-lg">Locations</button>
      </nav>
      <div className="flex-grow max-w-2xl mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for categories, courses or training providers"
            className="w-full border rounded-full px-14 py-2 text-base focus:outline-none bg-OffWhite"
          />
          <FaSearch className="absolute text-lg top-1/2 left-4 transform -translate-y-1/2  text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className="hidden md:block text-lg ">Blog</button>
        <button className="hidden md:block text-lg ">Test Prep</button>
        <BsCart2 className="text-xl cursor-pointer" />
        <button className="bg-red-500 text-white px-6 py-2 rounded-md text-base hover:bg-red-600">
          Sign Up
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md text-base hover:bg-gray-600">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
