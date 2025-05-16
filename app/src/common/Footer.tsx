const Footer = () => {
  return (
    <footer className="w-full border-t border-white/24 py-1.5 text-center font-roboto text-xs font-light tracking-widest text-white fixed bottom-0 backdrop-blur-sm z-50">
      <p>
        &copy; {new Date().getFullYear()} Fretra Pvt. Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
