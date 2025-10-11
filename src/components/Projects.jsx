import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Balaji Industries",
    description:
      "Industrial management app with inventory, employee, and production tracking.",
    details: "Real-time analytics and automated reports for smooth operations.",
    image: "https://picsum.photos/400/300?random=1",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Junction",
    description:
      "Social app connecting users by shared interests and local events.",
    details: "Modern UI, chat, and location-based event discovery.",
    image: "https://picsum.photos/400/300?random=2",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Roadmode",
    description:
      "Smart travel app with live traffic and route optimization.",
    details: "Weather integration and personalized travel suggestions.",
    image: "https://picsum.photos/400/300?random=3",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Flicksy",
    description:
      "Movie finder app with AI-powered film recommendations.",
    details: "Personalized watchlists and social sharing for film lovers.",
    image: "https://picsum.photos/400/300?random=4",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Notes",
    description:
      "Beautiful note app with cloud sync and tag-based organization.",
    details: "Collaborative and cross-platform note management.",
    image: "https://picsum.photos/400/300?random=5",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Dental Care",
    description:
      "Dental clinic app for patient management and scheduling.",
    details: "Appointment reminders and billing integration.",
    image: "https://picsum.photos/400/300?random=6",
    liveUrl: "#",
  },
  {
    id: 7,
    title: "Sales Tracker",
    description:
      "CRM app for sales pipeline and performance analytics.",
    details: "Forecasting and customer insights for business growth.",
    image: "https://picsum.photos/400/300?random=7",
    liveUrl: "#",
  },
  {
    id: 8,
    title: "iTouch Restaurant",
    description:
      "Restaurant system for table booking and order tracking.",
    details: "Menu management, online orders, and customer feedback.",
    image: "https://picsum.photos/400/300?random=8",
    liveUrl: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const handleShare = async (e) => {
    e.stopPropagation();

    const shareData = {
      title: project.title,
      text: project.description,
      url: project.liveUrl || window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: false, amount: 0.1 }}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "18px",
        background: "#111",
        cursor: "pointer",
        height: "340px",
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Share button (top-right corner) */}
      <motion.button
        onClick={handleShare}
        onMouseEnter={(e) => e.stopPropagation()}
        onMouseLeave={(e) => e.stopPropagation()}
        aria-label={`Share ${project.title}`}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          zIndex: 6,
          border: "none",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          color: "#fff",
          padding: "8px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </motion.button>

      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.85,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* Static Light Effect (top-right corner) */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12), transparent 60%)",
          pointerEvents: "none",
          zIndex: 2,
          borderRadius: "50%",
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          zIndex: 3,
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "8px",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "#ccc",
            fontSize: "14px",
            lineHeight: 1.5,
            marginBottom: "6px",
          }}
        >
          {project.description}
        </p>

        <p
          style={{
            color: "#999",
            fontSize: "13px",
            lineHeight: 1.4,
            fontStyle: "italic",
          }}
        >
          {project.details}
        </p>

        {/* Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "14px",
          }}
        >
         
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        style={{
          textAlign: "center",
          fontSize: "34px",
          color: "#fff",
          marginBottom: "10px",
          fontFamily: "Orbitron, sans-serif",
        }}
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        style={{
          textAlign: "center",
          color: "#aaa",
          fontSize: "15px",
        }}
      >
        Highlights from my Android & Web development journey
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
          marginTop: "50px",
          maxWidth: "1100px",
          marginInline: "auto",
          padding: "0 20px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
