import { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RefreshCw, Save } from 'lucide-react';
import { NotificationSettings } from './settings/NotificationSettings';
import { ThresholdSettings } from './settings/ThresholdSettings';
import { BackupSettings } from './settings/BackupSettings';
import { SystemInfo } from './settings/SystemInfo';
import { 
  DEFAULT_NOTIFICATIONS, 
  DEFAULT_THRESHOLDS, 
  DEFAULT_BACKUP_SETTINGS 
} from './settings/constants';

export function Settings() {
  const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);
  const [thresholds, setThresholds] = useState(DEFAULT_THRESHOLDS);
  const [backupSettings, setBackupSettings] = useState(DEFAULT_BACKUP_SETTINGS);

  const handleReset = () => {
    setNotifications(DEFAULT_NOTIFICATIONS);
    setThresholds(DEFAULT_THRESHOLDS);
    setBackupSettings(DEFAULT_BACKUP_SETTINGS);
  };

  const handleSave = () => {
    // In a real application, this would save to backend
    console.log('Settings saved:', { notifications, thresholds, backupSettings });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">System Settings</h2>
          <p className="text-muted-foreground">
            Configure system preferences and notifications
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleReset}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="notifications" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="thresholds">Thresholds</TabsTrigger>
          <TabsTrigger value="backup">Backup & Data</TabsTrigger>
          <TabsTrigger value="system">System Info</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4">
          <NotificationSettings 
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </TabsContent>

        <TabsContent value="thresholds" className="space-y-4">
          <ThresholdSettings 
            thresholds={thresholds}
            setThresholds={setThresholds}
          />
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <BackupSettings 
            backupSettings={backupSettings}
            setBackupSettings={setBackupSettings}
          />
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <SystemInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}