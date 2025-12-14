"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import { ExportButtonsProps } from "@/types";

export default function ExportButtons({ subjects, gwa, totalUnits }: ExportButtonsProps) {
  const [showTextModal, setShowTextModal] = useState(false);
  const [exportText, setExportText] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Generate formatted text for export
  const generateExportText = () => {
    const validSubjects = subjects.filter(
      (s) => s.name && s.grade && s.units
    );

    let text = "GWA RESULT\n";
    text += "------------------\n\n";

    validSubjects.forEach((subject) => {
      text += `${subject.name}: ${subject.grade} (${subject.units} units)\n`;
    });

    text += `\nTotal Units: ${totalUnits}\n`;
    text += `GWA: ${isNaN(gwa) ? "0.00" : gwa.toFixed(2)}\n`;

    return text;
  };

  // Handle text export
  const handleTextExport = () => {
    const text = generateExportText();
    setExportText(text);
    setShowTextModal(true);
  };

  // Copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Download as .txt file
  const handleDownloadText = () => {
    const blob = new Blob([exportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `gwa-result-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle screenshot export
  const handleScreenshotExport = async () => {
    const element = document.getElementById("gwa-result-card");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `gwa-result-${new Date().toISOString().split("T")[0]}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      });
    } catch (err) {
      console.error("Failed to capture screenshot:", err);
      alert("Failed to capture screenshot. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-4 md:mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleTextExport}
          className="flex-1 px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm flex items-center justify-center gap-2"
        >
          <img src="/images/text.png" alt="Text" className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-xs md:text-sm">Export as Text</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleScreenshotExport}
          className="flex-1 px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-sm flex items-center justify-center gap-2"
        >
          <img src="/images/screenshot.png" alt="Screenshot" className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-xs md:text-sm">Export as Screenshot</span>
        </motion.button>
      </div>

      {/* Text Export Modal */}
      <AnimatePresence>
        {showTextModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowTextModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 md:p-6 max-w-md w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Export as Text
              </h3>

              <pre className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 md:p-4 rounded-lg mb-4 text-xs md:text-sm overflow-auto max-h-64 whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                {exportText}
              </pre>

              <div className="flex gap-2 md:gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 px-3 py-2 md:px-4 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Copy
                </button>
                <button
                  onClick={handleDownloadText}
                  className="flex-1 px-3 py-2 md:px-4 text-sm md:text-base bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Download
                </button>
                <button
                  onClick={() => setShowTextModal(false)}
                  className="px-3 py-2 md:px-4 text-sm md:text-base bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-lg shadow-lg z-50 text-sm font-medium"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
