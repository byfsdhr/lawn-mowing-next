import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const aboutDirectory = path.join(process.cwd(), "md_data/about");

export async function getAboutData() {
  const fullPath = path.join(aboutDirectory, `about.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id:"about",
    contentHtml,
    ...matterResult.data,
  };
}
