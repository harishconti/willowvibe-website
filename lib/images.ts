import imageData from '@/public/image-data.json';

export interface OptimizedImage {
  src: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export function getOptimizedImage(src: string): OptimizedImage {
  // If the src is in our image data map, return the optimized version
  if (imageData && (imageData as Record<string, OptimizedImage>)[src]) {
    return (imageData as Record<string, OptimizedImage>)[src];
  }

  // Otherwise return the original src
  return { src };
}
