import Container from "../layout/Container";
import Section from "../layout/Section";
import SocialIcons from "../ui/SocialIcons";
import { footer, socialLinks } from "../../data/content";

const Footer = () => {
  return (
    <Section id="footer" variant="dark" padding="md">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-burgundy-700 border-2 border-gold-500">
                <span className="text-gold-400 text-2xl font-serif italic">
                  V
                </span>
              </div>
              <span className="font-serif text-xl font-semibold tracking-wider text-cream-50">
                VASTRAANI
              </span>
            </div>
            <p className="text-cream-200 mb-4 font-serif italic">
              {footer.tagline}
            </p>
            <SocialIcons links={socialLinks} color="light" />
          </div>

          {/* Footer Sections */}
          {footer.sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-serif text-lg font-semibold text-cream-50 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-cream-200 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-cream-200/20 pt-8 text-center">
          <p className="text-cream-300 text-sm tracking-wider">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
