"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Users, Award, TrendingUp, BookOpen, Phone, Fish } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="floatingGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Fishing Tips", id: "features" },
            { name: "Our Team", id: "team" },
            { name: "Join Us", id: "contact" }
          ]}
          brandName="Pirat"
          bottomLeftText="Fishing Community"
          bottomRightText="hello@piratfishingclub.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Welcome to Pirat Fishing Club"
          description="Join the most passionate fishing community. Share expertise, catch legendary fish, and build lifelong friendships on the water."
          background={{ variant: "rotated-rays-animated-grid" }}
          tag="Adventure Awaits"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Join Our Club", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "carousel-1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gb48u7", imageAlt: "professional fisherman catching large fish" },
            { id: "carousel-2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4fcqk1", imageAlt: "fishing boat on peaceful water" },
            { id: "carousel-3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=a2e7ct", imageAlt: "fishing group team celebration" },
            { id: "carousel-4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jwz7sl", imageAlt: "fishing tackle equipment organized" },
            { id: "carousel-5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qajh2n", imageAlt: "underwater fish movement water" },
            { id: "carousel-6", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rff6j7", imageAlt: "fishing at river flowing water" }
          ]}
          autoPlay={true}
          autoPlayInterval={5000}
          ariaLabel="Hero section with fishing carousel"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Who We Are"
          tagIcon={Users}
          tagAnimation="blur-reveal"
          title="Pirat Fishing Club - Your Gateway to Fishing Excellence"
          description="Founded in 2010, Pirat Fishing Club has been uniting passionate anglers from all skill levels. We believe in the power of community, knowledge sharing, and the thrill of the catch."
          subdescription="With over 500 active members, weekly fishing expeditions, and expert-led training sessions, we're more than just a club—we're a family dedicated to preserving fishing traditions while embracing modern techniques."
          icon={Fish}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ff2ye8"
          imageAlt="Pirat Fishing Club members gathered together"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="About Pirat Fishing Club"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Why Join Pirat?"
          description="We offer comprehensive fishing experiences designed for anglers of all levels."
          tag="Our Expertise"
          tagIcon={Award}
          tagAnimation="opacity"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              title: "Expert Guidance",              description: "Learn from certified fishing instructors with decades of combined experience. Master casting techniques, fish identification, and water safety.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fqhasi",              imageAlt: "Fishing instruction and technique training"
            },
            {
              id: 2,
              title: "Exclusive Expeditions",              description: "Access premium fishing locations and seasonal expeditions to the best fishing spots. Join guided trips to rivers, lakes, and coastal waters.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=prorda",              imageAlt: "Fishing boat expedition"
            },
            {
              id: 3,
              title: "Vibrant Community",              description: "Connect with fellow anglers, share catches, exchange tips, and participate in monthly fishing tournaments with prizes and recognition.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h9mqkz",              imageAlt: "Fishing club community gathering"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="By The Numbers"
          description="Pirat Fishing Club's impressive growth and impact in the fishing community."
          tag="Our Success"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="centered"
          useInvertedBackground={false}
          animationType="scale-rotate"
          metrics={[
            { id: "members", title: "Active Members", subtitle: "Passionate anglers", category: "Community", value: "500+" },
            { id: "expeditions", title: "Annual Expeditions", subtitle: "Fishing adventures", category: "Adventures", value: "48" },
            { id: "catches", title: "Trophy Catches", subtitle: "This year", category: "Achievement", value: "1,200+" },
            { id: "years", title: "Years of Excellence", subtitle: "Since founding", category: "Heritage", value: "14" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          title="Meet Our Expert Team"
          description="Dedicated professionals committed to your fishing success and safety."
          textboxLayout="default"
          animationType="opacity"
          useInvertedBackground={true}
          tag="Leadership"
          tagIcon={Users}
          tagAnimation="blur-reveal"
          team={[
            {
              id: "captain-erik",              name: "Captain Erik Hansen",              role: "Founder & Head Guide",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9yrdpw",              imageAlt: "Captain Erik Hansen, Founder"
            },
            {
              id: "sarah-lee",              name: "Sarah Lee",              role: "Fly Fishing Specialist",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=d604qo",              imageAlt: "Sarah Lee, Fly Fishing Specialist"
            },
            {
              id: "marcus-john",              name: "Marcus John",              role: "Competition Director",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vofjlh",              imageAlt: "Marcus John, Competition Director"
            },
            {
              id: "nina-costa",              name: "Nina Costa",              role: "Safety & Training Officer",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=yorwmm",              imageAlt: "Nina Costa, Safety Officer"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Joining Pirat Fishing Club transformed my fishing journey. The expertise, camaraderie, and access to premium locations made me a better angler."
          rating={5}
          author="James Mitchell"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=8ywmtz", alt: "James Mitchell" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fkphxm", alt: "Michael Torres" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=08fbz9", alt: "David Chen" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=u5efy5", alt: "Emily Johnson" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="opacity"
          useInvertedBackground={false}
          ariaLabel="Member testimonials and reviews"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardThree
          title="Fishing Insights & Tips"
          description="Stay updated with expert articles, techniques, and fishing destination guides from our community."
          tag="Latest Articles"
          tagIcon={BookOpen}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground={true}
          blogs={[
            {
              id: "blog-1",              category: "Techniques",              title: "Master the Art of Fly Casting",              excerpt: "Learn the fundamentals of fly casting with our step-by-step guide. Perfect your technique for freshwater and saltwater fishing.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=en95g4",              imageAlt: "Fly casting technique guide",              authorName: "Sarah Lee",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=d604qo",              date: "Mar 15, 2025"
            },
            {
              id: "blog-2",              category: "Destinations",              title: "Top 5 Spring Fishing Locations",              excerpt: "Discover the best fishing spots for spring season. From pristine rivers to scenic lakes—plan your next adventure with us.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=98e8ve",              imageAlt: "Beautiful fishing destination landscape",              authorName: "Marcus John",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vofjlh",              date: "Mar 10, 2025"
            },
            {
              id: "blog-3",              category: "Gear Review",              title: "Essential Fishing Gear for Beginners",              excerpt: "A comprehensive guide to choosing the right rods, reels, and tackle for your fishing journey. Expert recommendations included.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=v3togx",              imageAlt: "Modern fishing equipment",              authorName: "Captain Erik Hansen",              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9yrdpw",              date: "Mar 5, 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Cast Your Line?"
          ctaDescription="Join Pirat Fishing Club today and unlock exclusive benefits, expert training, and unforgettable fishing experiences."
          ctaButton={{ text: "Become a Member Now", href: "mailto:hello@piratfishingclub.com?subject=Membership%20Inquiry" }}
          ctaIcon={Phone}
          animationType="slide-up"
          useInvertedBackground={false}
          faqs={[
            {
              id: "faq-1",              title: "What are membership levels?",              content: "We offer three tiers: Basic ($50/month) for casual anglers, Premium ($120/month) with expedition access, and Elite ($200/month) for exclusive benefits and unlimited expeditions."
            },
            {
              id: "faq-2",              title: "Do you offer training for beginners?",              content: "Absolutely! We run beginner courses every month covering casting basics, fish identification, safety, and equipment selection. All members receive priority enrollment."
            },
            {
              id: "faq-3",              title: "When do expeditions take place?",              content: "We organize weekly fishing trips on weekends and monthly premium expeditions to special locations. Schedules vary by season. Check our calendar for details."
            },
            {
              id: "faq-4",              title: "Can I bring non-members on trips?",              content: "Yes, members can bring one guest per trip. This is a great way to introduce friends to our community. Guest fee is $30 per trip."
            },
            {
              id: "faq-5",              title: "What's your cancellation policy?",              content: "Cancel anytime with no penalties. If you need to skip an expedition, notify us 48 hours in advance for refund or credit toward future trips."
            },
            {
              id: "faq-6",              title: "How do I access the member portal?",              content: "After joining, you'll receive login credentials to our online portal where you can book trips, view resources, connect with members, and track your catch log."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h8s26v"
          imageAlt="Sunset fishing scene at water"
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Features", href: "#features" },
                { label: "Team", href: "#team" }
              ]
            },
            {
              title: "Community",              items: [
                { label: "Join Club", href: "#contact" },
                { label: "Expeditions", href: "#features" },
                { label: "Member Portal", href: "#" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Fishing Tips", href: "#blog" },
                { label: "Gear Guide", href: "#blog" },
                { label: "Safety Info", href: "#" },
                { label: "Contact Us", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Disclaimer", href: "#" }
              ]
            }
          ]}
          logoText="Pirat Fishing Club"
          copyrightText="© 2025 Pirat Fishing Club | Uniting Anglers Worldwide"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}