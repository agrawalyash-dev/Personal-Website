import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import type { ComponentProps } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MoveRight } from "lucide-react";

type MenuItem = {
  label: string;
} & ComponentProps<typeof Link>;

const menus: MenuItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Technologies", to: "/technologies" },
  { label: "Profiles", to: "/profiles" },
];

const Header = () => {
  return (
    <header className="border-b">
      <div className="wrapper grid grid-cols-2 lg:grid-cols-3 h-16 items-center ">
        <Link to="/">
          <p className="text-2xl font-semibold">
            YA<span className="text-primary ml-0.5">.</span>
          </p>
        </Link>
        <div className="lg:flex items-center gap-4 justify-center hidden">
          {menus.map((m, idx) => (
            <Link
              key={`menu-${idx}`}
              to={m.to}
              activeProps={{ className: "text-primary" }}
            >
              <Button variant={"ghost"}>{m.label}</Button>
            </Link>
          ))}
        </div>
        <div className="justify-self-end">
          <Sheet>
            <SheetTrigger
              render={<Button size={"icon"} className="lg:hidden" />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <SheetClose>
                    <Link to="/">
                      <p className="text-xl font-semibold font-serif">
                        YA<span className="text-primary ml-0.5">.</span>
                      </p>
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="space-y-2 flex flex-col gap-4">
                {menus.map((m, idx) => (
                  <Link
                    key={`menu-${idx}`}
                    to={m.to}
                    activeProps={{ className: "text-primary" }}
                  >
                    <SheetClose render={<Button variant={"ghost"} />}>
                      {m.label}
                    </SheetClose>
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <Link to="/contact">
                  <SheetClose render={<Button className={"w-full"} />}>
                    Connect <MoveRight />
                  </SheetClose>
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Link to="/contact">
            <Button className={"hidden lg:flex"}>
              Connect <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
