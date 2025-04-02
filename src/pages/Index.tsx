import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight, MapPin, Users, Heart, Book, Mic } from "lucide-react";
import SermonCard from "@/components/SermonCard";
import EventCard from "@/components/EventCard";

const Index = () => {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: "1",
      title: "Annual Church Conference",
      date: "2023-09-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join us for a day of spiritual growth, fellowship, and inspiration at our Annual Church Conference.",
      sessions: [] // Add empty sessions array
    },
    {
      id: "2",
      title: "Youth Camp",
      date: "2023-10-05",
      time: "All Day",
      location: "Camp Grounds",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A special retreat for our youth to connect with God and each other through fun activities and worship.",
      sessions: [] // Add empty sessions array
    },
  ];

  // Sample data for latest sermons
  const latestSermons = [
    {
      id: "1",
      title: "Finding Hope in Difficult Times",
      preacher: "Pastor John Doe",
      date: "2023-08-28",
      duration: "45 minutes",
      image: "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A powerful message about finding hope and strength during life's challenges through faith in God.",
    },
    {
      id: "2",
      title: "The Power of Prayer",
      preacher: "Pastor Jane Smith",
      date: "2023-08-21",
      duration: "38 minutes",
      image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Learn how prayer can transform your life and deepen your relationship with God.",
    },
    {
      id: "3",
      title: "Walking in God's Purpose",
      preacher: "Pastor John Doe",
      date: "2023-08-14",
      duration: "42 minutes",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Discover how to identify and fulfill God's unique purpose for your life.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Anniversary Image */}
      <Hero
        title="Celebrating 25 Years of Ministry"
        subtitle="Love for God, Love for Church, Love for One Another"
        backgroundImage="/lovable-uploads/1b839fc1-b904-4368-afbd-fa67db69873c.png"
        buttonText="Join Our Celebration"
        buttonLink="/events"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        overlayOpacity="bg-black/30"
        contentPosition="left"
      />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <div className="md:w-1/2">
              <img
                src="/lovable-uploads/281ba11f-864f-4663-8623-8aa238b62433.png"
                alt="Household Chapel International"
                className="mx-auto md:mx-0 max-w-xs"
              />
            </div>
            <div className="md:w-1/2">
              <SectionTitle
                title="Welcome to Our Church"
                centered={false}
                className="mb-6"
              />
              <p className="text-gray-700 mb-4">
                Welcome to Household Chapel International, where we believe in the transformative power of Christ in every believer. Our mission is to connect people to God and to each other through powerful worship, relevant teaching, and a warm community atmosphere.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're exploring faith for the first time or looking for a church home, we invite you to join us this Sunday. Experience the love of Christ and discover your purpose in God's family.
              </p>
              <div className="flex items-center gap-4">
                <Button 
                  asChild
                  className="bg-church-purple hover:bg-church-dark text-white"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-church-purple text-church-purple hover:bg-church-purple hover:text-white"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Join Us in Worship"
            subtitle="We welcome you to join us for our regular worship services and activities"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-church-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-church-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sunday Service</h3>
                <p className="text-gray-600 mb-4">Join us for our main worship service with inspiring praise and word.</p>
                <div className="border-t pt-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Clock className="h-5 w-5 mr-2 text-church-purple" />
                    <span>9:00 AM - 11:30 AM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-church-purple" />
                    <span>Main Sanctuary</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-church-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Book className="h-8 w-8 text-church-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bible Study</h3>
                <p className="text-gray-600 mb-4">Deepen your understanding of God's word in our mid-week Bible study.</p>
                <div className="border-t pt-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Clock className="h-5 w-5 mr-2 text-church-purple" />
                    <span>6:30 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-church-purple" />
                    <span>Fellowship Hall</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-church-purple/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-church-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prayer Meeting</h3>
                <p className="text-gray-600 mb-4">Come together with the church family to pray and intercede.</p>
                <div className="border-t pt-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <Clock className="h-5 w-5 mr-2 text-church-purple" />
                    <span>7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-2 text-church-purple" />
                    <span>Prayer Room</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Ministries"
            subtitle="Serving God through various departments designed to build faith and community"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-church-purple" />
                  </div>
                  <h3 className="text-xl font-bold ml-4">Youth Ministry</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Empowering young people to grow in faith and leadership through fun activities, Bible study, and mentorship.
                </p>
                <Link
                  to="/ministries"
                  className="inline-flex items-center text-church-purple hover:text-church-dark font-medium"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <Mic className="h-6 w-6 text-church-purple" />
                  </div>
                  <h3 className="text-xl font-bold ml-4">Worship Team</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Leading the congregation in worship through music, creating an atmosphere for God's presence.
                </p>
                <Link
                  to="/ministries"
                  className="inline-flex items-center text-church-purple hover:text-church-dark font-medium"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-church-purple" />
                  </div>
                  <h3 className="text-xl font-bold ml-4">Outreach Ministry</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Sharing God's love with our community through service projects, evangelism, and compassionate care.
                </p>
                <Link
                  to="/ministries"
                  className="inline-flex items-center text-church-purple hover:text-church-dark font-medium"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-church-purple hover:bg-church-dark text-white"
            >
              <Link to="/ministries">View All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Sermons Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Latest Sermons"
            subtitle="Listen to recent messages from our pastors that will inspire and encourage your faith"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestSermons.map((sermon) => (
              <SermonCard key={sermon.id} {...sermon} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-church-purple hover:bg-church-dark text-white"
            >
              <Link to="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Join us for these special events and activities happening in our church"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-church-purple hover:bg-church-dark text-white"
            >
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-church-dark/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
              Join Our Growing Family
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We invite you to become part of our church family and experience the love of Christ through fellowship and worship.
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

export default Index;
