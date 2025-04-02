
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Cross, Users, Heart, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const pastorTeam = [
    {
      id: "1",
      name: "Rev. Micheal Boakye Yiadom",
      role: "General Overseer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Rev Micheal has been leading Household Chapel for the past 25 years with a passion for teaching God's word and discipleship.",
    },
    {
      id: "2",
      name: "Rev Richmond Anthony Malm",
      role: "Deputy General Overseer ",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Rev Richmond has been leading Household Chapel for the past 25 years with a passion for teaching God's word and discipleship",
    },
    {
      id: "3",
      name: "Rev.Johnson Owusu",
      role: "National Treasurer",
      image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Rev.Johnson leads our community outreach initiatives with compassion and a vision for community transformation.",
    },
    {
      id: "4",
      name: "Pastor Stephen Appiah",
      role: "Youth Pastor",
      image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Pastor Stephen leads our youth ministries, bringing vibrant leadership and a heart for mentoring.",
    },
  ];

  const coreValues = [
    {
      title: "Bible-Based Teaching",
      icon: <Book className="h-10 w-10 text-church-purple" />,
      description: "We believe in the authority and inerrancy of Scripture as our guide for faith and practice.",
    },
    {
      title: "Passionate Worship",
      icon: <Music className="h-10 w-10 text-church-purple" />,
      description: "We express our love for God through vibrant, Spirit-led worship that honors Him.",
    },
    {
      title: "Loving Community",
      icon: <Users className="h-10 w-10 text-church-purple" />,
      description: "We foster authentic relationships where people can grow, belong, and serve together.",
    },
    {
      title: "Missional Living",
      icon: <Globe className="h-10 w-10 text-church-purple" />,
      description: "We are committed to sharing God's love locally and globally through service and evangelism.",
    },
    {
      title: "Prayer",
      icon: <Heart className="h-10 w-10 text-church-purple" />,
      description: "We believe in the power of prayer as essential for spiritual growth and ministry effectiveness.",
    },
    {
      title: "Discipleship",
      icon: <Cross className="h-10 w-10 text-church-purple" />,
      description: "We are dedicated to helping believers grow in their faith and become more like Christ.",
    },
  ];
  
  return (
    <Layout>
      <Hero
        title="About Household Chapel International"
        subtitle="Learn more about our history, vision, and leadership"
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <div className="md:w-1/2">
              <img
                src="/lovable-uploads/281ba11f-864f-4663-8623-8aa238b62433.png"
                alt="Church Logo"
                className="w-64 mx-auto md:mx-0"
              />
            </div>
            <div className="md:w-1/2">
              <SectionTitle
                title="Our Story"
                centered={false}
                className="mb-6"
              />
              <p className="text-gray-700 mb-4">
                Household Chapel International was founded in the month of october 1999 with a vision to build a community of believers who would experience the transformative power of Christ and become agents of change in their communities and beyond.
              </p>
              <p className="text-gray-700 mb-4">
              Rev. Micheal Boakye Yiadom and two other brethren Rev Richmond Malm and  brother Evans Adioo. The first meeting held to discuss about the name of the church, the place of meeting of the church and some items needed for the church to take off was held in the house of Rev. Micheal Boakye Yiadom.
              </p>
              <p className="text-gray-700 mb-4">
              The name of the church was taken from Ephesians 2:19-20 (NIV). The church's inauguration meeting was held at Firm Foundation Academy Sch at Apenkwa Mantseman with 14 people in attendance. The first person to be baptized in the church was Mr. Landis Aboagye who was also a teacher in Firm Foundation Academy.
              </p>

              <p className="text-gray-700 mb-4">
              The true turn around of the church came in when the Lord through Rev. Micheal Boakye Yiadom reached out to Mr. Johnson Owusu who is now a minister ot the gospel in the church.
              Through him the floodgates of the membership of the church was open bringing in members like Elder Timothy, Pst. Martin, Elder Effah, Pst. Victor, to name a few.
              </p>
              <p className="text-gray-700">
              The church moved to the next level when most of the leaders found their partners. Mrs. Beatrice Boakye came in, Mrs. Rosemary Malm, Mrs. Owusu, to mention a few.

              </p>
              
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Vision & Mission"
            subtitle="Guiding principles that shape our ministry and purpose"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-church-purple font-serif">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  "To build a Christ-centered community that transforms lives, families, and nations through the power and love of Jesus Christ."
                </p>
                <p className="text-gray-700">
                  We envision a church where every member is empowered to live out their God-given purpose, where families are strengthened, and where our influence extends beyond our walls to impact communities and nations for Christ.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-church-purple font-serif">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  "To connect people to God and to each other, to grow in faith, to serve with our gifts, and to share the love of Christ with the world."
                </p>
                <p className="text-gray-700">
                  We accomplish this through inspiring worship, biblical teaching, intentional discipleship, community service, and global missions, all while fostering authentic relationships and spiritual growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="These principles guide our decisions, actions, and ministry"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-church-purple/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the pastors and leaders who serve our church family"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastorTeam.map((pastor) => (
              <Card key={pastor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={pastor.image}
                    alt={pastor.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{pastor.name}</h3>
                  <p className="text-church-purple font-medium mb-4">{pastor.role}</p>
                  <p className="text-gray-600">{pastor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Statement of Faith Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Statement of Faith"
            subtitle="What we believe and teach as a church"
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-6">
                  <li className="flex">
                    <ChevronRight className="h-6 w-6 text-church-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">The Bible</h4>
                      <p className="text-gray-700">
                        We believe that the Bible is the inspired Word of God, without error in its original manuscripts, and is our final authority for faith and practice.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-6 w-6 text-church-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">God</h4>
                      <p className="text-gray-700">
                        We believe in one God who exists eternally in three persons: Father, Son, and Holy Spirit, equal in power and glory.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-6 w-6 text-church-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Jesus Christ</h4>
                      <p className="text-gray-700">
                        We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death, bodily resurrection, and His coming return in power and glory.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-6 w-6 text-church-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Salvation</h4>
                      <p className="text-gray-700">
                        We believe that salvation is by grace through faith in Jesus Christ alone, not by works, and that true faith produces good works.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-6 w-6 text-church-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">The Holy Spirit</h4>
                      <p className="text-gray-700">
                        We believe in the present ministry of the Holy Spirit, whose indwelling enables Christians to live a godly life and empowers them for service.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-church-dark/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
              Be Part of Our Church Family
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'd love to have you join us this Sunday and experience the love and community of Household Chapel International.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-church-red hover:bg-red-700 text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-church-purple"
              >
                <Link to="/services">Service Times</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

// Import for icons used in the page
const Book = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

const Music = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);
