import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-rule">
    <div className="container flex flex-col gap-3 py-8 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul className="flex gap-5">
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            Email
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
