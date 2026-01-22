const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wide">
          <p>© {currentYear} Jack Ge</p>
          <p className="tracking-[0.2em] uppercase">Los Angeles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
