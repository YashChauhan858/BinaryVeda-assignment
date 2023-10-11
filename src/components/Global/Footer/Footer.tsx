import marvelLogo from "@/assets/logo-white.svg";

const Footer = () => {
  return (
    <footer className="p-5 mt-10 pb-10 flex flex-col gap-5 md:flex-row md:justify-center md:gap-1 md:w-[90%] md:mx-auto">
      <img
        src={marvelLogo}
        alt="marvel-logo"
        className="h-8 object-contain mr-auto md:mr-5"
      />
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex gap-5">
          <div className="flex flex-col gap-4 w-40">
            {/* sm < */}
            <h4 className="text-textColor text-lg font-semibold sm:hidden">
              Platform
            </h4>
            <ul className="list-none p-0 flex flex-col gap-4 sm:hidden">
              <li className="text-textColorMuted text-sm">
                <a>Why Marvel</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Enterprice</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Mobile Apps</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Pricing</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Developer API</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Marvel vs InVision</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Marvel vs Zepli</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Marvel for Finance</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Marvel for Consultancies</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Marvel for Agencies</a>
              </li>
            </ul>
            {/* sm > */}
            <h4 className="hidden sm:block text-textColor text-lg font-semibold">
              Overview
            </h4>
            <ul className="hidden  list-none p-0 sm:flex flex-col gap-4">
              <li className="text-textColorMuted text-sm">
                <a>Why Marvel</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Enterprice</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Pricing</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Request a demo</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Explore</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Apps</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Developer API</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-40">
            <h4 className="text-textColor text-lg font-semibold">Features</h4>
            {/* sm < */}
            <ul className="list-none p-0 flex flex-col gap-4 sm:hidden">
              <li className="text-textColorMuted text-sm">
                <a>Design</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Wireframing</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Prototype</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Handoff</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>User Testing</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Collaboration</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Integrations</a>
              </li>
            </ul>
            {/* sm > */}
            <ul className="hidden list-none p-0 sm:flex flex-col gap-4">
              <li className="text-textColorMuted text-sm">
                <a>Wireframing</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Design</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Prototype</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Collaboration</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Handoff</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Integrations</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Sketch Plugin</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row sm:flex-wrap gap-5">
          <div className="flex flex-col gap-4 w-40">
            <h4 className="text-textColor text-lg font-semibold">Support</h4>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li className="text-textColorMuted text-sm">
                <a>Help Center</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Terms of Service</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Privacy</a>
              </li>
              <li className="text-textColorMuted text-sm sm:hidden">
                <a>Status</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Security</a>
              </li>
              <li className="text-textColorMuted text-sm sm:hidden">
                <a>Resources</a>
              </li>
              <li className="text-textColorMuted text-sm sm:hidden">
                <a>Design Glossary</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-40 sm:hidden">
            <h4 className="text-textColor text-lg font-semibold">Company</h4>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li className="text-textColorMuted text-sm">
                <a>Blog</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>About us</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Jobs</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Contact us</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Customer Stories</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Labs</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Careers</a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:flex sm:flex-col gap-4 w-40">
            <h4 className="text-textColor text-lg font-semibold">Marvel</h4>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li className="text-textColorMuted text-sm">
                <a>Blog</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Our Team</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Contact Us</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Success Stories</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Brand Guidelines</a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:flex sm:flex-col gap-4 w-40">
            <h4 className="text-textColor text-lg font-semibold">Follow</h4>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li className="text-textColorMuted text-sm">
                <a>Twitter</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Dribble</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Facebook</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Github</a>
              </li>
              <li className="text-textColorMuted text-sm">
                <a>Workable</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
