import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Database, Download, Upload, CheckCircle } from 'lucide-react';
import { DEFAULT_BACKUP_SETTINGS, BACKUP_FREQUENCIES } from './constants';

interface BackupSettingsProps {
  backupSettings: typeof DEFAULT_BACKUP_SETTINGS;
  setBackupSettings: (settings: typeof DEFAULT_BACKUP_SETTINGS) => void;
}

export function BackupSettings({ backupSettings, setBackupSettings }: BackupSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Database className="h-5 w-5" />
          <span>Backup & Data Management</span>
        </CardTitle>
        <CardDescription>
          Configure automatic backups and data retention policies
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Automatic Backup</Label>
            <p className="text-sm text-muted-foreground">
              Enable automatic database backups
            </p>
          </div>
          <Switch 
            checked={backupSettings.autoBackup}
            onCheckedChange={(checked) => 
              setBackupSettings({ ...backupSettings, autoBackup: checked })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Backup Frequency</Label>
            <Select 
              value={backupSettings.backupFrequency}
              onValueChange={(value) => 
                setBackupSettings({ ...backupSettings, backupFrequency: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BACKUP_FREQUENCIES.map(freq => (
                  <SelectItem key={freq.value} value={freq.value}>
                    {freq.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Retention Period (Days)</Label>
            <Input 
              type="number" 
              value={backupSettings.retentionPeriod}
              onChange={(e) => 
                setBackupSettings({ ...backupSettings, retentionPeriod: parseInt(e.target.value) })
              }
            />
          </div>
        </div>

        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="font-medium">Last Backup</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {backupSettings.lastBackup} - Success
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Manual Actions</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" className="w-full">
              <Upload className="h-4 w-4 mr-2" />
              Import Data
            </Button>
            <Button variant="outline" className="w-full">
              <Database className="h-4 w-4 mr-2" />
              Backup Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}