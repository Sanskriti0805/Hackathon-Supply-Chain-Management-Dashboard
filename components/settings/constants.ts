export const SYSTEM_INFO = {
  version: 'LIMS v2.1.0',
  build: '#2024.08.001',
  database: 'PostgreSQL 15.3',
  lastUpdate: '2024-08-01',
  storageUsed: 2.4,
  storageTotal: 10,
  totalComponents: 4257,
  activeUsers: 6,
  transactions30d: 2847,
  categories: 14,
  uptime: '99.9%'
};

export const DEFAULT_NOTIFICATIONS = {
  lowStock: true,
  oldStock: true,
  systemUpdates: false,
  userActivity: true,
  emailNotifications: true,
  pushNotifications: false
};

export const DEFAULT_THRESHOLDS = {
  oldStockDays: 90,
  lowStockMultiplier: 1.2,
  criticalStockMultiplier: 0.5
};

export const DEFAULT_BACKUP_SETTINGS = {
  autoBackup: true,
  backupFrequency: 'daily',
  retentionPeriod: 30,
  lastBackup: '2024-08-04 02:00:00'
};

export const CATEGORY_THRESHOLDS = {
  'Resistors': 100,
  'Capacitors': 50,
  'Integrated Circuits': 10,
  'Sensors': 5
};

export const SYSTEM_LOGS = [
  {
    id: 1,
    type: 'success',
    message: 'Daily backup completed successfully',
    timestamp: '2024-08-04 02:00:00'
  },
  {
    id: 2,
    type: 'info',
    message: 'User Mike Rodriguez logged in',
    timestamp: '2024-08-04 13:45:00'
  },
  {
    id: 3,
    type: 'warning',
    message: 'Low stock alert triggered for ESP32-WROOM-32U',
    timestamp: '2024-08-04 14:25:00'
  },
  {
    id: 4,
    type: 'success',
    message: 'System health check completed',
    timestamp: '2024-08-04 12:00:00'
  }
];

export const NOTIFICATION_FREQUENCIES = [
  { value: 'immediate', label: 'Immediate' },
  { value: 'hourly', label: 'Hourly Digest' },
  { value: 'daily', label: 'Daily Summary' },
  { value: 'weekly', label: 'Weekly Report' }
];

export const BACKUP_FREQUENCIES = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' }
];