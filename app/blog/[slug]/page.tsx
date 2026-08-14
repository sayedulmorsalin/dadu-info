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
  'football-boots-price-in-bangladesh': {
    slug: 'football-boots-price-in-bangladesh',
    title: 'Football Boots Price in Bangladesh (2026 Buying Guide)',
    excerpt: 'Detailed price guide for football boots in Bangladesh. Compare prices for original Adidas F50, Nike Mercurial, Puma, and futsal shoes.',
    content: `
      <h2>Football Boots Price Range in Bangladesh</h2>
      <p>Whether you are searching for <strong>football boots price in bangladesh</strong>, <strong>adidas football boots price in bangladesh</strong>, or <strong>nike mercurial boots price in bd</strong>, knowing current market rates helps you budget effectively for authentic footwear.</p>

      <h3>Average Price Breakdown in BD:</h3>
      <ul>
        <li><strong>Entry-Level / Training Cleats:</strong> BDT 1,800 – BDT 3,500</li>
        <li><strong>Mid-Tier Performance Boots:</strong> BDT 3,800 – BDT 7,500</li>
        <li><strong>Elite Professional Silos (Adidas F50, Nike Vapor):</strong> BDT 8,000 – BDT 15,000+</li>
        <li><strong>Turf & Futsal Shoes:</strong> BDT 2,200 – BDT 5,500</li>
      </ul>

      <h2>Why Buy Original Football Boots in Bangladesh?</h2>
      <p>While low-quality copies exist, investing in authentic boots from a trusted <strong>sports shop in bangladesh</strong> like <strong>Dadu Khelaghor</strong> ensures soleplate stability, ankle protection, superior ball control, and long-lasting durability.</p>

      <h2>How to Order via Cash on Delivery?</h2>
      <p>At Dadu Khelaghor, you can easily check live prices, view product video reviews on TikTok and Facebook, and order via WhatsApp with nationwide Cash on Delivery across all 64 districts in BD.</p>
    `,
    date: '2026-07-05',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  },
  'online-sports-shop-bangladesh': {
    slug: 'online-sports-shop-bangladesh',
    title: 'Top Online Sports Shop in Bangladesh with Cash on Delivery',
    excerpt: 'Discover why Dadu Khelaghor is the best online sports shop in Bangladesh for authentic football boots, gloves, and sports items.',
    content: `
      <h2>The Growth of Online Sports Shopping in BD</h2>
      <p>Finding a reliable <strong>online sports shop bangladesh</strong> has revolutionized how athletes purchase sports equipment. Instead of navigating busy markets in Stadium Market Dhaka or Shaheb Bazar Rajshahi, players can browse verified items from home.</p>

      <h2>Key Features of Dadu Khelaghor Online Store</h2>
      <ul>
        <li><strong>Comprehensive Product Catalog:</strong> Original football boots, professional goalkeeper gloves, and complete kit bundles.</li>
        <li><strong>WhatsApp & Mobile App Support:</strong> Order directly through the Dadu App or converse with dedicated WhatsApp moderators.</li>
        <li><strong>Full Cash on Delivery (COD):</strong> Pay only when your sports gear arrives safely at your address.</li>
      </ul>

      <h2>Why We Are Ranked the Best Sports Item Shop in Bangladesh</h2>
      <p>With thousands of positive reviews across Facebook and YouTube, Dadu Khelaghor is recognized as a premier <strong>sports item shop bangladesh</strong> for genuine quality and fast customer support.</p>
    `,
    date: '2026-07-10',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  },
  'best-sports-shop-in-dhaka-rajshahi': {
    slug: 'best-sports-shop-in-dhaka-rajshahi',
    title: 'Best Sports Shops in Bangladesh: Dhaka, Rajshahi & Nationwide',
    excerpt: 'Looking for a sports shop in Dhaka or Rajshahi? Learn how Dadu Khelaghor delivers authentic sports gear nationwide.',
    content: `
      <h2>Finding a Sports Shop in Dhaka, Rajshahi & Major Cities</h2>
      <p>Whether you reside in Dhaka, Rajshahi, Chittagong, Sylhet, or Khulna, accessing top-grade football gear can sometimes be limited by local stock. Dadu Khelaghor bridges this gap as a nationwide <strong>sports shop in bangladesh</strong> hub.</p>

      <h3>Serving Footballers in Rajshahi</h3>
      <p>Headquartered in Shaheb Bazar, Rajshahi, Dadu Khelaghor is the iconic local destination for <strong>football boot Rajshahi</strong> enthusiasts seeking original cleats and goalkeeper gloves.</p>

      <h3>Fast Express Shipping to Dhaka & All Districts</h3>
      <p>If you are looking for a <strong>sports shop in dhaka</strong> with guaranteed authentic stock, Dadu Khelaghor ships express parcels directly to Dhaka city within 24–48 hours with Cash on Delivery support.</p>
    `,
    date: '2026-07-15',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  },
  'top-10-sports-shops-in-bangladesh': {
    slug: 'top-10-sports-shops-in-bangladesh',
    title: 'Top 10 Sports Shops in Bangladesh for Authentic Sports Gear (2026)',
    excerpt: 'Looking for a sport shop in Bangladesh? Discover the top sports shops in Bangladesh, led by Dadu Khelaghor for authentic football boots and gear.',
    content: `
      <h2>Finding the Best Sport Shop in Bangladesh</h2>
      <p>Whether you are a professional footballer, amateur athlete, or sports enthusiast, finding a reliable <strong>sport shop in bangladesh</strong> is crucial for getting genuine quality equipment. With numerous retailers in Dhaka, Rajshahi, Chittagong, and online platforms, knowing which sports shop delivers authentic items, competitive prices, and excellent customer support makes all the difference.</p>

      <h2>Why Dadu Khelaghor Leads the Top 10 Sports Shops in Bangladesh</h2>
      <p>When athletes search for the <strong>top sports shop in bangladesh</strong> or the <strong>top 10 sports shop in bangladesh</strong>, <strong>Dadu Khelaghor (দাদু খেলাঘর)</strong> consistently tops the recommendation lists. Here is why:</p>
      
      <ul>
        <li><strong>100% Authentic Football Boots:</strong> Direct access to top silos including Adidas F50 Elite, Predator Accuracy, and Nike Mercurial.</li>
        <li><strong>Professional Goalkeeper Equipment:</strong> High-grade latex gloves designed for wet and dry turf performance.</li>
        <li><strong>Seamless Ordering via WhatsApp & App:</strong> Browse video reviews on TikTok and Facebook, then order directly with instant moderator response.</li>
        <li><strong>Nationwide Cash on Delivery (COD):</strong> Fast shipping across all 64 districts in Bangladesh with complete safety.</li>
        <li><strong>Trusted Reputation:</strong> Over 50,000+ satisfied players across the country.</li>
      </ul>

      <h2>What to Look for in a Top Sports Shop in Bangladesh?</h2>
      <p>Before buying sports gear online or in person, evaluate these key factors:</p>
      <ol>
        <li><strong>Product Verification & Transparency:</strong> Ensure the shop provides real product photos and unboxing videos.</li>
        <li><strong>Flexible Payment & COD Options:</strong> A top sports shop will offer Cash on Delivery so you can inspect your package upon delivery.</li>
        <li><strong>Customer Support & Sizing Assistance:</strong> Reliable shops assist you in picking exact sizes for football boots and gloves.</li>
      </ol>

      <h2>Summary</h2>
      <p>If you are searching for a <strong>sport shop in bangladesh</strong> that guarantees original quality and fast delivery, Dadu Khelaghor is your ultimate destination. Explore our products today or contact our team via WhatsApp to get expert advice!</p>
    `,
    date: '2026-07-01',
    author: 'Dadu Khelaghor Team',
    image: '/images/og-image.png'
  },
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
