import { Building2 } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const experiences = [
    {
      year: "Aug 2024 - Present",
      role: "Software Engineer",
      company: "AirKitchenz",
      location: "Los Angeles, CA - Hybrid",
      logo: "/logos/companies/airkitchenz.png",
      description: "Engineered distributed systems with Python and Node.js, enabling 99% uptime and scalable request handling. Built CI/CD pipelines with GitHub Actions, cutting deployment cycles by 30%. Spearheaded infrastructure migration to cloud-native AWS architecture (EC2, S3, Lambda, RDS), reducing costs by 20% and enhancing fault tolerance."
    },
    {
      year: "Oct 2020 - May 2022",
      role: "Software Engineer",
      company: "Midocean Technologies",
      location: "Ahmedabad, IND - On-site",
      logo: "/logos/companies/midocean.png",
      description: "Developed modular full-stack solutions in Python (Django), C#, .NET Core, and Java, improving system scalability and maintainability. Designed and deployed RESTful APIs and process automation tools, reducing manual workloads by 30%. Managed end-to-end DevOps delivery using Azure, integrating CI/CD for faster and more reliable deployments."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const ExperienceCard = () => {
              const [logoError, setLogoError] = useState(false);
              
              return (
                <div
                  className="glass p-6 rounded-2xl hover:glass-strong transition-smooth hover:-translate-y-1 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl glass-strong p-2 flex items-center justify-center overflow-hidden">
                      {exp.logo && !logoError ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain rounded-xl"
                          onError={() => setLogoError(true)}
                        />
                      ) : (
                        <Building2 className="w-8 h-8 text-primary" />
                      )}
                    </div>

                    <div className="flex-1">
                      <span className="text-primary font-semibold text-sm">{exp.year}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-1 group-hover:text-primary transition-smooth">
                        {exp.role}
                      </h3>
                      <h4 className="text-muted-foreground font-medium mb-1">{exp.company}</h4>
                      <p className="text-sm text-muted-foreground/70 mb-3">{exp.location}</p>
                      <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            };
            
            return <ExperienceCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
