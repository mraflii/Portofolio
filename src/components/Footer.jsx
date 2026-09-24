const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10 bg-neutral-950">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Portofolio. Dibuat dengan React, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
