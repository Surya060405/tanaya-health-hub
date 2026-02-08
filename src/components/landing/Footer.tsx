import { Instagram, Twitter, Facebook } from "lucide-react";
import tanayaLogo from "@/assets/tanaya-logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5" />
      <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={tanayaLogo} alt="TANAYA logo" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground font-medium">TANAYA – Caring for Daughters</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
            <a href="mailto:contact@tanaya.app" className="hover:text-primary transition-colors">contact@tanaya.app</a>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © 2014 – 2025 TANAYA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
