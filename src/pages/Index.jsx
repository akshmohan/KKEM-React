import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import ImageSlider from "../components/ImageSlider"; // Import the ImageSlider component
import ProjectDetails from "../components/ProjectDetails";
import WhosWho from "../components/WhosWho";
import WhyChooseSection from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Index = () => {
  return (
    <div>
      <Header />

      <ImageSlider />

      <WhosWho />

      <AboutSection />

      <WhyChooseSection />

      <ProjectDetails />

      <EventsSection />

      <Testimonials />

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default Index;
