function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-white text-sm dark:bg-[#18181b] text-center text-gray-400 border-t border-gray-300 dark:border-gray-700 py-4">
          &copy; {new Date().getFullYear()} Lester John Gatpolintan. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
