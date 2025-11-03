const Education = () => {
  const education = [
    {
      degree: "Master of Science, Computer Science",
      institution: "California State University, Fullerton",
      location: "Fullerton, CA, USA",
      period: "Aug 2022 - May 2024",
      coursework: [
        "Advanced Database Management",
        "Advanced Algorithm",
        "Software Management",
        "System & Software Standards",
        "Computer System Architecture",
        "Mobile Development Programming"
      ]
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      institution: "Gujarat Technological University",
      location: "Ahmedabad, GJ, IND",
      period: "Aug 2016 - July 2020",
      coursework: [
        "Data Structure",
        "Database Management System",
        "Operating System",
        "Object Oriented Programming",
        "System Programming",
        "Computer Networks",
        "Web Technology",
        "Data Mining and Business Intelligence"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic background and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:glass-strong transition-smooth hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                  {edu.degree}
                </h3>
                <h4 className="text-xl font-medium mb-1">{edu.institution}</h4>
                <p className="text-muted-foreground text-sm mb-1">{edu.location}</p>
                <p className="text-muted-foreground text-sm font-medium">{edu.period}</p>
              </div>

              <div>
                <h5 className="font-semibold mb-3 text-foreground/90">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1.5 bg-secondary/50 rounded-lg text-xs font-medium hover:bg-primary/20 hover:text-primary transition-smooth cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
