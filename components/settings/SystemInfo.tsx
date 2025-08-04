import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Settings as SettingsIcon, Globe, CheckCircle, Clock } from 'lucide-react';
import { SYSTEM_INFO, SYSTEM_LOGS } from './constants';

export function SystemInfo() {
  const storagePercentage = (SYSTEM_INFO.storageUsed / SYSTEM_INFO.storageTotal) * 100;

  const getLogBadgeVariant = (type: string) => {
    switch (type) {
      case 'success': return 'default';
      case 'warning': return 'secondary';
      case 'error': return 'destructive';
      default: return 'outline';
    }
  };

  const getLogIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-3 w-3" />;
      case 'warning': return <Clock className="h-3 w-3" />;
      default: return <SettingsIcon className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="h-5 w-5" />
              <span>System Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Version</div>
                <div className="font-medium">{SYSTEM_INFO.version}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Build</div>
                <div className="font-medium">{SYSTEM_INFO.build}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Database</div>
                <div className="font-medium">{SYSTEM_INFO.database}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Last Update</div>
                <div className="font-medium">{SYSTEM_INFO.lastUpdate}</div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Storage Used</span>
                <span>{SYSTEM_INFO.storageUsed} GB / {SYSTEM_INFO.storageTotal} GB</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${storagePercentage}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Usage Statistics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Total Components</div>
                <div className="font-medium">{SYSTEM_INFO.totalComponents.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Active Users</div>
                <div className="font-medium">{SYSTEM_INFO.activeUsers}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Transactions (30d)</div>
                <div className="font-medium">{SYSTEM_INFO.transactions30d.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Categories</div>
                <div className="font-medium">{SYSTEM_INFO.categories}</div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>System Health: Excellent</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Uptime: {SYSTEM_INFO.uptime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Logs</CardTitle>
          <CardDescription>Recent system events and activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {SYSTEM_LOGS.map((log) => (
              <div key={log.id} className="flex items-center space-x-3 text-sm">
                <Badge variant={getLogBadgeVariant(log.type)}>
                  {getLogIcon(log.type)}
                  <span className="ml-1 capitalize">{log.type}</span>
                </Badge>
                <span className="flex-1">{log.message}</span>
                <span className="text-muted-foreground text-xs">{log.timestamp}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}