import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-3">
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button
          type="submit"
          className="bg-cyan-600 px-5 py-2 rounded text-white hover:bg-cyan-500 hover:cursor-pointer text-sm"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
