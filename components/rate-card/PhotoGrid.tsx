import Image from "next/image";

interface PhotoGridProps {
  photos: { src: string; alt: string }[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border shadow print:break-inside-avoid"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, 380px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
