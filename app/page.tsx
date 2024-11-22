import {
  AccountPage,
  AccountPageContent,
} from "@/components/untouchable-lib/account-page";
import { AccountPageLabel } from "@/components/untouchable-lib/account-page";
import { AccountTabs } from "@/components/untouchable-lib/acocunt-tabs";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Our goal is to add custom tabs to the following tab view</p>

      {/* First, our library provided component */}
      <AccountTabs>
        {/* Then, we inject tabs with our own content */}
        <AccountPage>
          <AccountPageLabel>My Page</AccountPageLabel>
          <AccountPageContent>
            <p>My own info information</p>
          </AccountPageContent>
        </AccountPage>
      </AccountTabs>
    </div>
  );
}
