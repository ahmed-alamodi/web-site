"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "حوار التنبيه",
    href: "/docs/primitives/alert-dialog",
    description: "حوار تنبيه يقاطع المستخدم بمحتوى مهم ويتوقع استجابة.",
  },
  {
    title: "بطاقة التمرير",
    href: "/docs/primitives/hover-card",
    description: "للمستخدمين المبصرين لمعاينة المحتوى المتاح خلف الرابط.",
  },
  {
    title: "التقدم",
    href: "/docs/primitives/progress",
    description:
      "يعرض مؤشرًا يوضح تقدم إكمال المهمة، يتم عرضه عادةً كشريط تقدم.",
  },
  {
    title: "منطقة التمرير",
    href: "/docs/primitives/scroll-area",
    description: "يفصل المحتوى بصريًا أو دلاليًا.",
  },
  {
    title: "علامات التبويب",
    href: "/docs/primitives/tabs",
    description:
      "مجموعة من الأقسام المتراكبة من المحتوى - المعروفة باسم لوحات التبويب - التي يتم عرضها واحدة تلو الأخرى.",
  },
  {
    title: "تلميح الأدوات",
    href: "/docs/primitives/tooltip",
    description:
      "نافذة منبثقة تعرض معلومات متعلقة بعنصر ما عندما يحصل العنصر على تركيز لوحة المفاتيح أو يحوم الماوس فوقه.",
  },
];

export function NavigationMenuComponent() {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>البدء</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      مكونات مصممة بشكل جميل تم بناؤها باستخدام Radix UI و
                      Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="مقدمة">
                مكونات قابلة لإعادة الاستخدام تم بناؤها باستخدام Radix UI و
                Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="التثبيت">
                كيفية تثبيت التبعيات وهيكلة تطبيقك.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="الطباعة">
                أنماط للعناوين والفقرات والقوائم...إلخ
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>المكونات</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              التوثيق
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
