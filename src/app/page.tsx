import AboutSection from '@/components/about/about';
import ContactSection from '@/components/contact/contact';
import EducationSection from '@/components/education/education';
import FooterSection from '@/components/footer/footer';
import HeroSection from '@/components/hero/hero';
import Navbar from '@/components/navbar/navbar';
import ProjectSection from '@/components/projects/projects';
import SkillsSection from '@/components/skills/skills';




const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
};

export default page;