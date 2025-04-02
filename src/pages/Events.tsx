
import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  // Sample events data
  const upcomingEvents = [
    {
      id: "1",
      title: "Annual Church Conference",
      date: "2023-09-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join us for a day of spiritual growth, fellowship, and inspiration at our Annual Church Conference. Featuring guest speakers, workshops, and worship.",
      category: "conference",
    },
    {
      id: "2",
      title: "Youth Camp",
      date: "2023-10-05",
      time: "All Day",
      location: "Camp Grounds",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A special retreat for our youth to connect with God and each other through fun activities and worship.",
      category: "youth",
    },
    {
      id: "3",
      title: "Community Outreach",
      date: "2023-09-23",
      time: "10:00 AM - 2:00 PM",
      location: "Downtown Park",
      image: "https://images.unsplash.com/photo-1469571486292-b5175a148cf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join us as we serve our community by providing food, clothing, and prayers to those in need.",
      category: "outreach",
    },
    {
      id: "4",
      title: "Marriage Retreat",
      date: "2023-11-10",
      time: "Friday 6:00 PM - Sunday 2:00 PM",
      location: "Mountain Retreat Center",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A weekend retreat designed to strengthen marriages through God's principles of love, respect, and commitment.",
      category: "retreat",
    },
    {
      id: "5",
      title: "Prayer Vigil",
      date: "2023-09-30",
      time: "8:00 PM - 12:00 AM",
      location: "Prayer Room",
      image: "https://images.unsplash.com/photo-1501946623428-b301146b83d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join us for a night of united prayer as we intercede for our church, community, and nation.",
      category: "prayer",
    },
    {
      id: "6",
      title: "Thanksgiving Service",
      date: "2023-11-23",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1510006434045-fd4232a6ff9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A special service to express gratitude to God for His blessings and faithfulness throughout the year.",
      category: "service",
    },
  ];

  const pastEvents = [
    {
      id: "7",
      title: "Easter Sunday Service",
      date: "2023-04-09",
      time: "9:00 AM - 11:30 AM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1557132720-57c1b8528229?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A celebration of the resurrection of Jesus Christ with inspiring worship and message.",
      category: "service",
    },
    {
      id: "8",
      title: "Worship Night",
      date: "2023-07-14",
      time: "7:00 PM - 9:30 PM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "An evening dedicated to worship through music, prayer, and communion.",
      category: "worship",
    },
    {
      id: "9",
      title: "Children's Day Celebration",
      date: "2023-06-04",
      time: "11:00 AM - 2:00 PM",
      location: "Church Grounds",
      image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A fun-filled day for children with games, activities, and refreshments to celebrate their importance in our church family.",
      category: "children",
    },
  ];

  // Get all unique categories from events
  const allCategories = [...new Set([
    ...upcomingEvents.map(event => event.category),
    ...pastEvents.map(event => event.category)
  ])];
  
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Filter events based on selected category
  const getFilteredEvents = (events: typeof upcomingEvents) => {
    if (selectedCategory === "all") return events;
    return events.filter(event => event.category === selectedCategory);
  };
  
  const filteredUpcomingEvents = getFilteredEvents(upcomingEvents);
  const filteredPastEvents = getFilteredEvents(pastEvents);

  return (
    <Layout>
      <Hero
        title="Church Events"
        subtitle="Join us for these special events and activities"
        backgroundImage="https://images.unsplash.com/photo-1538032101404-0063983bd0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      {/* Category Filter Section */}
      <section className="py-8 bg-church-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              className={selectedCategory === "all" ? "bg-church-purple text-white" : ""}
              onClick={() => setSelectedCategory("all")}
            >
              All Events
            </Button>
            
            {allCategories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-church-purple text-white" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Events Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue="upcoming" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming" className="px-8">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past" className="px-8">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming">
              {filteredUpcomingEvents.length > 0 ? (
                <>
                  <div className="mb-8 flex justify-between items-center">
                    <p className="text-gray-600">
                      Showing {filteredUpcomingEvents.length} upcoming event{filteredUpcomingEvents.length !== 1 ? 's' : ''}
                    </p>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Add to Calendar
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredUpcomingEvents.map(event => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No upcoming events found</h3>
                  <p className="text-gray-600 mb-6">
                    There are no upcoming events in this category at the moment.
                  </p>
                  <Button
                    onClick={() => setSelectedCategory("all")}
                    className="bg-church-purple hover:bg-church-dark text-white"
                  >
                    View All Events
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {filteredPastEvents.length > 0 ? (
                <>
                  <div className="mb-8">
                    <p className="text-gray-600">
                      Showing {filteredPastEvents.length} past event{filteredPastEvents.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPastEvents.map(event => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No past events found</h3>
                  <p className="text-gray-600 mb-6">
                    There are no past events in this category.
                  </p>
                  <Button
                    onClick={() => setSelectedCategory("all")}
                    className="bg-church-purple hover:bg-church-dark text-white"
                  >
                    View All Events
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Calendar Download Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Stay Updated"
              subtitle="Never miss an important church event"
              className="mb-8"
            />
            <p className="text-gray-600 mb-8">
              Subscribe to our church calendar to get automatic updates on all upcoming events, services, and activities. You can add our calendar to your Google Calendar, Apple Calendar, or Outlook.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-church-purple hover:bg-church-dark text-white gap-2">
                <Calendar className="h-5 w-5" />
                Subscribe to Calendar
              </Button>
              <Button variant="outline" className="border-church-purple text-church-purple hover:bg-church-purple hover:text-white">
                Download Events PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
