export function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
      <p>
        All rights reserved &#169; {new Date().getFullYear()} -
        <span className="hover:text-gray-800 duration-300">
          @aleydonroberto
        </span>
      </p>
    </footer>
  );
}
