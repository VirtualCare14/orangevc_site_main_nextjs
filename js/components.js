/* Orange Virtual Connect - React Components (Hero Social Card & Footer Social Links) */
(function() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "MessageCircle",
      url: "https://wa.me/919310557136"
    },
    {
      name: "Facebook",
      icon: "Facebook",
      url: "https://facebook.com/orangevirtualconnect"
    },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://instagram.com/orangevirtualconnect"
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/mukesh-sharma-5b57a0394"
    },
    {
      name: "Threads",
      icon: "AtSign",
      url: "https://www.threads.net/@orangevirtualconnect"
    },
    {
      name: "X",
      icon: "Twitter",
      url: "https://x.com/OVconnect"
    },
    {
      name: "YouTube",
      icon: "Youtube",
      url: "https://youtube.com/@orangevirtualconnect"
    }
  ];

  // Helper component to safely render Lucide / SVG icons
  const SocialIcon = ({ name, iconName, size = 20, className = "" }) => {
    // Check if lucideReact component is available globally
    if (window.lucideReact && (window.lucideReact[iconName] || window.lucideReact[name])) {
      const LucideComp = window.lucideReact[iconName] || window.lucideReact[name];
      return React.createElement(LucideComp, { size, className });
    }

    // High quality SVG fallback for 100% reliability
    const svgProps = {
      width: size,
      height: size,
      className: className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      viewBox: "0 0 24 24"
    };

    let pathContent = null;
    switch (iconName) {
      case "MessageCircle": // WhatsApp
        pathContent = React.createElement("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z" });
        break;
      case "Facebook":
        pathContent = React.createElement("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" });
        break;
      case "Instagram":
        pathContent = React.createElement(React.Fragment, null,
          React.createElement("rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }),
          React.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
          React.createElement("line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" })
        );
        break;
      case "Linkedin":
        pathContent = React.createElement(React.Fragment, null,
          React.createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
          React.createElement("rect", { width: "4", height: "12", x: "2", y: "9" }),
          React.createElement("circle", { cx: "4", cy: "4", r: "2" })
        );
        break;
      case "AtSign": // Threads
        pathContent = React.createElement(React.Fragment, null,
          React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
          React.createElement("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
        );
        break;
      case "Twitter": // X
        pathContent = React.createElement("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" });
        break;
      case "Youtube":
        pathContent = React.createElement(React.Fragment, null,
          React.createElement("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
          React.createElement("polygon", { points: "10 15 15 12 10 9 10 15" })
        );
        break;
      default:
        return null;
    }

    return React.createElement("svg", svgProps, pathContent);
  };

  // Reusable SocialLinks component
  const SocialLinks = ({ variant = "hero" }) => {
    if (variant === "footer") {
      return React.createElement(
        "div",
        { className: "flex flex-wrap items-center gap-[12px]" },
        socialLinks.map(function(item) {
          return React.createElement(
            "a",
            {
              key: item.name,
              href: item.url,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": item.name,
              className: "w-[36px] h-[36px] rounded-full bg-[#1F242D] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#FF6A00] hover:text-white hover:-translate-y-[3px] shadow-sm hover:shadow-md cursor-pointer"
            },
            React.createElement(SocialIcon, { name: item.name, iconName: item.icon, size: 16 })
          );
        })
      );
    }

    // Hero Variant
    return React.createElement(
      "div",
      { className: "flex flex-row flex-wrap justify-center sm:justify-start items-center gap-3" },
      socialLinks.map(function(item) {
        return React.createElement(
          "div",
          { key: item.name, className: "group relative" },
          React.createElement(
            "a",
            {
              href: item.url,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": item.name,
              className: "w-[48px] h-[48px] rounded-full bg-white border border-[#F3F3F3] text-slate-700 flex items-center justify-center transition-all duration-300 hover:border-[#FF6A00] hover:text-[#FF6A00] hover:scale-[1.08] shadow-sm hover:shadow-md cursor-pointer"
            },
            React.createElement(SocialIcon, { name: item.name, iconName: item.icon, size: 20 })
          ),
          React.createElement(
            "span",
            { className: "absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-[11px] font-medium py-1 px-2.5 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20" },
            item.name
          )
        );
      })
    );
  };

  // Floating Hero Social Block Component
  const HeroSocialCard = () => {
    return React.createElement(
      "div",
      { className: "my-6 p-5 sm:p-6 bg-white/90 backdrop-blur-md border border-[#F3F3F3] rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left relative overflow-hidden" },
      React.createElement("div", { className: "absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF6A00] via-[#FF8C38] to-transparent" }),
      React.createElement(
        "div",
        { className: "mb-4" },
        React.createElement(
          "div",
          { className: "flex items-center gap-2" },
          React.createElement("span", { className: "w-2 h-2 rounded-full bg-[#FF6A00]" }),
          React.createElement("h4", { className: "text-base font-semibold text-slate-900 tracking-tight m-0 font-sans" }, "Stay Connected")
        ),
        React.createElement("p", { className: "text-xs text-slate-500 font-normal m-0 mt-1 font-sans" }, "Follow Orange Virtual Connect")
      ),
      React.createElement(SocialLinks, { variant: "hero" })
    );
  };

  // Mount components when DOM is ready
  function initSocialComponents() {
    var heroRoot = document.getElementById("hero-social-root");
    if (heroRoot && window.ReactDOM) {
      if (window.ReactDOM.createRoot) {
        window.ReactDOM.createRoot(heroRoot).render(React.createElement(HeroSocialCard));
      } else {
        window.ReactDOM.render(React.createElement(HeroSocialCard), heroRoot);
      }
    }

    var footerRoots = document.querySelectorAll(".footer-social-root");
    footerRoots.forEach(function(footerRoot) {
      if (footerRoot && window.ReactDOM) {
        if (window.ReactDOM.createRoot) {
          window.ReactDOM.createRoot(footerRoot).render(React.createElement(SocialLinks, { variant: "footer" }));
        } else {
          window.ReactDOM.render(React.createElement(SocialLinks, { variant: "footer" }), footerRoot);
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSocialComponents);
  } else {
    initSocialComponents();
  }
})();
