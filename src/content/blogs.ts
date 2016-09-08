import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

type Blog = CollectionEntry<"blog">;

interface LocalizedContents {
  en: Blog;
  others: { [lang: string]: Blog };
}

export function getLocalizedContent(
    contents: LocalizedContents,
    lang: string | undefined,
): Blog {
    if (lang === 'en') {
        return contents.en;
    }

    return lang && contents.others[lang] || contents.en;
}

export async function getGrouppedBlogs(): Promise<LocalizedContents[]> {
  const groupped = new Map<string, LocalizedContents>();
  const allPosts = await getCollection("blog");

  // first collect all contents - which is english
  for (const post of allPosts) {
    const group = post.data.group;
    const lang = post.data.lang || "en";
    if (lang !== "en") {
      continue;
    }

    groupped.set(group, {
      en: post,
      others: {},
    });
  }

  for (const post of allPosts) {
    const group = post.data.group;
    const lang = post.data.lang || "en";
    if (lang === "en") {
      continue;
    }

    const content = groupped.get(group);
    if (!content) {
      continue;
    }

    content.others[lang] = post;
  }

  return Array.from(groupped.values());
}
