import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div className="flex justify-center">
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button
          type="submit"
          className="bg-cyan-900 px-5 py-2 rounded-lg text-white hover:bg-cyan-700 hover:cursor-pointer text-sm"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
