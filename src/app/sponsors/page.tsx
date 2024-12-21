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
  // Title Sponsors
  {
    category: "Title Sponsors",
    sponsors: [
      {
        sponsorName: "Elegant Steel",
        subTitle: "Title Sponsor",
        sponsorDetails: "https://www.elegantsteels.com/",
        sponsorImage: "/assets/2023/elegant.png",
        description:
          "A leading manufacturer of high-quality steel products, specializing in structural steel and innovative construction solutions. Known for their commitment to sustainability and cutting-edge technology in steel manufacturing.",
        yearOfEstablishment: "1985",
        location: "Mumbai, India",
      },
    ],
  },
  // Platinum Sponsors
  {
    category: "Platinum Sponsors",
    sponsors: [
      {
        sponsorName: "Tata Steel",
        subTitle: "Platinum Sponsor (Criar)",
        sponsorDetails: "https://www.tatasteel.com/",
        sponsorImage: "/assets/2023/tatasteel.png",
        description:
          "One of India's largest steel manufacturers, Tata Steel is known for its innovative products and sustainable practices. Their Criar initiative focuses on advanced materials and construction technologies.",
        yearOfEstablishment: "1907",
        location: "Jamshedpur, India",
      },
    ],
  },
  // Gold Sponsors
  {
    category: "Gold Sponsors",
    sponsors: [
      {
        sponsorName: "S. K. Samanta",
        subTitle: "Gold Sponsor",
        sponsorDetails: "http://sksl.co.in/",
        sponsorImage: "/assets/2023/sksamanta.jpeg",
        description:
          "A renowned construction and infrastructure development company specializing in civil engineering projects. Known for their expertise in building bridges, highways, and industrial structures.",
        yearOfEstablishment: "1978",
        location: "Kolkata, India",
      },
    ],
  },
  // Event Sponsors
  {
    category: "Event Sponsors",
    sponsors: [
      {
        sponsorName: "(SendFast) DCart Logistics",
        subTitle: "Event Sponsor",
        sponsorDetails: "https://www.sendfast.in/",
        sponsorImage: "/assets/2023/dcart.png",
        description:
          "A modern logistics company revolutionizing delivery services with tech-driven solutions. Specializing in fast, reliable, and trackable delivery services across India.",
        yearOfEstablishment: "2015",
        location: "Bangalore, India",
      },
      {
        sponsorName: "Enkebee",
        subTitle: "Event Sponsor",
        sponsorDetails: "http://enkebee.com/",
        sponsorImage: "/assets/2023/enkebee.jpeg",
        description:
          "An innovative technology company focusing on sustainable solutions for the construction industry. Pioneers in eco-friendly construction materials and methods.",
        yearOfEstablishment: "2018",
        location: "Pune, India",
      },
    ],
  },
  // Major Sponsors
  {
    category: "Major Sponsors",
    sponsors: [
      {
        sponsorName: "Aimil India",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.aimil.com/",
        sponsorImage: "/assets/2023/aimil.png",
        description:
          "A leading provider of testing instruments and solutions for construction materials. Specializing in quality control equipment and engineering solutions since 1932.",
        yearOfEstablishment: "1932",
        location: "New Delhi, India",
      },
      {
        sponsorName: "Unichem",
        subTitle: "Major Sponsor",
        sponsorDetails: "https://www.uweco.co.in/",
        sponsorImage: "/assets/2023/unichem.png",
        description:
          "Pioneers in chemical solutions for construction and infrastructure. Providing innovative chemical products for concrete and construction applications.",
        yearOfEstablishment: "1944",
        location: "Mumbai, India",
      },
    ],
  },
  // Partners
  {
    category: "Partners",
    sponsors: [
      {
        sponsorName: "Fosroc",
        subTitle: "Constructive Solutions Partner",
        sponsorDetails: "https://www.fosroc.com/",
        sponsorImage: "/assets/2023/fosroc.jpg",
        description:
          "Global leader in providing construction solutions. Specializing in waterproofing, concrete repairs, grouts, and adhesives for the construction industry.",
        yearOfEstablishment: "1930",
        location: "Worldwide Operations",
      },
      {
        sponsorName: "Civil Center",
        subTitle: "Workshop Partner",
        sponsorDetails: "http://civilcenter.in/",
        sponsorImage: "/assets/2023/civilcenter.png",
        description:
          "Leading training institute for civil engineering professionals. Providing practical training and workshops in various aspects of civil engineering.",
        yearOfEstablishment: "2010",
        location: "Multiple Locations, India",
      },
    ],
  },
  // Education Partners
  {
    category: "Education Partners",
    sponsors: [
      {
        sponsorName: "Civil Guruji",
        subTitle: "Education Partner",
        sponsorDetails: "https://civilguruji.com/",
        sponsorImage: "/assets/2023/civilguruji.png",
        description:
          "Leading online platform for civil engineering education, providing comprehensive study materials, video lectures, and practice tests for GATE, ESE, and other competitive exams.",
        yearOfEstablishment: "2015",
        location: "Pune, India",
      },
      {
        sponsorName: "Gateforum",
        subTitle: "Education Partner",
        sponsorDetails: "https://gateforum.com/",
        sponsorImage: "/assets/2023/gateforum.png",
        description:
          "Premier institute for GATE preparation with over 15 years of excellence. Offers comprehensive coaching, study materials, and online test series for engineering competitive exams.",
        yearOfEstablishment: "2005",
        location: "Multiple Locations, India",
      },
    ],
  },
  // Media Partners
  {
    category: "Media Partners",
    sponsors: [
      {
        sponsorName: "Youth Incorporated",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://youthincmag.com/",
        sponsorImage: "/assets/2023/youthincorporated.jpeg",
        description:
          "India's leading youth magazine focusing on education, career guidance, and youth culture. Reaching millions of young readers through print and digital platforms.",
        yearOfEstablishment: "2009",
        location: "Mumbai, India",
      },
      {
        sponsorName: "College India Fest",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://indiacollegefest.com/",
        sponsorImage: "/assets/2023/indiacollegefest.jpeg",
        description:
          "Comprehensive platform covering college festivals, cultural events, and technical symposiums across India. Connecting students with opportunities nationwide.",
        yearOfEstablishment: "2012",
        location: "Delhi, India",
      },
      {
        sponsorName: "Silicon India",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://www.siliconindia.com/",
        sponsorImage: "/assets/2023/siliconindia.png",
        description:
          "Leading technology and business magazine covering innovations, startups, and industry trends. Platform for professionals and technology enthusiasts.",
        yearOfEstablishment: "1997",
        location: "Bangalore, India",
      },
      {
        sponsorName: "Campus Times Pune",
        subTitle: "Online Media Partner",
        sponsorDetails: "https://www.campustimespune.com/",
        sponsorImage: "/assets/2023/campustimespune.jpeg",
        description:
          "Premier student media platform in Pune, covering campus news, events, and youth culture. Connecting students with opportunities and trending campus activities.",
        yearOfEstablishment: "2011",
        location: "Pune, India",
      },
      {
        sponsorName: "India Blooms",
        subTitle: "Newspaper Partner",
        sponsorDetails: "https://www.indiablooms.com/",
        sponsorImage: "/assets/2023/indiablooms.jpg",
        description:
          "Leading news agency providing comprehensive coverage of national and international events. Known for accurate reporting and in-depth analysis.",
        yearOfEstablishment: "2003",
        location: "Kolkata, India",
      },
    ],
  },
  // Other Sponsors
  {
    category: "Other Sponsors",
    sponsors: [
      {
        sponsorName: "Mera Events",
        subTitle: "Exclusive Ticket Partner",
        sponsorDetails: "https://www.meraevents.com/",
        sponsorImage: "/assets/2023/meraevents.jpeg",
        description:
          "India's leading event ticketing platform, handling millions of transactions for conferences, workshops, and cultural events. Providing seamless ticketing solutions.",
        yearOfEstablishment: "2007",
        location: "Hyderabad, India",
      },
      {
        sponsorName: "Grab On",
        subTitle: "Coupon Partner",
        sponsorDetails: "https://www.grabon.in/",
        sponsorImage: "/assets/2023/grabon.jpeg",
        description:
          "Popular coupons and deals platform helping millions save on online shopping. Partnering with leading brands to provide exclusive discounts and offers.",
        yearOfEstablishment: "2013",
        location: "Bangalore, India",
      },
    ],
  },
];

