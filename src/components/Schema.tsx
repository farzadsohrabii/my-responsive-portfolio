export default function Schema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'فرزاد سهرابی',
    alternateName: ["Farzad Sohrabi", "فرزاد", "فرزاد سهرابی" ],
    url: 'https://farzadsohrabi.site',
    image: 'https://yourdomain.com/farzad-photo.jpg', // آدرس عکس پروفایلت
    jobTitle: 'Frontend Developer',
    description: 'طراح و توسعه‌دهنده فرانت‌اِند متخصص در React و Next.js',
    sameAs: [
      'https://github.com/your-username',
      'https://linkedin.com/in/your-username',
      'https://instagram.com/your-username'
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
