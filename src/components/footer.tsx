import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPinned, MoveRight } from "lucide-react";

const footerNav = [
  { label: "About", href: "/about" },
  { label: "Technologies", href: "/technologies" },
  { label: "Profiles", href: "/profiles" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/agrawalyash-dev",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/agrawalyash-dev/",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com/agrawalyash_dev", label: "X" },
];

const Footer = () => {
  return (
    <footer className="border-t md:pt-12">
      <div className="wrapper">
        <div className="hidden md:block">
          <svg
            viewBox="0 0 1000 200"
            className="h-auto w-full text-muted-foreground/20"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              fontSize="164"
            >
              Yash Agrawal
            </text>
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 mt-4 content-start">
          <div className="flex flex-col gap-4">
            <Link to="/">
              <p className="text-2xl font-semibold">
                YA<span className="text-primary ml-0.5">.</span>
              </p>
            </Link>

            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinned className="text-primary size-5" />{" "}
                Vadodara, Gujarat, India
              </div>

              <a
                href="mailto:agrawalyash.work@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground mt-3"
              >
                <Mail className="text-primary size-5" />{" "}
                agrawalyash.work@gmail.com
              </a>
            </div>
          </div>

          <div className="text-muted-foreground">
            <p>Navigation</p>

            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="transition-colors hover:text-foreground"
                  data-testid={`footer-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-muted-foreground md:ml-auto">
            <p>Connect</p>

            <div className="flex gap-2 mt-4 text-sm">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Button variant={"secondary"}>
                    <Icon size={16} />
                  </Button>
                </a>
              ))}
            </div>

            <Link to="/contact" className="mt-3 block">
              <Button>
                Let's build something <MoveRight />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 pb-6 border-t text-sm text-muted-foreground gap-2">
          <p className="flex items-center gap-3 whitespace-nowrap">
            &copy; {(new Date()).getFullYear()} Yash Agrawal{" "}
            <span>&middot;</span> Vadodara, Gujarat
          </p>

          <p>Software Engineer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
