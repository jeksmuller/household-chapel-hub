
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  overlayOpacity?: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = "/",
  secondaryButtonText,
  secondaryButtonLink = "/",
  className,
  overlayOpacity = "bg-black/50",
}: HeroProps) => {
  return (
    <div 
      className={cn(
        "relative flex items-center justify-center py-32 md:py-40 lg:py-52 px-6",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {buttonText && (
            <Button
              asChild
              size="lg"
              className="bg-church-purple hover:bg-church-dark text-white text-lg"
            >
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          )}
          
          {secondaryButtonText && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-church-purple text-lg"
            >
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
