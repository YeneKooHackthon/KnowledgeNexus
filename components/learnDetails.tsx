import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Input } from "@/components/ui/input";
import { FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DetailsPageInput from "./detailsPageInput";

export default async function LearnDetails() {
  const videoId1 = "https://www.youtube.com/watch?v=LFyjJBiltFI";
  const videoId2 = "URUJD5NEXC8&pp=ygUMY2VsbCBiaW9sb2d5";
  const videoId3 = "t5DvF5OVr1Y&pp=ygUMY2VsbCBiaW9sb2d5";
  const pdfUrl =
    "http://www.bio-nica.info/Biblioteca/Bolsover2004CellBiology.pdf";

  // Generate Markdown content with embedded PDF
  const markdownContent = `
  ## Search Result
  
  **Cell biology** is a field of biology that studies cells, their physiological properties, their structure, and the organelles they contain. Understanding cell biology is fundamental to all biological sciences and is crucial for many medical and scientific advancements.
  
  ### Key Concepts in Cell Biology
  
  Cell biology is divided into several key categories:
  
  - **Cell Structure**: Study of the physical and chemical structure of cells.
  - **Cellular Processes**: Understanding the functions and mechanisms of cells, including cell division, metabolism, and signaling.
  - **Cellular Interactions**: How cells interact with their environment and other cells.
  - **Cell Development**: Processes involved in cell growth, differentiation, and development.
  
  ### Major Cell Types
  
  Cells are broadly classified into two categories:
  
  - **Prokaryotic Cells**: Simple, single-celled organisms without a nucleus (e.g., bacteria).
  - **Eukaryotic Cells**: Complex cells with a nucleus and organelles (e.g., plant and animal cells).
  
  ### Learning Resources
  
  To learn more about cell biology, take a look at the following resources:
  
  - [Cell Biology - Nature](https://www.nature.com/subjects/cell-biology) - Articles and research papers on cell biology.
  - [Cell Biology - Khan Academy](https://www.khanacademy.org/science/biology/cell-biology) - Interactive tutorials and videos on cell biology.
  - [Cell Biology - NCBI](https://www.ncbi.nlm.nih.gov/books/NBK9839/) - Comprehensive textbook on cell biology available online.
  
  ## YouTube Videos
  
  ### Best YouTube videos tailored to the topic:
  
  <div class="grid grid-cols-3 gap-4">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId1}" frameborder="0" allowfullscreen class='rounded-md'></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId2}" frameborder="0" allowfullscreen class='rounded-md'></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId3}" frameborder="0" allowfullscreen class='rounded-md'></iframe>
  </div>
  
  ## Similar PDF Document
  
  The PDF document below is a good resource that can help you excel in your course:
  
  <div class="pdf-container">
    <iframe src="${pdfUrl}" class='rounded-md' width="100%" height="600px" frameborder="0"></iframe>
  </div>
  `;

  // Return JSX to render MDX content
  return (
    <div className="w-[97.5%] flex md:w-full h-full relative justify-center items-center">
      <article className="pt-2 pb-[5.2em] max-w-3xl w-full prose lg:prose-xl">
        <MDXRemote source={markdownContent} />
      </article>
      <div className=" bg-white fixed bottom-0 w-[97.5%] md:container h-[5em] flex justify-center flex-col items-center gap-1 md:w-full">
        <DetailsPageInput />
        <h2 className=" text-gray-400 text-[10px] md:text-sm">
          KNexus can make mistakes. Check important info.
        </h2>
      </div>
    </div>
  );
}
