import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

const blogData: Record<string, BlogPost> = {
  'best-football-boots-bangladesh-2026': {
    slug: 'best-football-boots-bangladesh-2026',
    title: 'Best Football Boots in Bangladesh for 2026',
    excerpt: 'Discover the top football boots available in Bangladesh this year, from speed boots to control silos.',
    content: `
      <h2>The Elite Tier of Football Footwear</h2>
      <p>As football continues to grow across Bangladesh, players are increasingly demanding high-performance gear. Whether you are playing in a professional league or local tournaments in Rajshahi and Dhaka, the boots you wear can dictate your game.</p>
      
      <h3>Adidas F50: The Speed Demon</h3>
      <p>The F50 Elite is back and better than ever. For wingers looking to burst past defenders, the lightweight Sprintframe offers unmatched propulsion. It is one of the most requested <strong>adidas football boots Bangladesh</strong> has seen this year.</p>

      <h3>Nike Mercurial: The Ultimate Forward's Choice</h3>
      <p>Nike continues to dominate with the Mercurial series. With a tight, barefoot feel, the Vapor and Superfly models provide the traction necessary for sharp cuts and explosive speed.</p>

      <h2>Where to Buy Authentic Boots?</h2>
      <p>Counterfeit boots are unfortunately common. To ensure you get the real deal, trust established retailers like <strong>Dadu Khelaghor</strong>, the most reliable <strong>football shop Bangladesh</strong> has to offer.</p>
    `,
    date: '2026-05-15',
    author: 'Ahsanul Haque Siam',
    image: '/images/og-image.png'
  },
  'adidas-f50-review': {
    slug: 'adidas-f50-review',
    title: 'Adidas F50 Review: Is it worth the hype?',
    excerpt: 'An in-depth review of the newly released Adidas F50 Elite football boots.',
    content: `
      <h2>Return of a Legend</h2>
      <p>The F50 name carries a lot of weight. Worn by legends, the new F50 Elite aims to recapture the magic of the early 2010s. In our testing across various pitches in Rajshahi, the boot performed exceptionally well.</p>
      
      <h3>Fit and Feel</h3>
      <p>The upper is remarkably thin, providing a very close touch on the ball. It is an ideal boot for dribblers and speedsters.</p>

      <p>Looking to <strong>buy football boots online Bangladesh</strong>? Check out our <a href="/products/adidas-f50-elite">Adidas F50 product page</a> to get yours today.</p>
    `,
    date: '2026-06-01',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  },
  'best-goalkeeper-gloves': {
    slug: 'best-goalkeeper-gloves',
    title: 'Top Goalkeeper Gloves in Bangladesh',
    excerpt: 'A guide to finding the best grip and protection for goalkeepers.',
    content: `
      <h2>Protecting the Net</h2>
      <p>A goalkeeper is only as good as their grip. When looking for <strong>goalkeeper gloves Bangladesh</strong>, you need to consider the latex type, cut, and finger protection.</p>
      <p>At Dadu Khelaghor, we stock professional-grade gloves that provide 4mm contact latex, ensuring you can catch even the most powerful shots in wet or dry conditions.</p>
    `,
    date: '2026-06-10',
    author: 'Ahsanul Haque Siam',
    image: '/images/og-image.png'
  },
  'football-boot-size-guide': {
    slug: 'football-boot-size-guide',
    title: 'The Ultimate Football Boot Size Guide',
    excerpt: 'How to ensure you get the perfect fit when buying football boots online.',
    content: `
      <h2>Finding Your Perfect Fit</h2>
      <p>Buying <strong>football shoes in Bangladesh</strong> online can be tricky. Here is how to get it right:</p>
      <ul>
        <li>Measure your foot length in centimeters.</li>
        <li>Check the brand's specific size chart (Nike and Adidas differ slightly).</li>
        <li>Consider the upper material: leather stretches, synthetic does not.</li>
        <li>Leave about a thumb's width of space at the toe.</li>
      </ul>
    `,
    date: '2026-06-20',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  },
  'best-turf-shoes': {
    slug: 'best-turf-shoes',
    title: 'Best Turf and Futsal Shoes in Bangladesh',
    excerpt: 'With the rise of artificial turf fields, what are the best shoes to wear?',
    content: `
      <h2>The Rise of Futsal and Turf</h2>
      <p>Artificial grass (AG) and turf (TF) fields are popping up everywhere. Wearing Firm Ground (FG) boots on these surfaces is dangerous and ruins the boots. You need specialized <strong>futsal shoes Bangladesh</strong>.</p>
      <p>Look for shoes with many small rubber studs for turf, or flat rubber soles for indoor futsal courts.</p>
    `,
    date: '2026-06-25',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  },
  'football-accessories-bangladesh': {
    slug: 'football-accessories-bangladesh',
    title: 'Essential Football Accessories Every Player Needs',
    excerpt: 'Beyond the boots: shin guards, grip socks, and more.',
    content: `
      <h2>Complete Your Kit</h2>
      <p>Boots are just the beginning. To perform at your peak, you need the right <strong>football accessories Bangladesh</strong> has available.</p>
      <p>Grip socks prevent your foot from sliding inside the boot, reducing blisters and improving energy transfer. High-quality shin guards are non-negotiable for protection. Find all of these at Dadu Khelaghor.</p>
    `,
    date: '2026-06-27',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogData[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Dadu Khelaghor Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://dadubd.com/blog/${post.slug}`,
    }
  };
}

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug];

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      `https://dadubd.com${post.image}`
    ],
    "datePublished": `${post.date}T08:00:00+08:00`,
    "dateModified": `${post.date}T08:00:00+08:00`,
    "author": [{
        "@type": "Person",
        "name": post.author,
        "url": "https://dadubd.com/#about"
      }]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dadubd.com/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://dadubd.com/blog"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": post.title
    }]
  };

  return (
    <main style={{ padding: '100px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div style={{ marginBottom: '40px' }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 10px' }}>&gt;</span>
        <span style={{ color: '#666' }}>Blog</span>
        <span style={{ margin: '0 10px' }}>&gt;</span>
        <span style={{ fontWeight: 'bold' }}>{post.title}</span>
      </div>

      <article>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.2' }}>{post.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', color: '#666' }}>
          <span>By {post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        
        <img 
          src={post.image} 
          alt={post.title} 
          style={{ width: '100%', borderRadius: '12px', marginBottom: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        
        <div 
          className="blog-content"
          style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text)' }}
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <div style={{ marginTop: '60px', padding: '30px', backgroundColor: '#f5f5f5', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '15px' }}>Ready to upgrade your gear?</h3>
        <p style={{ marginBottom: '20px' }}>Browse our selection of premium football boots and accessories.</p>
        <Link href="/#products" className="primaryButton" style={{ display: 'inline-flex' }}>
          Shop Now
        </Link>
      </div>
    </main>
  );
}
