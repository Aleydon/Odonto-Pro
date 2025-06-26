export function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 md:text-base">
      <p>
        All rights reserved &#169; {new Date().getFullYear()} -
        <span className="duration-300 hover:text-gray-800">
          @aleydonroberto
        </span>
      </p>
    </footer>
  );
}
