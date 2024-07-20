import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Input } from "@/components/ui/input";
import { FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DetailsPageInput from "./detailsPageInput";

export default async function LearnDetails() {
  const videoId1 = "wdQH-SfdxjQ";
  const videoId2 = "wdQH-SfdxjQ";
  const videoId3 = "wdQH-SfdxjQ";
  const pdfUrl = "https://arxiv.org/pdf/1706.03762v5";

  // Generate Markdown content with embedded PDF
  const markdownContent = `

  ## Learn More

  To learn more about Next.js, take a look at the following resources:
  
  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  
  You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
  

       # Embedded YouTube Videos

       To embed multiple YouTube videos in Markdown, use HTML \`<iframe>\` inside a grid or flex container:

       <div class="grid grid-cols-3 gap-4 \">
         <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId1}" frameborder="0" allowfullscreen class='rounded-md'></iframe>
         <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId2}" frameborder="0" allowfullscreen class='rounded-md'></iframe>
         <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId3}" frameborder="0" allowfullscreen class='rounded-md'></iframe>
       </div>

# Embedded PDF Document

To embed a PDF document in Markdown, use an HTML \`<iframe>\` or \`<object>\`:

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
