import Link from 'next/link';

import Text from './components/Text';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-r from-blue-400 to-purple-300 ">
      <h1 className="text-4xl text-bold">Hello World</h1>
      <Text>&darr;</Text>

      <Link
        className="cursor-pointer underline"
        href="https://github.com/Aleydon"
        target="_blank"
        aria-label="github.com/Aleydon"
      >
        Github Template
      </Link>
    </div>
  );
}
