import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <div className="relative h-[calc(100vh-10.1rem)] overflow-hidden border-x justify-center items-center flex flex-col gap-4">
        <h2>Uh oh! Page Not Found 😐</h2>
        <Link className="underline font-bold" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
