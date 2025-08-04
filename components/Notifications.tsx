import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Bell, 
  AlertTriangle, 
  Clock,
  CheckCircle,
  X,
  Settings,
  Package,
  TrendingDown,
  Calendar,
  User,
  Archive
} from 'lucide-react';

interface NotificationsProps {
  notifications: any[];
}

export function Notifications({ notifications }: NotificationsProps) {
  const [activeTab, setActiveTab] = useState('all');

  // Extended notifications data
  const allNotifications = [
    {
      id: 1,
      type: 'low_stock',
      title: 'ESP32-WROOM-32U Critical Stock Level',
      message: 'Only 2 units remaining. Below critical threshold of 3 units.',
      component: 'ESP32-WROOM-32U',
      location: 'IC-Box-F4',
      severity: 'critical',
      timestamp: '2024-08-04 14:25:00',
      isRead: false,
      actionRequired: true,
      details: 'This component is frequently used in IoT projects. Consider immediate reordering.'
    },
    {
      id: 2,
      type: 'old_stock',
      title: 'Raspberry Pi Zero W - No Movement Detected',
      message: 'No outward movement for 95 days. Consider usage or relocation.',
      component: 'Raspberry Pi Zero W',
      location: 'DevBoard-Rack-I2',
      severity: 'warning',
      timestamp: '2024-08-04 13:15:00',
      isRead: false,
      actionRequired: false,
      details: 'This item has been sitting idle. May be suitable for educational kits or promotional activities.'
    },
    {
      id: 3,
      type: 'low_stock',
      title: 'Arduino Uno R3 Critical Stock Level',
      message: 'Only 1 unit remaining. At critical threshold.',
      component: 'Arduino Uno R3',
      location: 'DevBoard-Rack-I1',
      severity: 'critical',
      timestamp: '2024-08-04 12:10:00',
      isRead: false,
      actionRequired: true,
      details: 'High demand item for educational and prototyping purposes.'
    },
    {
      id: 4,
      type: 'system',
      title: 'Daily Inventory Backup Completed',
      message: 'System backup completed successfully at 02:00 AM.',
      component: null,
      location: null,
      severity: 'info',
      timestamp: '2024-08-04 02:00:00',
      isRead: true,
      actionRequired: false,
      details: 'All inventory data has been backed up to secure cloud storage.'
    },
    {
      id: 5,
      type: 'user_activity',
      title: 'Bulk Transaction Recorded',
      message: 'Dr. Sarah Chen added 200 Ceramic Capacitors to inventory.',
      component: 'Ceramic Cap (0.1uF, 50V)',
      location: 'C-Bin-B1',
      severity: 'info',
      timestamp: '2024-08-04 10:15:00',
      isRead: true,
      actionRequired: false,
      details: 'Large quantity addition may indicate bulk purchase or supplier delivery.'
    },
    {
      id: 6,
      type: 'low_stock',
      title: 'Tantalum Capacitor Below Threshold',
      message: '18 units remaining. Below threshold of 20 units.',
      component: 'Tantalum Cap (10uF, 16V)',
      location: 'C-Bin-B3',
      severity: 'warning',
      timestamp: '2024-08-03 16:45:00',
      isRead: true,
      actionRequired: true,
      details: 'Specialized component with longer lead times. Consider early reordering.'
    },
    {
      id: 7,
      type: 'old_stock',
      title: 'Hook-up Wire Long Term Storage',
      message: 'No movement for 127 days. Consider project allocation.',
      component: 'Hook-up Wire (22AWG, Red)',
      location: 'Cable-Bag-L2',
      severity: 'warning',
      timestamp: '2024-08-03 14:30:00',
      isRead: true,
      actionRequired: false,
      details: 'Basic consumable item. May be allocated to upcoming workshops or lab sessions.'
    },
    {
      id: 8,
      type: 'system',
      title: 'Weekly Report Generated',
      message: 'Inventory utilization report for week ending Aug 3rd is ready.',
      component: null,
      location: null,
      severity: 'info',
      timestamp: '2024-08-03 09:00:00',
      isRead: true,
      actionRequired: false,
      details: 'Report includes stock movements, low stock alerts, and usage analytics.'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'low_stock':
        return <AlertTriangle className="h-4 w-4" />;
      case 'old_stock':
        return <Clock className="h-4 w-4" />;
      case 'system':
        return <Settings className="h-4 w-4" />;
      case 'user_activity':
        return <User className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getNotificationColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'destructive';
      case 'warning':
        return 'secondary';
      case 'info':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-100 border-red-200';
      case 'warning':
        return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'info':
        return 'text-blue-600 bg-blue-100 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 3600);
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `${diffInMinutes} min ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)} hour${Math.floor(diffInHours) !== 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  };

  const filteredNotifications = allNotifications.filter(notification => {
    switch (activeTab) {
      case 'unread':
        return !notification.isRead;
      case 'critical':
        return notification.severity === 'critical';
      case 'low_stock':
        return notification.type === 'low_stock';
      case 'old_stock':
        return notification.type === 'old_stock';
      default:
        return true;
    }
  });

  const unreadCount = allNotifications.filter(n => !n.isRead).length;
  const criticalCount = allNotifications.filter(n => n.severity === 'critical').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Notifications</h2>
          <p className="text-muted-foreground">
            System alerts and inventory notifications
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Notification Settings
          </Button>
          <Button variant="outline">
            <Archive className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allNotifications.length}</div>
            <div className="text-sm text-muted-foreground">All time</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Unread</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{unreadCount}</div>
            <div className="text-sm text-muted-foreground">Need attention</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Critical</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{criticalCount}</div>
            <div className="text-sm text-muted-foreground">Urgent action</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Resolved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>
      </div>

      {/* Notification Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">
            All ({allNotifications.length})
          </TabsTrigger>
          <TabsTrigger value="unread" className="relative">
            Unread
            {unreadCount > 0 && (
              <Badge className="ml-1 h-4 w-4 rounded-full p-0 text-xs">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="critical">
            Critical ({criticalCount})
          </TabsTrigger>
          <TabsTrigger value="low_stock">
            Low Stock
          </TabsTrigger>
          <TabsTrigger value="old_stock">
            Old Stock
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredNotifications.map((notification) => (
            <Card key={notification.id} className={`${notification.isRead ? 'opacity-75' : ''} ${getSeverityColor(notification.severity)}`}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getSeverityColor(notification.severity)}`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant={getNotificationColor(notification.severity)} className="text-xs">
                        {notification.type.replace('_', ' ').toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs capitalize">
                        {notification.severity}
                      </Badge>
                      {!notification.isRead && (
                        <Badge className="text-xs bg-blue-100 text-blue-700">NEW</Badge>
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-sm mb-1">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                    
                    {notification.component && (
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Package className="h-3 w-3 mr-1" />
                          {notification.component}
                        </div>
                        {notification.location && (
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {notification.location}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <p className="text-xs text-muted-foreground italic mb-3">
                      {notification.details}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{formatTimestamp(notification.timestamp)}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {notification.actionRequired && (
                          <Button size="sm" variant="outline">
                            Take Action
                          </Button>
                        )}
                        {!notification.isRead && (
                          <Button size="sm" variant="ghost">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Mark Read
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredNotifications.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notifications found</h3>
                <p className="text-muted-foreground">
                  {activeTab === 'unread' 
                    ? "You're all caught up! No unread notifications."
                    : `No ${activeTab.replace('_', ' ')} notifications at this time.`
                  }
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}