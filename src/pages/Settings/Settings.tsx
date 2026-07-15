import AccountCard from "../../components/settings/AccountCard";
import SecurityCard from "../../components/settings/SecurityCard";
import AppearanceCard from "../../components/settings/AppearanceCard";
import DangerZone from "../../components/settings/DangerZone";

const Settings = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">⚙ Settings</h1>

      <AccountCard />

      <SecurityCard />

      <AppearanceCard />

      <DangerZone />
    </div>
  );
};

export default Settings;
