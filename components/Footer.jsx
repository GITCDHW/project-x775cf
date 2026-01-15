export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Social Hook Creator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}