
import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Image, Calendar, Camera, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define a type for blog posts
interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
  gallery?: string[]; // Optional array of additional images
}

// Sample blog posts data
const sampleBlogPosts: BlogPost[] = [
  {
    id: "0",
    title: "Outreach Program - 25th Anniversary Preparation",
    content: "Our community outreach program successfully served many families in our neighborhood before our church's 25th anniversary celebration. Church members volunteered their time and resources to make this event impactful for those in need.",
    date: "2023-10-15",
    image: "/lovable-uploads/image_0.png", // Using first uploaded image as cover
    gallery: [
      "/lovable-uploads/image_1.png",
      "/lovable-uploads/image_2.png",
      "/lovable-uploads/image_3.png",
      "/lovable-uploads/image_4.png",
      "/lovable-uploads/image_5.png",
      "/lovable-uploads/image_6.png",
      "/lovable-uploads/image_7.png",
      "/lovable-uploads/image_8.png",
      "/lovable-uploads/image_9.png",
      "/lovable-uploads/image_10.png",
      "/lovable-uploads/image_11.png",
      "/lovable-uploads/image_12.png",
      "/lovable-uploads/image_13.png",
      "/lovable-uploads/image_14.png",
      "/lovable-uploads/image_15.png",
      "/lovable-uploads/image_16.png",
      "/lovable-uploads/image_17.png",
      "/lovable-uploads/image_18.png"
    ]
  },
  {
    id: "1",
    title: "Youth Conference 2023",
    content: "Our youth conference was a tremendous success with over 200 young people in attendance. The theme 'Rooted in Christ' inspired many to deepen their faith and commitment.",
    date: "2023-07-15",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Easter Sunday Celebration",
    content: "We had a beautiful Easter service celebrating the resurrection of our Lord. The sanctuary was filled with flowers, and the choir performed special music for the occasion.",
    date: "2023-04-09",
    image: "https://images.unsplash.com/photo-1557132720-57c1b8528229?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Community Outreach Day",
    content: "Our church members came together to serve our local community. We provided meals, clothing, and prayer to over 150 individuals and families in need.",
    date: "2023-05-20",
    image: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Form schema for blog post creation
const blogFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  image: z.string().min(1, "Please upload or provide an image URL")
});

type BlogFormValues = z.infer<typeof blogFormSchema>;

const Blog = () => {
  const { toast } = useToast();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(sampleBlogPosts);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState<string | null>(null);
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      content: "",
      image: ""
    }
  });

  const onSubmit = (values: BlogFormValues) => {
    // Create a new blog post
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: values.title,
      content: values.content,
      date: new Date().toISOString().split('T')[0],
      image: values.image
    };
    
    // Add the new post to the beginning of the array
    setBlogPosts([newPost, ...blogPosts]);
    
    // Reset form and selected image
    form.reset();
    setSelectedImage(null);
    setIsAddingPost(false);
    
    // Show success toast
    toast({
      title: "Blog Post Published",
      description: "Your new blog post has been published successfully.",
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const imageUrl = event.target.result.toString();
          setSelectedImage(imageUrl);
          form.setValue("image", imageUrl, { shouldValidate: true });
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const toggleGallery = (postId: string) => {
    if (showGallery === postId) {
      setShowGallery(null);
    } else {
      setShowGallery(postId);
    }
  };

  return (
    <Layout>
      <Hero
        title="Blog & Photo Gallery"
        subtitle="Pictures and stories from our church events"
        backgroundImage="/lovable-uploads/25c585a0-384b-4a36-9018-8f9958f02cf0.png"
        overlayOpacity="bg-black/60"
      />
      
      {/* Add Post Button Section */}
      <section className="py-8 bg-church-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Recent Posts</h2>
            {!isAddingPost && (
              <Button 
                onClick={() => setIsAddingPost(true)} 
                className="bg-church-purple hover:bg-church-dark text-white"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add New Post
              </Button>
            )}
          </div>
        </div>
      </section>
      
      {/* Add Post Form Section */}
      {isAddingPost && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Create New Blog Post</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Post Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter post title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Post Content</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your post content..." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Post Image</FormLabel>
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center gap-4">
                              <Button 
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('image-upload')?.click()}
                                className="flex items-center gap-2"
                              >
                                <Camera className="h-5 w-5" />
                                Upload Image
                              </Button>
                              <Input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                              />
                              <span className="text-sm text-gray-500">or</span>
                              <Input
                                type="text"
                                placeholder="Enter image URL"
                                className="flex-1"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  setSelectedImage(e.target.value);
                                }}
                              />
                            </div>
                            
                            {selectedImage && (
                              <div className="mt-4 border rounded-md p-2">
                                <p className="text-sm font-medium mb-2">Image Preview:</p>
                                <img 
                                  src={selectedImage} 
                                  alt="Preview" 
                                  className="max-h-[200px] object-contain mx-auto"
                                />
                              </div>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end gap-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => {
                          setIsAddingPost(false);
                          form.reset();
                          setSelectedImage(null);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-church-purple hover:bg-church-dark text-white"
                      >
                        Publish Post
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
      
      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row gap-8 border-b pb-12">
                <div className="md:w-1/3">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-church-purple">{post.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                  
                  {post.gallery && (
                    <Button 
                      variant="link" 
                      className="text-church-purple p-0 hover:text-church-dark mb-4"
                      onClick={() => toggleGallery(post.id)}
                    >
                      {showGallery === post.id ? "Hide Photo Gallery" : "View Photo Gallery"}
                    </Button>
                  )}
                  
                  {showGallery === post.id && post.gallery && (
                    <div className="mt-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {post.gallery.map((img, index) => (
                          <div 
                            key={index} 
                            className="aspect-square rounded-md overflow-hidden shadow-sm border"
                          >
                            <img 
                              src={img} 
                              alt={`Gallery image ${index + 1}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {!post.gallery && (
                    <Button 
                      variant="link" 
                      className="text-church-purple p-0 hover:text-church-dark"
                    >
                      Read More
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-church-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Share Your Experience"
              subtitle="We'd love to hear from you"
              className="mb-8"
            />
            <p className="text-gray-600 mb-8">
              Have you attended one of our events or services recently? Share your testimony or photos with us to be featured on our blog. Your story might encourage others.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-church-purple hover:bg-church-dark text-white gap-2">
                <Image className="h-5 w-5" />
                Submit a Testimony
              </Button>
              <Button variant="outline" className="border-church-purple text-church-purple hover:bg-church-purple hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
