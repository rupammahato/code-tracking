"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface Sponsor {
  sponsorName: string;
  subTitle: string;
  sponsorDetails: string;
  sponsorImage: string;
  description: string;
  yearOfEstablishment?: string;
  location?: string;
}

interface SponsorCategory {
  category: string;
  sponsors: Sponsor[];
}

const sponsorsContent2023: SponsorCategory[] = [
  {
    category: "Title Sponsors",
    sponsors: [
      {
        sponsorName: "Elegant Steel",
        subTitle: "Title Sponsor",
        sponsorDetails: "https://www.elegantsteels.com/",
        sponsorImage: "/assets/2023/elegant.png",
        description:
          "Leading manufacturer of high-quality steel products. Known for pioneering innovative steel manufacturing techniques and sustainable practices in the industry.",
        yearOfEstablishment: "1985",
        location: "Mumbai, India",
      },
    ],
  },
  {
    category: "Platinum Sponsors",
    sponsors: [
      {
        sponsorName: "Tata Steel",
        subTitle: "Platinum Sponsor (Criar)",
        sponsorDetails: "https://www.tatasteel.com/",
        sponsorImage: "/assets/2023/tatasteel.png",
        description:
          "One of India's largest steel manufacturers with a global presence. Recognized for their commitment to innovation, sustainability, and corporate social responsibility.",
        yearOfEstablishment: "1907",
        location: "Jamshedpur, India",
      },
    ],
  },
  {
    category: "Gold Sponsors",
    sponsors: [
      {
        sponsorName: "S. K. Samanta",
        subTitle: "Gold Sponsor",
        sponsorDetails: "http://sksl.co.in/",
        sponsorImage: "/assets/2023/sksamanta.jpeg",
        description:
          "Renowned construction and infrastructure company. Specializing in large-scale infrastructure projects with a focus on quality and timely delivery.",
        yearOfEstablishment: "1978",
        location: "Kolkata, India",
      },
    ],
  },
  {
    category: "Event Sponsors",
    sponsors: [
      {
        sponsorName: "(SendFast) DCart Logistics",
        subTitle: "Event Sponsor",
        sponsorDetails: "https://www.sendfast.in/",
        sponsorImage: "/assets/2023/dcart.png",
        description:
          "Modern logistics company with tech-driven solutions. Revolutionizing the delivery industry with AI-powered routing and real-time tracking capabilities.",
        yearOfEstablishment: "2015",
        location: "Bangalore, India",
      },
      {
        sponsorName: "Enkebee",
        subTitle: "Event Sponsor",
        sponsorDetails: "http://enkebee.com/",
        sponsorImage: "/assets/2023/enkebee.jpeg",
        description:
          "Innovative technology company for sustainable solutions. Leading the way in developing eco-friendly technologies for the construction industry.",
        yearOfEstablishment: "2018",
        location: "Pune, India",
      },
    ],
  },
  {
    category: "Major Sponsors",
    sponsors: [
      {
        sponsorName: "Aimil India",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.aimil.com/",
        sponsorImage: "/assets/2023/aimil.png",
        description:
          "Provider of testing instruments for construction materials. Offering state-of-the-art testing solutions and technical support for quality assurance in construction.",
        yearOfEstablishment: "1932",
        location: "New Delhi, India",
      },
      {
        sponsorName: "Unichem",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.uweco.co.in/",
        sponsorImage: "/assets/2023/unichem.png",
        description:
          "Pioneers in chemical solutions for construction. Developing innovative chemical formulations that enhance construction material performance and durability.",
        yearOfEstablishment: "1944",
        location: "Mumbai, India",
      },
    ],
  },
  {
    category: "Partners",
    sponsors: [
      {
        sponsorName: "Fosroc",
        subTitle: "Constructive Solutions Partner",
        sponsorDetails: "https://www.fosroc.com/",
        sponsorImage: "/assets/2023/fosroc.jpg",
        description:
          "Global leader in construction solutions. Providing comprehensive construction chemical solutions and technical expertise across six continents.",
        yearOfEstablishment: "1930",
        location: "Worldwide Operations",
      },
      {
        sponsorName: "Civil Center",
        subTitle: "Workshop Partner",
        sponsorDetails: "http://civilcenter.in/",
        sponsorImage: "/assets/2023/civilcenter.png",
        description:
          "Leading training institute for civil engineering. Offering comprehensive practical training programs and industry-relevant certifications for civil engineers.",
        yearOfEstablishment: "2010",
        location: "Multiple Locations, India",
      },
    ],
  },
  {
    category: "Education Partners",
    sponsors: [
      {
        sponsorName: "Civil Guruji",
        subTitle: "Education Partner",
        sponsorDetails: "https://civilguruji.com/",
        sponsorImage: "/assets/2023/civilguruji.png",
        description:
          "Online platform for civil engineering education. Providing comprehensive online courses and study materials for aspiring civil engineers and professionals.",
        yearOfEstablishment: "2015",
        location: "Pune, India",
      },
      {
        sponsorName: "Gateforum",
        subTitle: "Education Partner",
        sponsorDetails: "https://gateforum.com/",
        sponsorImage: "/assets/2023/gateforum.png",
        description:
          "Premier institute for GATE preparation. Offering specialized coaching and comprehensive study materials for GATE aspirants with proven success records.",
        yearOfEstablishment: "2005",
        location: "Multiple Locations, India",
      },
    ],
  },
  {
    category: "Media Partners",
    sponsors: [
      {
        sponsorName: "Youth Incorporated",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://youthincmag.com/",
        sponsorImage: "/assets/2023/youthincorporated.jpeg",
        description:
          "India's leading youth magazine. Delivering insightful content on education, careers, and youth culture with a focus on empowering young minds.",
        yearOfEstablishment: "2009",
        location: "Mumbai, India",
      },
      {
        sponsorName: "College India Fest",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://indiacollegefest.com/",
        sponsorImage: "/assets/2023/indiacollegefest.jpeg",
        description:
          "Platform covering college festivals and events. Connecting students across India through comprehensive coverage of college cultural and technical festivals.",
        yearOfEstablishment: "2012",
        location: "Delhi, India",
      },
      {
        sponsorName: "Silicon India",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://www.siliconindia.com/",
        sponsorImage: "/assets/2023/siliconindia.png",
        description:
          "Technology and business magazine. Providing in-depth coverage of technology trends, startups, and business innovations in the Indian technology sector.",
        yearOfEstablishment: "1997",
        location: "Bangalore, India",
      },
      {
        sponsorName: "Campus Times Pune",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://www.campustimespune.com/",
        sponsorImage: "/assets/2023/campustimespune.jpeg",
        description:
          "Student media platform in Pune. Showcasing student achievements, campus events, and educational opportunities while fostering student journalism.",
        yearOfEstablishment: "2011",
        location: "Pune, India",
      },
      {
        sponsorName: "India Blooms",
        subTitle: "Newspaper Partner",
        sponsorDetails: "https://www.indiablooms.com/",
        sponsorImage: "/assets/2023/indiablooms.jpg",
        description:
          "Leading news agency and digital media platform. Delivering comprehensive coverage of national and international news with a focus on accuracy and timeliness.",
        yearOfEstablishment: "2003",
        location: "Kolkata, India",
      },
    ],
  },
  {
    category: "Other Sponsors",
    sponsors: [
      {
        sponsorName: "Mera Events",
        subTitle: "Exclusive Ticket Partner",
        sponsorDetails: "https://www.meraevents.com/",
        sponsorImage: "/assets/2023/meraevents.jpeg",
        description:
          "India's leading event ticketing platform. Facilitating seamless event management and ticket booking experiences with innovative technological solutions.",
        yearOfEstablishment: "2007",
        location: "Hyderabad, India",
      },
      {
        sponsorName: "Grab On",
        subTitle: "Coupon Partner",
        sponsorDetails: "https://www.grabon.in/",
        sponsorImage: "/assets/2023/grabon.jpeg",
        description:
          "Popular coupons and deals platform. Helping users save money through verified deals and exclusive discount offers across multiple categories.",
        yearOfEstablishment: "2013",
        location: "Bangalore, India",
      },
    ],
  },
];

