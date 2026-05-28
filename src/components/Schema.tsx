export default function Schema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'فرزاد سهرابی',
    alternateName: ["Farzad Sohrabi", "فرزاد", "فرزاد سهرابی" ],
    url: 'https://farzadsohrabi.site',
    image: 'https://www.farzadsohrabi.site/MobileHome.jpg', // آدرس عکس پروفایلت
    jobTitle: 'Frontend Developer',
    description: "فرزاد سهرابی، طراح و توسعه‌دهنده فرانت‌اند متخصص در React و Next.js. | Farzad Sohrabi, a professional Frontend Developer and Designer specializing in modern web technologies.",
    sameAs: [
      'https://github.com/farzadsohrabii',
      'https://instagram.com/frrrrrrrrrrrrrrrrrrrrrri'
    ],
    knowsAbout: [
      'Frontend Development',
      'Web Design',
      'React',
      'Next.js',
      'UI/UX'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
