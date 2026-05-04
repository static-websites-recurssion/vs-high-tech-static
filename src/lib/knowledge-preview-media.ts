import type { BlogCategory } from "@/lib/blog-posts";
import { machineryPlantPhotos } from "@/lib/machinery-plant-photos";
import { siteImages } from "@/lib/site-images";

/** Real plant / works photography for Knowledge Centre cards (replaces generic stock). */
export function knowledgeCardImage(category: BlogCategory): {
  src: string;
  alt: string;
} {
  switch (category) {
    case "Education":
      return {
        src: machineryPlantPhotos[4].src,
        alt: machineryPlantPhotos[4].alt,
      };
    case "Banking":
      return {
        src: machineryPlantPhotos[3].src,
        alt: machineryPlantPhotos[3].alt,
      };
    case "Technology":
      return {
        src: machineryPlantPhotos[5].src,
        alt: machineryPlantPhotos[5].alt,
      };
    case "Products":
      return {
        src: machineryPlantPhotos[8].src,
        alt: machineryPlantPhotos[8].alt,
      };
    case "Company":
      return {
        src: siteImages.worksHyderabadMainGate.src,
        alt: siteImages.worksHyderabadMainGate.alt,
      };
    default:
      return {
        src: siteImages.whyChooseUsPress.src,
        alt: siteImages.whyChooseUsPress.alt,
      };
  }
}
