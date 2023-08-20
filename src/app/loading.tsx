import { Icons } from "@/components/icons/icons";

export default function Loading() {
  return <div className="m-auto">
    <p className="">
      <Icons.spinner className="mr-2 h-16 w-16 animate-spin" />
      ... Loading
    </p>
  </div>
}