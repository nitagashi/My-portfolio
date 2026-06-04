const Footer = () => {
  return (
    <footer className="section-padding py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-muted-foreground text-sm tracking-wide">
          © {new Date().getFullYear()} Portfolio — Crafted with intent.
        </p>
        <p className="font-body text-muted-foreground/60 text-xs tracking-[0.2em] uppercase">
          Designed & built from scratch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
