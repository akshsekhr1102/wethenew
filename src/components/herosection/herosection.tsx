import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Logo from "../logo";

export default function Herosection() {
  return (
    <main className=" bg-[url('/bgimg.png')] md:bg-[url('/bgmd.png')] bg-cover bg-center bg-no-repeat flex flex-col  items-center min-h-[85vh]  justify-end md:justify-center md:items-end md:px-20 py-8">
      <Card className="rounded-sm ">
        <CardHeader className="px-4 py-2">
          <CardTitle className="font-normal  text-md tracking-tight ">
            Back to school
          </CardTitle>
          <CardDescription className="text-xs text-pretty">
            Discover our selection of sneakers for back-to-school!
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-4">
          <Button className="rounded-sm px-6"> Discover</Button>
        </CardContent>
      </Card>
    </main>
  );
}
