document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('nav-placeholder');
  if (!navContainer) return;

  const navLinks = [
    { href: 'index.html', text: 'Home' },
    { href: 'about.html', text: 'About Me' },
    { href: 'projects.html', text: 'Projects' },
    {
      href: 'https://www.linkedin.com/in/martinthomasgold',
      text: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true" role="img">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.85-3.036-1.852 0-2.134 1.445-2.134 2.939v5.666H9.36V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.605 0 4.271 2.372 4.271 5.455v6.286zM5.337 7.433a2.07 2.07 0 1 1 0-4.141 2.07 2.07 0 0 1 0 4.141zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .792 0 1.77v20.451C0 23.208.792 24 1.77 24h20.451c.978 0 1.778-.792 1.778-1.778V1.77C24 .792 23.208 0 22.225 0z"/>
             </svg>`,
      external: true,
      className: 'linkedin-icon'
    }
  ];

  let navHTML = '<nav><ul class="nav-list">';
  
  navLinks.forEach(link => {
    let classActive = '';
    if (!link.external) {
      if (
        window.location.pathname.endsWith(link.href) ||
        (window.location.pathname === '/' && link.href === 'index.html')
      ) {
        classActive = 'active';
      }
      // Highlight Projects tab on projects.html or project detail pages
      if (
        link.href === 'projects.html' &&
        (window.location.pathname.endsWith('projects.html') ||
          /project[1-3]\.html$/.test(window.location.pathname))
      ) {
        classActive = 'active';
      }
    }
    
    const target = link.external ? '_blank' : '_self';
    const rel = link.external ? 'noopener noreferrer' : '';
    const classNames = [classActive, link.className].filter(Boolean).join(' ');
    const ariaLabel = link.external ? 'aria-label="LinkedIn Profile"' : '';
    
    navHTML += `<li class="nav-item">
      <a href="${link.href}" class="${classNames}" target="${target}" rel="${rel}" ${ariaLabel}>
        ${link.text}
      </a>
    </li>`;
  });

  navHTML += '</ul></nav>';
  navContainer.innerHTML = navHTML;
});
