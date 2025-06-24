"use client"; // if using App Router

import { useState } from "react";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";
import { courses } from "@/lib/courses";

export default function CourseList() {
  const [selected, setSelected] = useState("All");
  const categories = [...new Set(courses.map((course) => course.category))];

  const filtered =
    selected === "All"
      ? courses
      : courses.filter((course) => course.category === selected);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <CourseFilter
        selected={selected}
        setSelected={setSelected}
        categories={categories}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