// Add placeholder arrays for 2024 and 2025
const sponsorsContent2024: SponsorCategory[] = [
  // Add 2024 sponsors when available
];

const sponsorsContent2025: SponsorCategory[] = [
  // Add 2025 sponsors when available
];

export default function Sponsors() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [currentSponsorIndices, setCurrentSponsorIndices] = useState({});
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const getSponsorsForYear = useCallback(() => {
    switch (selectedYear) {
      case "2023":
        return sponsorsContent2023;
      case "2024":
        return sponsorsContent2024;
      case "2025":
        return sponsorsContent2025;
      default:
        return sponsorsContent2025;
    }
  }, [selectedYear]);

  const nextSponsor = (categoryIndex) => {
    setCurrentSponsorIndices((prev) => ({
      ...prev,
      [categoryIndex]:
        ((prev[categoryIndex] || 0) + 1) %
        getSponsorsForYear()[categoryIndex].sponsors.length,
    }));
  };

  const prevSponsor = (categoryIndex) => {
    setCurrentSponsorIndices((prev) => ({
      ...prev,
      [categoryIndex]:
        ((prev[categoryIndex] || 0) -
          1 +
          getSponsorsForYear()[categoryIndex].sponsors.length) %
        getSponsorsForYear()[categoryIndex].sponsors.length,
    }));
  };

  return (
    <div>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Our Sponsors</h1>

        <div className={styles.yearSelector}>
          <button
            className={`${styles.yearButton} ${
              selectedYear === "2025" ? styles.active : ""
            }`}
            onClick={() => setSelectedYear("2025")}
          >
            2025
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
              selectedYear === "2023" ? styles.active : ""
            }`}
            onClick={() => setSelectedYear("2023")}
          >
            2023
          </button>
        </div>

        {getSponsorsForYear().length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.comingSoonWrapper}>
              <h2>Coming Soon!</h2>
              <div className={styles.animatedDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>We're preparing something amazing for {selectedYear}.</p>
              <div className={styles.decorativeLine}></div>
              <p className={styles.stayTuned}>
                Stay tuned for exciting partnerships!
              </p>
            </div>
          </div>
        ) : (
          getSponsorsForYear().map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.sponsorsGrid}>
                {category.sponsors.length > 0 && (
                  <div className={styles.cardContainer}>
                    {category.sponsors.length > 1 && (
                      <button
                        className={styles.navButton}
                        onClick={() => prevSponsor(categoryIndex)}
                        aria-label="Previous sponsor"
                      >
                        ←
                      </button>
                    )}

                    <div className={styles.card}>
                      <Image
                        src={
                          category.sponsors[
                            currentSponsorIndices[categoryIndex] || 0
                          ].sponsorImage
                        }
                        alt={
                          category.sponsors[
                            currentSponsorIndices[categoryIndex] || 0
                          ].sponsorName
                        }
                        width={280}
                        height={300}
                        priority={categoryIndex < 2} // Prioritize loading for first two categories
                        className={`${styles.cardImage} ${styles.fadeIn}`}
                        onError={() =>
                          setImageError({
                            ...imageError,
                            [`${categoryIndex}-${
                              currentSponsorIndices[categoryIndex] || 0
                            }`]: true,
                          })
                        }
                        style={{
                          display: imageError[
                            `${categoryIndex}-${
                              currentSponsorIndices[categoryIndex] || 0
                            }`
                          ]
                            ? "none"
                            : "block",
                        }}
                      />
                      {imageError[
                        `${categoryIndex}-${
                          currentSponsorIndices[categoryIndex] || 0
                        }`
                      ] && (
                        <div className={styles.imageFallback}>
                          {
                            category.sponsors[
                              currentSponsorIndices[categoryIndex] || 0
                            ].sponsorName
                          }
                        </div>
                      )}
                      <div className={styles.cardContent}>
                        <h2>
                          {
                            category.sponsors[
                              currentSponsorIndices[categoryIndex] || 0
                            ].sponsorName
                          }
                        </h2>
                        <h3>
                          {
                            category.sponsors[
                              currentSponsorIndices[categoryIndex] || 0
                            ].subTitle
                          }
                        </h3>
                        {category.sponsors[
                          currentSponsorIndices[categoryIndex] || 0
                        ].yearOfEstablishment &&
                          category.sponsors[
                            currentSponsorIndices[categoryIndex] || 0
                          ].location && (
                            <p className={styles.companyInfo}>
                              Est.{" "}
                              {
                                category.sponsors[
                                  currentSponsorIndices[categoryIndex] || 0
                                ].yearOfEstablishment
                              }{" "}
                              •{" "}
                              {
                                category.sponsors[
                                  currentSponsorIndices[categoryIndex] || 0
                                ].location
                              }
                            </p>
                          )}
                        <p className={styles.description}>
                          {
                            category.sponsors[
                              currentSponsorIndices[categoryIndex] || 0
                            ].description
                          }
                        </p>
                        <div className={styles.buttonContainer}>
                          <Link
                            href={
                              category.sponsors[
                                currentSponsorIndices[categoryIndex] || 0
                              ].sponsorDetails
                            }
                            className={styles.knowMoreBtn}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Learn more about ${
                              category.sponsors[
                                currentSponsorIndices[categoryIndex] || 0
                              ].sponsorName
                            }`}
                          >
                            Know More
                            <span className={styles.arrow} aria-hidden="true">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {category.sponsors.length > 1 && (
                      <button
                        className={styles.navButton}
                        onClick={() => nextSponsor(categoryIndex)}
                        aria-label="Next sponsor"
                      >
                        →
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
