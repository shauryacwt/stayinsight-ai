export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="mt-20 border-t border-white/60 bg-white/50 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 sm:flex-row sm:px-8">
        <p
          data-testid="footer-copyright"
          className="text-sm font-medium text-slate-700"
        >
          StayInsight AI © 2026
        </p>

        <p
          data-testid="footer-tagline"
          className="text-sm text-slate-500"
        >
          Built for smarter hospitality insights
        </p>
      </div>
    </footer>
  );
};

export default Footer;