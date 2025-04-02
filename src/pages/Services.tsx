
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, CalendarDays, Users, Music, Baby } from "lucide-react";

const Services = () => {
  const regularServices = [
    {
      id: "1",
      title: "Sunday Worship Service",
      time: "9:00 AM - 11:30 AM",
      day: "Every Sunday",
      location: "Main Sanctuary",
      description:
        "Our main worship service includes vibrant praise and worship, prayer, and a relevant biblical message to equip you for your week ahead. Children's church is available for kids ages 4-12.",
    },
    {
      id: "2",
      title: "Wednesday Bible Study",
      time: "6:30 PM - 8:00 PM",
      day: "Every Wednesday",
      location: "Fellowship Hall",
      description:
        "Dive deeper into God's word in our midweek Bible study. Each session includes teaching, discussion, and application to help you grow in your knowledge and understanding of Scripture.",
    },
    {
      id: "3",
      title: "Friday Prayer Meeting",
      time: "7:00 PM - 9:00 PM",
      day: "Every Friday",
      location: "Prayer Room",
      description:
        "Join us as we seek God's face together in prayer. We intercede for our church, community, nation, and world needs while also offering praise and thanksgiving.",
    },
  ];

  const specialServices = [
    {
      title: "Communion Service",
      frequency: "First Sunday of each month",
      description:
        "We celebrate the Lord's Supper together as a church family, remembering Christ's sacrifice and celebrating our unity in Him.",
      icon: <CalendarDays className="h-10 w-10 text-church-purple" />,
    },
    {
      title: "Worship Night",
      frequency: "Last Friday of each month",
      description:
        "An extended evening of praise and worship dedicated to exalting God through music, dance, and creative expressions of worship.",
      icon: <Music className="h-10 w-10 text-church-purple" />,
    },
    {
      title: "Baptism Service",
      frequency: "Quarterly",
      description:
        "A special service celebrating new believers who are taking the step of water baptism as a public declaration of their faith in Christ.",
      icon: <Users className="h-10 w-10 text-church-purple" />,
    },
    {
      title: "Baby Dedication",
      frequency: "Bi-monthly",
      description:
        "A meaningful ceremony where parents commit to raising their children in the ways of the Lord with the support of the church family.",
      icon: <Baby className="h-10 w-10 text-church-purple" />,
    },
  ];

  return (
    <Layout>
      <Hero
        title="Church Services"
        subtitle="Join us in worship and fellowship"
        backgroundImage="https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Regular Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Regular Services"
            subtitle="We invite you to join us for our weekly services and activities"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regularServices.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CalendarDays className="h-5 w-5 text-church-purple mr-3" />
                      <span>{service.day}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-church-purple mr-3" />
                      <span>{service.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-church-purple mr-3" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Special Services"
            subtitle="Special occasions where we gather for unique purposes"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-church-purple/10 p-4 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-church-purple font-medium mb-3">
                        {service.frequency}
                      </p>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What to Expect"
            subtitle="Information for your first visit to Household Chapel International"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Church service"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Warm Welcome</h3>
                  <p className="text-gray-600">
                    When you arrive, our welcome team will greet you, help you find your way around, and answer any questions you might have.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Worship Experience</h3>
                  <p className="text-gray-600">
                    Our services include contemporary and traditional worship music, prayer, and a relevant, Bible-based message that applies to daily life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Children's Ministry</h3>
                  <p className="text-gray-600">
                    We provide safe, fun, and age-appropriate children's programs during our main services for kids from infants through elementary school.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Fellowship</h3>
                  <p className="text-gray-600">
                    After the service, we invite you to stay for refreshments and to connect with others in our church family. We believe relationships are essential to spiritual growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Dress Code</h3>
                  <p className="text-gray-600">
                    There is no formal dress code. Some people dress casually while others prefer more formal attire. We want you to feel comfortable when you join us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Location & Directions"
            subtitle="Find your way to Household Chapel International"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-96">
                {/* This would typically be an embedded Google Map */}
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <span className="text-gray-600">
                    Map would be embedded here
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-church-purple mr-3 mt-1" />
                    <span>
                      123 Faith Avenue
                      <br />
                      City, Country
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-church-purple mr-3" />
                    <span>Sunday Services: 9:00 AM - 11:30 AM</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Directions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">From Downtown:</h4>
                    <p className="text-gray-600">
                      Take Main Street north for 2 miles. Turn right onto Faith Avenue. The church will be on your left, just past the community center.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">From the Highway:</h4>
                    <p className="text-gray-600">
                      Take Exit 12 and turn west onto Hope Road. Continue for 1 mile, then turn left onto Faith Avenue. The church will be on your right after 0.5 miles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Public Transportation:</h4>
                    <p className="text-gray-600">
                      Bus routes 5 and 8 stop directly in front of the church. The nearest subway station is Central Station, a 10-minute walk from the church.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
