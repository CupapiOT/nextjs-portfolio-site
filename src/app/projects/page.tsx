import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/pages/projects/ProjectCard";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar
        links={[
          ["../", "Home"],
          ["./projects", "Projects"],
        ]}
        whichLink={1}
      />
      <main className="text-lg mt-[6.5em] max-w-full w-full flex flex-col items-center gap-y-16">
        <ProjectCard
          id="project-1"
          title="Simple Portfolio Site"
          imgSrc="/src/projects/portfolio-site.webp"
          desc="Designed and actively maintaining a personal portfolio site using standard HTML, CSS, and JS—focused on simplicity and reinforcing core web development skills."
          link="https://cupapiot.github.io"
          year={["2024", "2025"]}
          techUsed={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          id="project-2"
          title="Matrix Visualizer Web-app"
          imgSrc="/src/projects/animated-matrices.webp"
          desc="A self-initiated project to help visualize linear algebra transformations, built to deepen my understanding of matrix math. Open source on GitHub."
          link="https://github.com/CupapiOT/animated-matrices"
          year={["2024", "PRESENT"]}
          techUsed={["Python", "Python Dash", "Python Plotly"]}
        />
        <ProjectCard
          id="project-3"
          title="Image References Desktop App"
          imgSrc="/src/projects/image-references.webp"
          desc="Handled all aspects solo in building a reference-sketching tool for a professional artist (my brother). Evolved through regular feedback, for practicality and ease of use."
          link="https://github.com/CupapiOT/croquis-image-references"
          year={["2023", "2024"]}
          techUsed={["Python", "CustomTkinter"]}
        />
      </main>
      <Footer />
    </>
  );
}
