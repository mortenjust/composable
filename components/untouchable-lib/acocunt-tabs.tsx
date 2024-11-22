"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings } from "lucide-react";

export function AccountTabs({ children }: { children: React.ReactNode }) {
  // DO something to the children so that we can use them as tabs
  // The problem is that the accountPage

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Account
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </TabsTrigger>
        {/* add the tabs from the children here. Only whatever was put into <AccountPageLabel> and <AccountPageIcon> */}
      </TabsList>

      <TabsContent value="account" className="space-y-4">
        <div className="p-4 rounded-lg border">
          <h3 className="text-lg font-medium">Account Information</h3>
          <p className="text-sm text-muted-foreground">
            View and manage your account details here.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <div className="p-4 rounded-lg border">
          <h3 className="text-lg font-medium">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Customize your account settings and preferences.
          </p>
        </div>
      </TabsContent>

      {/* and here, for each of the passed in <AccountPage> components, we need to inject the content of the <<AccountPageContent> here */}
    </Tabs>
  );
}
