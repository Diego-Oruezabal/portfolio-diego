import { IconCloud } from "./cloud";

const slugs = [
  "typescript",
  "javascript",
  "three.js",
  "java",
  "react",
  "mongodb",
  "laravel",
  "html5",
  "css",
  "css3",
  "tailwindcss",
  "bootstrap",
  "next.js",
  "docker",
  "git",
  "visualstudiocode",
  "php",
  "c",
  "blender",
  "mysql",
  "nodedotjs",
  "tomcat",
  "angular",
  "photoshop",
  "postman",
  "apache",
  "workbench",
  "sql",
  "github",
  "vscode",
  "postgresql",
  "java",
  "githubcopilot",
  "wordpress",
];

export function IconCloudDemo() {
    const images = [
        ...slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`),
        '/photoshop.png', // Imagen local personalizada
        '/vsc-icon.png',
        '/sql.png',
        '/java.webp',
        '/github.webp',
        '/angular.webp',
        '/workbench.jpg',
        '/postman.webp',
        '/apache.png',
        '/tomcat.png',
        
      ];

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
