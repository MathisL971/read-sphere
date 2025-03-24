import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <div className="flex flex-col gap-3">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="bg-red-600 px-5 py-2 rounded-lg text-white hover:bg-red-500 hover:cursor-pointer text-sm"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
