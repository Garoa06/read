'use client';
import { useState, useEffect } from 'react';
import {
  FaChevronDown,
  FaChevronRight,
  FaClipboard,
  FaSave,
  FaShareAlt,
  FaCog,
  FaInfoCircle,
  FaTrash,
  FaMoon,
  FaSun,
  FaTextHeight,
  FaFont,
} from 'react-icons/fa';

export default function BookReadingPage() {
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [autoScroll, setAutoScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showFontSizeModal, setShowFontSizeModal] = useState(false);
  const [showFontFamilyModal, setShowFontFamilyModal] = useState(false);

  useEffect(() => {
    let scrollInterval;
    if (autoScroll) {
      scrollInterval = setInterval(() => {
        window.scrollBy({ top: 1, behavior: 'smooth' });
      }, 50);
    } else {
      clearInterval(scrollInterval);
    }
    return () => clearInterval(scrollInterval);
  }, [autoScroll]);

  return (
    
    <main
      className={`flex h-screen ${
        darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <audio src=""></audio>
      {/* Left Section */}
      <aside
        className={`w-1/4 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
        } border-r flex flex-col p-4`}
      >
        {/* Website Logo */}
        <div className="mb-6">
          <img
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            alt="Website Logo"
            className="max-h-14"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-6 relative">
          <div className="relative">
            <button
              onClick={() => setShowFontSizeModal(!showFontSizeModal)}
              className={`w-16 h-16 flex items-center justify-center rounded transition ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <FaTextHeight />
            </button>
            {showFontSizeModal && (
              <div
                className={`absolute top-20 left-0 p-2 shadow rounded border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-gray-200'
                    : 'bg-white border-gray-300'
                }`}
              >
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value) || 16)}
                  className="w-full p-2 border rounded"
                  min="10"
                  max="30"
                />
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowFontFamilyModal(!showFontFamilyModal)}
              className={`w-16 h-16 flex items-center justify-center rounded transition ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <FaFont />
            </button>
            {showFontFamilyModal && (
              <div
                className={`absolute top-20 left-0 p-2 shadow rounded border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-gray-200'
                    : 'bg-white border-gray-300'
                }`}
              >
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="Arial">Arial</option>
                  <option value="Comic Sans MS">Comic Sans</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Verdana">Verdana</option>
                </select>
              </div>
            )}
          </div>
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className={`w-16 h-16 flex items-center justify-center rounded transition ${
              autoScroll
                ? 'bg-blue-300'
                : darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <FaChevronDown />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-16 h-16 flex items-center justify-center rounded transition ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* List of Chapters */}
        <div className="flex-1 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-3">Chapters</h3>
          <ul className="space-y-2">
            {Array.from({ length: 20 }).map((_, index) => (
              <li
                key={index}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                Chapter {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Right Section */}
      <section className="flex-1 p-6 overflow-y-auto">
        {/* Title at the Top */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Book Title</h2>
        </div>

        {/* Text Area */}
        <div
          className={`shadow p-14 rounded h-full overflow-y-auto ${
            darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
          }`}
          style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily }}
        >
          <p>
            {/* Placeholder for the book text. Replace with dynamic content if needed. */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur faucibus, nisl libero
            blandit turpis, in tempus enim leo nec felis. Suspendisse potenti.
            Ut eget turpis sed sapien gravida vestibulum vel quis purus.
            Curabitur nec lorem vehicula, fermentum sapien vel, efficitur
            tortor.
          </p>
        </div>
      </section>
    </main>
  );
}
