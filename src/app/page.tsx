import AboutSection from '@/components/about/about';
import ContactSection from '@/components/contact/contact';
import EducationSection from '@/components/education/education';
import HeroSection from '@/components/hero/hero';
import Navbar from '@/components/navbar/navbar';
import ProjectSection from '@/components/projects/projects';
import SkillsSection from '@/components/skills/skills';
import { Button } from '@/components/ui/button';



const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <EducationSection/>
      <ProjectSection/>
      <ContactSection/>
      <div>
      <Button>Click me</Button>
    </div>
    </div>
  );
};

export default page;