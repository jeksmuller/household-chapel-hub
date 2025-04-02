
import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import SermonCard from "@/components/SermonCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [speaker, setSpeaker] = useState("all");

  // Sample sermon data
  const sermons = [
    {
      id: "1",
      title: "Finding Hope in Difficult Times",
      preacher: "Pastor John Doe",
      date: "2023-08-28",
      duration: "45 minutes",
      category: "faith",
      image: "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A powerful message about finding hope and strength during life's challenges through faith in God.",
    },
    {
      id: "2",
      title: "The Power of Prayer",
      preacher: "Pastor Jane Smith",
      date: "2023-08-21",
      duration: "38 minutes",
      category: "prayer",
      image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Learn how prayer can transform your life and deepen your relationship with God.",
    },
    {
      id: "3",
      title: "Walking in God's Purpose",
      preacher: "Pastor John Doe",
      date: "2023-08-14",
      duration: "42 minutes",
      category: "purpose",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Discover how to identify and fulfill God's unique purpose for your life.",
    },
    {
      id: "4",
      title: "The Grace of Giving",
      preacher: "Pastor Michael Johnson",
      date: "2023-08-07",
      duration: "40 minutes",
      category: "stewardship",
      image: "https://images.unsplash.com/photo-1480623826718-27e89ac63a4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Understanding biblical principles of generosity and the blessings that come from cheerful giving.",
    },
    {
      id: "5",
      title: "Building Strong Families",
      preacher: "Pastor Jane Smith",
      date: "2023-07-31",
      duration: "47 minutes",
      category: "family",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Biblical principles for building healthy, God-centered families in today's challenging world.",
    },
    {
      id: "6",
      title: "Overcoming Fear with Faith",
      preacher: "Pastor Michael Johnson",
      date: "2023-07-24",
      duration: "39 minutes",
      category: "faith",
      image: "https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "How to face your fears and overcome them through unwavering faith in God's promises.",
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "faith", label: "Faith" },
    { value: "prayer", label: "Prayer" },
    { value: "purpose", label: "Purpose" },
    { value: "stewardship", label: "Stewardship" },
    { value: "family", label: "Family" },
  ];

  const speakers = [
    { value: "all", label: "All Speakers" },
    { value: "Pastor John Doe", label: "Pastor John Doe" },
    { value: "Pastor Jane Smith", label: "Pastor Jane Smith" },
    { value: "Pastor Michael Johnson", label: "Pastor Michael Johnson" },
  ];

  // Filter sermons based on search term, category, and speaker
  const filteredSermons = sermons.filter((sermon) => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || sermon.category === category;
    const matchesSpeaker = speaker === "all" || sermon.preacher === speaker;
    
    return matchesSearch && matchesCategory && matchesSpeaker;
  });

  return (
    <Layout>
      <Hero
        title="Sermons"
        subtitle="Listen and grow in faith through our message series"
        backgroundImage="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      {/* Filter Section */}
      <section className="py-12 bg-church-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                placeholder="Search sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={speaker} onValueChange={setSpeaker}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select speaker" />
                </SelectTrigger>
                <SelectContent>
                  {speakers.map((spk) => (
                    <SelectItem key={spk.value} value={spk.value}>
                      {spk.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredSermons.length > 0 ? (
            <>
              <div className="mb-10">
                <p className="text-gray-600">
                  Showing {filteredSermons.length} sermon{filteredSermons.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSermons.map((sermon) => (
                  <SermonCard key={sermon.id} {...sermon} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-2">No sermons found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all sermons
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setCategory("all");
                  setSpeaker("all");
                }}
                className="bg-church-purple hover:bg-church-dark text-white"
              >
                Show All Sermons
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Series Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Popular Sermon Series"
            subtitle="Dive deeper into these multi-part teachings on important topics"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Foundations of Faith"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Foundations of Faith</h3>
                <p className="text-white/80 mb-4">5-part series on the core principles of Christian faith</p>
                <Button 
                  className="bg-church-red hover:bg-red-700 text-white w-full"
                  variant="secondary"
                >
                  Start Series
                </Button>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1501611724492-c09bebdba1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Transformed by Grace"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Transformed by Grace</h3>
                <p className="text-white/80 mb-4">4-part series on God's amazing grace and its power</p>
                <Button 
                  className="bg-church-red hover:bg-red-700 text-white w-full"
                  variant="secondary"
                >
                  Start Series
                </Button>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8573e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Kingdom Living"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Kingdom Living</h3>
                <p className="text-white/80 mb-4">6-part series on living as citizens of God's kingdom</p>
                <Button 
                  className="bg-church-red hover:bg-red-700 text-white w-full"
                  variant="secondary"
                >
                  Start Series
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
