import * as AvatarPrimitive from "@radix-ui/react-avatar";

// Export the Fallback component directly
export const AvatarFallback = AvatarPrimitive.Fallback; 

export function Avatar({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
  return (
    <AvatarPrimitive.Root className={className}>
      <AvatarPrimitive.Image src={src} alt={alt} />
      <AvatarPrimitive.Fallback>
        {/* You can put initials or a default icon here */}
        <span>{alt ? alt[0] : "?"}</span>
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}