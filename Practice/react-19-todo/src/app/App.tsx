fetch("http://localhost:3001/users").then((res) => {
  console.log(res);
});

export function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, React!</h1>
    </div>
  );
}
