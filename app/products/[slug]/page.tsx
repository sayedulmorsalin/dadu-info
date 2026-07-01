import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  faqs: { q: string; a: string }[];
}

const productsData: Record<string, Product> = {
  'adidas-f50-elite': {
    slug: 'adidas-f50-elite',
    name: 'Adidas F50 Elite',
    description: 'The Adidas F50 Elite is designed for speed. Featuring a lightweight Sprintframe and premium synthetic upper, these football boots provide exceptional touch and acceleration on firm ground surfaces. Perfect for wingers and attackers looking for an edge in Bangladesh.',
    price: 12500,
    image: '/images/og-image.png',
    brand: 'Adidas',
    category: 'Football Boots',
    inStock: true,
    rating: 4.8,
    reviewCount: 42,
    faqs: [
      { q: "Is the Adidas F50 Elite good for wide feet?", a: "The F50 Elite has a snug fit tailored for speed, so players with very wide feet might need to size up." },
      { q: "Can I use these on artificial turf?", a: "These are primarily designed for firm ground (FG) natural grass. Using them on turf may void the warranty and lead to faster wear." }
    ]
  },
  'predator-accuracy': {
    slug: 'predator-accuracy',
    name: 'Adidas Predator Accuracy',
    description: 'Dominate the midfield with the Adidas Predator Accuracy. Engineered with High Definition Grip technology across the strike zone, these boots deliver pinpoint passing and lethal shooting. A favorite among playmakers.',
    price: 13000,
    image: '/images/og-image.png',
    brand: 'Adidas',
    category: 'Football Boots',
    inStock: true,
    rating: 4.9,
    reviewCount: 56,
    faqs: [
      { q: "What surface is the Predator Accuracy for?", a: "These are suitable for firm ground natural grass surfaces." }
    ]
  },
  'nike-mercurial': {
    slug: 'nike-mercurial',
    name: 'Nike Mercurial Superfly',
    description: 'The Nike Mercurial Superfly offers a seamless fit with its Flyknit upper and dynamic fit collar. Built for explosive speed and sharp changes of direction, it is the ultimate boot for aggressive forwards.',
    price: 14500,
    image: '/images/og-image.png',
    brand: 'Nike',
    category: 'Football Boots',
    inStock: true,
    rating: 4.7,
    reviewCount: 38,
    faqs: [
      { q: "How is the sizing on the Mercurial?", a: "They run true to size but offer a very tight, one-to-one fit." }
    ]
  },
  'gloves': {
    slug: 'gloves',
    name: 'Pro Goalkeeper Gloves',
    description: 'Premium goalkeeper gloves featuring 4mm contact latex for incredible grip in all weather conditions. Includes finger save protection and an elasticated wrist strap for secure fit.',
    price: 3500,
    image: '/images/og-image.png',
    brand: 'Dadu Pro',
    category: 'Goalkeeper Gloves',
    inStock: true,
    rating: 4.6,
    reviewCount: 24,
    faqs: [
      { q: "Do these gloves have finger protection?", a: "Yes, they include removable finger spines for added protection." }
    ]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = productsData[params.slug];
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Buy Online in Bangladesh`,
    description: product.description,
    alternates: {
      canonical: `https://dadubd.com/products/${product.slug}`,
    }
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug];

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://dadubd.com${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "url": `https://dadubd.com/products/${product.slug}`,
      "priceCurrency": "BDT",
      "price": product.price,
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
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
      "name": product.category,
      "item": "https://dadubd.com/#products"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": product.name
    }]
  };

  return (
    <main style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div style={{ marginBottom: '20px' }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 10px' }}>&gt;</span>
        <span style={{ color: '#666' }}>{product.category}</span>
        <span style={{ margin: '0 10px' }}>&gt;</span>
        <span style={{ fontWeight: 'bold' }}>{product.name}</span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '40px' }}>
        <div style={{ flex: '1 1 400px' }}>
          <img 
            src={product.image} 
            alt={`${product.name} football boots in Bangladesh`} 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
        </div>
        
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★ {product.rating}</span>
            <span style={{ color: '#666' }}>({product.reviewCount} reviews)</span>
          </div>
          
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '20px' }}>
            BDT {product.price.toLocaleString()}
          </p>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
            {product.description}
          </p>
          
          <a href="https://wa.me/8801787208108" target="_blank" rel="noopener noreferrer" className="primaryButton" style={{ padding: '15px 30px', fontSize: '1.2rem', display: 'inline-block' }}>
            Order via WhatsApp
          </a>
        </div>
      </div>

      {product.faqs.length > 0 && (
        <div style={{ marginTop: '60px' }}>
          <h2>Frequently Asked Questions</h2>
          <div style={{ marginTop: '20px', display: 'grid', gap: '20px' }}>
            {product.faqs.map((faq, index) => (
              <div key={index} style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', color: 'var(--text)' }}>
                <h3 style={{ marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ opacity: 0.8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
