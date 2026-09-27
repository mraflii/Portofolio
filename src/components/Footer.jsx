const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-neutral-900 bg-[#050505] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-neutral-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Muhammad Rafli. All rights reserved.
        </p>
        <p className="text-neutral-600 text-sm font-medium tracking-wide">
          Designed with purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
