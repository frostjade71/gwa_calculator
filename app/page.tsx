"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubjectRow from "@/components/SubjectRow";
import GwaResult from "@/components/GwaResult";
import ExportButtons from "@/components/ExportButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Subject } from "@/types";

export default function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load subjects from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("gwa-subjects");
    if (saved) {
      try {
        setSubjects(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load subjects:", e);
      }
    }
  }, []);

  // Save subjects to localStorage whenever they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("gwa-subjects", JSON.stringify(subjects));
    }
  }, [subjects, mounted]);

  // Add a new subject
  const addSubject = () => {
    const newSubject: Subject = {
      id: Date.now().toString(),
      name: "",
      grade: "",
      units: "",
    };
    setSubjects([...subjects, newSubject]);
  };

  // Update a subject field
  const updateSubject = (id: string, field: keyof Subject, value: string | number) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
  };

  // Remove a subject
  const removeSubject = (id: string) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  // Calculate GWA using useMemo for performance
  // Formula: GWA = Σ(grade × units) / Σ(units)
  const { gwa, totalUnits } = useMemo(() => {
    const validSubjects = subjects.filter((subject) => {
      const grade = typeof subject.grade === 'string' ? parseFloat(subject.grade) : subject.grade;
      const units = typeof subject.units === 'string' ? parseInt(subject.units) : subject.units;
      
      return (
        subject.name.trim() !== "" &&
        !isNaN(grade) &&
        !isNaN(units) &&
        grade >= 1.0 &&
        grade <= 5.0 &&
        units >= 1
      );
    });

    if (validSubjects.length === 0) {
      return { gwa: 0, totalUnits: 0 };
    }

    let totalWeightedGrade = 0;
    let totalUnits = 0;

    validSubjects.forEach((subject) => {
      const grade = typeof subject.grade === 'string' ? parseFloat(subject.grade) : subject.grade;
      const units = typeof subject.units === 'string' ? parseInt(subject.units) : subject.units;
      
      totalWeightedGrade += grade * units;
      totalUnits += units;
    });

    const gwa = totalUnits > 0 ? totalWeightedGrade / totalUnits : 0;

    return { gwa, totalUnits };
  }, [subjects]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 md:py-10 px-3 md:px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 md:mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Calculate Your GWA
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Add your subjects below and see your General Weighted Average in real-time
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Left Column - Subject Input */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 p-4 md:p-6"
              >
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Your Subjects
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addSubject}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
                  >
                    + Add Subject
                  </motion.button>
                </div>

                {/* Subject List */}
                <div className="space-y-2 md:space-y-3">
                  <AnimatePresence>
                    {subjects.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-8 md:py-12 text-gray-500"
                      >
                        <p className="text-base md:text-lg">No subjects added yet.</p>
                        <p className="text-xs md:text-sm mt-2">
                          Click "Add Subject" to get started!
                        </p>
                      </motion.div>
                    ) : (
                      subjects.map((subject) => (
                        <SubjectRow
                          key={subject.id}
                          subject={subject}
                          onUpdate={updateSubject}
                          onRemove={removeSubject}
                        />
                      ))
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Right Column - GWA Result */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GwaResult gwa={gwa} totalUnits={totalUnits} />
                
                {subjects.length > 0 && (
                  <ExportButtons
                    subjects={subjects}
                    gwa={gwa}
                    totalUnits={totalUnits}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
