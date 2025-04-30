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
  "css3",
  "next.js",
  "docker",
  "git",
  "visualstudiocode",
  "php",
  "c",
  "blender",
  "mysql",
  "nodedotjs",
  
];

export function IconCloudDemo() {
    const images = [
        ...slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`),
        'photoshop.png', // Imagen local personalizada
        'vsc-icon.png',
        'sql.png',
        'java.webp',
        'github.webp',
        'angular.webp',
        
      ];

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
