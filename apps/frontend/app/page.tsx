import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        This is the Landing page in my exclidraw app go to the
        <Link href="/signup">/signup</Link> or
        <Link href="/signin">/signin</Link>
        page to get started
      </div>
    </main>
  );
}
