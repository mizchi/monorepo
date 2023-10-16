import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Grid, GridItem, SubGrid } from "./layout";

export default function App() {
  return (
    <>
      <Grid
        rows={["32px", "1fr", "1fr", "1fr", "1fr"]}
        columns={5}
        style={{ width: "30vw", height: "30vh", gap: "10px" }}
      >
        <GridItem area={[0, 0, 5, 1]} style={{ backgroundColor: "wheat" }}>
          header
        </GridItem>
        <SubGrid area={[1, 1, 4, 4]} style={{ backgroundColor: "#ddd" }}>
          <GridItem area={[0, 0, 1, 1]} style={{ backgroundColor: "wheat" }}>
            0-0/1-1
          </GridItem>
          <GridItem area={[1, 1, 2, 2]} style={{ backgroundColor: "wheat" }}>
            1-1/2-2
          </GridItem>
        </SubGrid>
      </Grid>

      <hr />

      {/* card */}
      <Card>
        <CardHeader>
          <CardTitle>Button</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              console.log("click");
            }}
          >
            Button
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AlertDialog</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger>
              <div className="bg-primary text-primary-foreground hover:bg-primary/90 rounded px-4 pl-4 pt-2 pb-2">
                Open
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      {/* navigation menu */}
      <Card>
        <CardHeader>
          <CardTitle>Navigation Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </CardContent>
      </Card>
    </>
  );
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  const { renderToString } = await import("react-dom/server");
  test("render", () => {
    expect(renderToString(<App />)).contain("Hello react+tailwind");
  });
}
