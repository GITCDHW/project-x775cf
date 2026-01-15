"use client";

import { useState } from 'react';

export default function MVPPage() {
  const [inputText, setInputText] = useState('');
  const [hooks, setHooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHooks([]); // Clear previous results
    setError(null); // Clear previous errors

    if (!inputText.trim()) {
      setError("Please enter some text to generate social hooks.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/mvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate hooks. Please try again.');
      }

      const data = await response.json();
      setHooks(data.hooks);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <main className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Social Hook Creator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="raw-text" className="block text-sm font-medium text-gray-700 mb-1">
              Paste your raw text here:
            </label>
            <textarea
              id="raw-text"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 h-32 resize-y"
              placeholder="E.g., 'Our new product is amazing. It helps people save time and money. Here are some features: feature A, feature B, feature C. Buy now!'"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Generating Hooks...' : 'Generate 3 High-Impact Hooks'}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
            <p className="font-medium">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {hooks.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Hooks:</h2>
            <ul className="space-y-3">
              {hooks.map((hook, index) => (
                <li key={index} className="p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 break-words">
                  {hook}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Go Starter AI &mdash; Social Hook Creator MVP</p>
      </footer>
    </div>
  );
}
