import SignIn from "./sign-in";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-cyan-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-center text-4xl font-semibold text-cyan-700 mb-6">
          Welcome to ReadSphere
        </h1>

        <p className="text-center text-sm text-gray-500 mb-8">
          A place where books come to life. Sign in to continue your reading
          journey.
        </p>

        <SignIn />
      </div>
    </div>
  );
}
