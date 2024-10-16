"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu.jsx";

const NavigationMenuServices = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent m-0">
            <Link href={"/services"}>Services </Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="">
            <ul className="grid gap-1 py-2 md:w-[200px] lg:w-[300px] bg-[#e9e9e97a] backdrop-blur-md">
              <ListItem title="Air Freight Shipping">
                <Link href={"/services/air-freight-shipping"} className="text-black font-medium">
                Air Freight Shipping
                </Link>
              </ListItem>
              <ListItem title="Buy and Sell Used Containers">
                <Link href={"/services/buy-and-sell-used-containers"} className="text-black font-medium">
                Buy and Sell Used Containers
                </Link>
              </ListItem>
              <ListItem title="Container Trading Services">
                <Link href={"/services/container-trading-services"} className="text-black font-medium">Container Trading Services</Link>
              </ListItem>
              <ListItem title="Custom Clearance Service">
                <Link href={"/services/custom-clearance-service"} className="text-black font-medium">Custom Clearance Service</Link>
              </ListItem>
              <ListItem title="Event And Exhibition Logistics">
                <Link href={"/services/event-and-exhibition-logistics"} className="text-black font-medium">Event And Exhibition Logistics</Link>
              </ListItem>
              <ListItem title="Project Forwarding and Chartering">
                <Link href={"/services/project-forwarding-and-chartering"} className="text-black font-medium">Project Forwarding and Chartering</Link>
              </ListItem>
              <ListItem title="Third Party Logistics Warehousing">
                <Link href={"/services/third-party-logistics-warehousing"} className="text-black font-medium">Third Party Logistics Warehousing</Link>
              </ListItem>
              <ListItem title="Sea Freight Shipping">
                <Link href={"/services/sea-freight-shipping"} className="text-black font-medium">Sea Freight Shipping</Link>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuServices;

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20",
              className
            )}
            {...props}
          >
            <div className="text-sm font-light leading-none">{children}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p> */}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
