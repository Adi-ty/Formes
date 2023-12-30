"use client";
import { useEffect, useState } from "react";
import { ImShare } from "react-icons/im";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

function FormLinkShare({ shareUrl }: { shareUrl: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoiding window not defined error

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <div className="flex flex-grow gap-4 items-center">
      <Input readOnly value={shareLink} />
      <Button
        className="w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
            title: "Copied",
            description: "Link copied to clipboard",
          });
        }}
      >
        <ImShare className="mr-4 h-4 w-4" />
        Share Link
      </Button>
    </div>
  );
}

export default FormLinkShare;
