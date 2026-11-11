export const siteUrl = 'https://www.primemagnuscareglobal.com';

const pages = {
  '/': ['Hospital Operations & Performance Advisory', 'PrimeMagnus Care Global helps hospitals improve operational performance, strengthen revenue integrity and adopt practical digital and AI solutions.'],
  '/about': ['About PrimeMagnus Care Global', 'Learn how PrimeMagnus Care Global assesses, strengthens and sustains hospital performance through practical healthcare advisory.'],
  '/services': ['Hospital Advisory Services', 'Explore hospital operations, revenue integrity, healthcare governance and accreditation, digital transformation and international patient programme advisory.'],
  '/digital-ai': ['Digital Transformation & AI in Healthcare', 'Explore practical digital and AI opportunities in hospital workflows, operational reporting, patient access and coordination.'],
  '/international-healthcare': ['International Patient Programmes & Medical Value Travel', 'Build structured international patient programmes with support for patient coordination, hospital readiness and medical value travel.'],
  '/case-studies': ['Healthcare Advisory Case Studies', 'Explore examples of hospital revenue integrity, operational performance and healthcare governance in India, the UAE and the UK.'],
  '/contact': ['Contact & Book a Consultation', 'Contact PrimeMagnus Care Global to discuss your hospital’s priorities or request a healthcare advisory consultation.'],
};

export const publicPaths = Object.keys(pages);

export function getPageMetadata(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const canonicalPath = path === '/operate' ? '/about' : path;
  const page = Object.hasOwn(pages, canonicalPath) ? pages[canonicalPath] : null;
  if (!page) return null;

  return {
    title: `${page[0]} | PrimeMagnus Care Global`,
    description: page[1],
    canonical: canonicalPath === '/' ? `${siteUrl}/` : `${siteUrl}${canonicalPath}/`,
  };
}
