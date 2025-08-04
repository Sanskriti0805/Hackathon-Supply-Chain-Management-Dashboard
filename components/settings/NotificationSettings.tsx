import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Bell } from 'lucide-react';
import { DEFAULT_NOTIFICATIONS, NOTIFICATION_FREQUENCIES } from './constants';

interface NotificationSettingsProps {
  notifications: typeof DEFAULT_NOTIFICATIONS;
  setNotifications: (notifications: typeof DEFAULT_NOTIFICATIONS) => void;
}

export function NotificationSettings({ notifications, setNotifications }: NotificationSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Notification Preferences</span>
        </CardTitle>
        <CardDescription>
          Configure when and how you receive system alerts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Low Stock Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Notify when components fall below critical threshold
              </p>
            </div>
            <Switch 
              checked={notifications.lowStock}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, lowStock: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Old Stock Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Notify about components with no movement for 90+ days
              </p>
            </div>
            <Switch 
              checked={notifications.oldStock}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, oldStock: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>System Updates</Label>
              <p className="text-sm text-muted-foreground">
                Notify about system maintenance and updates
              </p>
            </div>
            <Switch 
              checked={notifications.systemUpdates}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, systemUpdates: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>User Activity</Label>
              <p className="text-sm text-muted-foreground">
                Notify about significant user actions and transactions
              </p>
            </div>
            <Switch 
              checked={notifications.userActivity}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, userActivity: checked })
              }
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Delivery Methods</h3>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Send notifications to registered email addresses
              </p>
            </div>
            <Switch 
              checked={notifications.emailNotifications}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, emailNotifications: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Send real-time push notifications to browsers
              </p>
            </div>
            <Switch 
              checked={notifications.pushNotifications}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, pushNotifications: checked })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="notification-email">Notification Email</Label>
            <Input 
              id="notification-email" 
              type="email" 
              placeholder="admin@company.com"
              defaultValue="admin@company.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notification-frequency">Frequency</Label>
            <Select defaultValue="immediate">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {NOTIFICATION_FREQUENCIES.map(freq => (
                  <SelectItem key={freq.value} value={freq.value}>
                    {freq.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}