# 
# 🍕 Pizzeria

🧄 Frontend for pizza reviews. Made with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [Next.js](https://nextjs.org/), and pizza.

🧄 [Are.na Moodboard](https://www.are.na/share/lzeXCkR) 
## getting started

First, run the development server:

```bash
pnpm run dev # Starts the development server.
pnpm run build # Builds the app for production.
pnpm start # Runs the built app in production mode.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## development log
### april 23, 2022
* it must be possible to pull out a single markdown file as the content source for the About page but all the tutorials expected it would be part of a larger blogpost, figure out how  `getStaticProps()` works? [link](https://w3collective.com/static-blog-next-js/)
* for next time: just use mapbox-gl directly, it's...fine 🙄
  
```typescript
somewhere in lib/posts.ts
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getSortedPostsData() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, "");
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     const matterResult = matter(fileContents);
//     console.log(matterResult)

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allPostsData.sort(({ date: a }, { date: b }) => {
//     if (a < b) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }
```