const sponsorsContent2024: SponsorCategory[] = [
  {
    category: "Title Sponsors",
    sponsors: [
      {
        sponsorName: "L&T ( Larsen & Toubro)",
        subTitle: "Title Sponsor",
        sponsorDetails: "https://www.larsentoubro.com/",
        sponsorImage: "/assets/2024/lt.png",
        description:
          "Larsen & Toubro is an Indian multinational conglomerate, known for its leadership in construction, engineering, manufacturing, technology and financial services.",
        yearOfEstablishment: "1938",
        location: "Mumbai, India",
      },
      {
        sponsorName: "Elegant Steel",
        subTitle: "Co-Title Sponsor",
        sponsorDetails: "https://www.elegant.com/",
        sponsorImage: "/assets/2024/elegant.png",
        description:
          "Leading manufacturer of high-quality steel products. Known for pioneering innovative steel manufacturing techniques and sustainable practices in the industry.",
        yearOfEstablishment: "1985",
        location: "Mumbai, India",
      },
    ],
  },
  {
    category: "Gold Sponsors",
    sponsors: [
      {
        sponsorName: "Airark (SendFast)",
        subTitle: "Gold Sponsor",
        sponsorDetails: "https://www.sendfast.in/",
        sponsorImage: "/assets/2024/sendfast.png",
        description:
          "Modern logistics company with tech-driven solutions. Revolutionizing the delivery industry with AI-powered routing and real-time tracking capabilities.",
        yearOfEstablishment: "2015",
        location: "Bangalore, India",
      },
    ],
  },
  {
    category: "Major Sponsors",
    sponsors: [
      {
        sponsorName: "Rashmi Group",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.rashmigroup.com/",
        sponsorImage: "/assets/2024/rashmi.png",
        description:
          "Leading industrial conglomerate with interests in steel, power, and infrastructure development.",
        yearOfEstablishment: "1979",
        location: "Kolkata, India",
      },
      {
        sponsorName: "Jai Balaji Group",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.jaibalajigroup.com/",
        sponsorImage: "/assets/2024/jaibalaji.png",
        description:
          "Integrated steel manufacturer producing sponge iron, pig iron, steel bars, and power.",
        yearOfEstablishment: "1999",
        location: "Kolkata, India",
      },
      {
        sponsorName: "Haldia Petrochemicals",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.haldiapetrochemicals.com/",
        sponsorImage: "/assets/2024/haldia.png",
        description:
          "One of India's largest petrochemical companies, producing and distributing polymers and chemicals.",
        yearOfEstablishment: "1985",
        location: "Haldia, India",
      },
      {
        sponsorName: "Aimil India",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.aimil.com/",
        sponsorImage: "/assets/2024/aimil.png",
        description:
          "Provider of testing instruments for construction materials. Offering state-of-the-art testing solutions and technical support for quality assurance in construction.",
        yearOfEstablishment: "1932",
        location: "New Delhi, India",
      },
    ],
  },
  {
    category: "Workshop Partners",
    sponsors: [
      {
        sponsorName: "Protrainy",
        subTitle: "Workshop Partner",
        sponsorDetails: "https://www.protrainy.com/",
        sponsorImage: "/assets/2024/protrainy.png",
        description:
          "Professional training and skill development platform specializing in technical and engineering courses.",
        yearOfEstablishment: "2018",
        location: "Bangalore, India",
      },
    ],
  },
  {
    category: "Event Sponsors",
    sponsors: [
      {
        sponsorName: "Enkebee",
        subTitle: "Event Sponsor",
        sponsorDetails: "http://enkebee.com/",
        sponsorImage: "/assets/2024/enkebee.jpeg",
        description:
          "Innovative technology company for sustainable solutions. Leading the way in developing eco-friendly technologies for the construction industry.",
        yearOfEstablishment: "2018",
        location: "Pune, India",
      },
      {
        sponsorName: "MET",
        subTitle: "Event Sponsor",
        sponsorDetails: "https://www.met.edu/",
        sponsorImage: "/assets/2024/met.png",
        description:
          "Leading educational institution providing quality education in engineering and technology.",
        yearOfEstablishment: "1989",
        location: "Mumbai, India",
      },
    ],
  },
];

