import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import ImageWithTextOverlay from './components/ImageWithTextOverlay'
import BrandMission from './components/BrandMission'
import MediaGrid from './components/MediaGrid'
import ScrollingContent from './components/ScrollingContent'
import FeaturedCollection from './components/FeaturedCollection'
import VideoShowcase from './components/VideoShowcase'
import OurLooks from './components/OurLooks'
import CountdownDisplay from './components/CountdownDisplay'
import Collaboration from './components/CollaborationSection'
import ColorComparison from './components/ColorComparison'
import HomeScrollSections from './components/HomeScrollSections'
import BlogSection from './components/BlogSection'
import FeaturedProduct from './components/FeaturedProduct'
import MaterialsSection from './components/MaterialsSection'
import PressQuotes from './components/PressQuotes'
import TimelineSection from './components/TimelineSection'
import CoupleSection from './components/CoupleSection'
import NewsletterCinematic from './components/NewsletterCinematic'
import SocialFeed from './components/SocialFeed'
import FromAToZ from './components/FromAToZ'
import TrustSignals from './components/TrustSignals'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <div className="reveal">
          <BestSellers />
        </div>
        <div className="reveal">
          <ImageWithTextOverlay />
        </div>
        <div className="reveal">
          <BrandMission />
        </div>
        <div className="reveal">
          <MediaGrid />
        </div>
        <div className="reveal">
          <ScrollingContent />
        </div>
        <div className="reveal">
          <FeaturedCollection />
        </div>
        <div className="reveal">
          <VideoShowcase />
        </div>
        <div className="reveal">
          <OurLooks />
        </div>
        <div className="reveal">
          <CountdownDisplay />
        </div>
        <div className="reveal">
          <Collaboration />
        </div>
        <div className="reveal">
          <ColorComparison />
        </div>
        <div className="reveal">
          <HomeScrollSections />
        </div>
        <div className="reveal">
          <BlogSection />
        </div>
        <div className="reveal">
          <FeaturedProduct />
        </div>

        <MaterialsSection />
        <PressQuotes />
        <TimelineSection />
        <CoupleSection />

        <div className="reveal">
          <FromAToZ />
        </div>

        <div className="reveal">
          <NewsletterCinematic />
        </div>
        <div className="reveal">
          <SocialFeed />
        </div>
        <div className="reveal">
          <TrustSignals />
        </div>
      </main >
      <Footer />
    </div >
  )
}

export default App
