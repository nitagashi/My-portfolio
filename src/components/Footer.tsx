const Footer = () => {
  return (
    <footer className="section-padding py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Designed & Built with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