const sponsorsContent2025: SponsorCategory[] = [
  // Add 2025 sponsors when available
];

export default function Sponsors() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const getSponsorsForYear = useCallback(() => {
    switch (selectedYear) {
      case "2023":
        return sponsorsContent2023;
      case "2024":
        return sponsorsContent2024;
      case "2025":
        return sponsorsContent2025;
      default:
        return [];
    }
  }, [selectedYear]);

  const sponsors = getSponsorsForYear();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sponsors</h1>
      <div className={styles.yearSelector}>
        <button
          className={`${styles.yearButton} ${
            selectedYear === "2023" ? styles.active : ""
          }`}
          onClick={() => setSelectedYear("2023")}
        >
          2023
        </button>
        <button
          className={`${styles.yearButton} ${
            selectedYear === "2024" ? styles.active : ""
          }`}
          onClick={() => setSelectedYear("2024")}
        >
          2024
        </button>
        <button
          className={`${styles.yearButton} ${
            selectedYear === "2025" ? styles.active : ""
          }`}
          onClick={() => setSelectedYear("2025")}
        >
          2025
        </button>
      </div>
      {sponsors.length > 0 ? (
        sponsors.map((category) => (
          <div key={category.category}>
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <div className={styles.sponsorsGrid}>
              {category.sponsors.map((sponsor) => (
                <div key={sponsor.sponsorName} className={styles.card}>
                  <Image
                    src={sponsor.sponsorImage}
                    alt={sponsor.sponsorName}
                    className={styles.cardImage}
                    width={280}
                    height={300}
                  />
                  <div className={styles.cardContent}>
                    <h2>{sponsor.sponsorName}</h2>
                    <h3>{sponsor.subTitle}</h3>
                    <p>{sponsor.description}</p>
                    <div className={styles.buttonContainer}>
                      <Link href={sponsor.sponsorDetails} legacyBehavior>
                        <a className={styles.knowMoreBtn}>
                          Know More <span className={styles.arrow}>→</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.comingSoonWrapper}>
            <h2>Coming Soon</h2>
            <div className={styles.animatedDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Stay tuned for more updates on our sponsors.</p>
          </div>
        </div>
      )}
    </div>
  );
}
