import { Button } from "@/components/ui/button";
type AdminButtonsProps = {
  actionType: "add" | "edit";
};

export default function AdminButtons({ actionType }: AdminButtonsProps) {
  return <Button>{actionType === "add" ? "Add Product" : "edit"}</Button>;
}
