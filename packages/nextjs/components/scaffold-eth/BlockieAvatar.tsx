import { AvatarComponentProps } from "@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/AvatarContext";
import Blockies from "react-blockies";
import { cn } from "~~/lib/utils";

type BlockieProps = AvatarComponentProps & {
  className?: any;
};

// Custom Avatar for RainbowKit
export const BlockieAvatar = ({ address, ensImage, size, className }: BlockieProps) =>
  ensImage ? (
    // Don't want to use nextJS Image here (and adding remote patterns for the URL)
    // eslint-disable-next-line
    <img
      className={cn("rounded-full", className)}
      src={ensImage}
      width={size}
      height={size}
      alt={`${address} avatar`}
    />
  ) : (
    <Blockies
      className={cn("rounded-full", className)}
      seed={address?.toLowerCase() as string}
      scale={size > 30 ? 10 : 3.75}
    />
  );
