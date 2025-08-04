import { useState } from 'react';
// Removed unused Card imports
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Avatar } from './components/ui/avatar';
import { 
  Package, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  TrendingUp,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';
import { ComponentManagement } from './components/ComponentManagement';
import { Transactions } from './components/Transactions';
import { Notifications } from './components/Notifications';
import { UserManagement } from './components/UserManagement';
import { Settings as SettingsComponent } from './components/Settings';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  type User = {
    name: string;
    role: string;
    // add other properties if needed
  };

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, type: 'low_stock', message: 'ESP32-WROOM-32U below critical threshold (2 remaining)', time: '5 min ago' },
    { id: 2, type: 'old_stock', message: 'Raspberry Pi Zero W - No movement for 95 days', time: '1 hour ago' },
    { id: 3, type: 'low_stock', message: 'Arduino Uno R3 critically low (1 remaining)', time: '2 hours ago' },
  ]);

  const handleLogin = (user: any) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const isAdmin = currentUser?.role === 'admin';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center space-x-3">
              <Package className="h-7 w-7 text-primary" />
              <div>
                <h1 className="text-lg font-semibold">ElecLab LIMS</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Electronics Laboratory Inventory</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="sm" onClick={() => setActiveTab('notifications')}>
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500">
                    {notifications.length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Avatar
                  className="h-8 w-8"
                  src={undefined}
                  alt={currentUser?.name}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold bg-gray-200 rounded-full">
                  {currentUser?.name?.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{currentUser?.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{currentUser?.role}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-card border-r transition-transform duration-200 ease-in-out`}>
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('dashboard');
                setSidebarOpen(false);
              }}
            >
              <BarChart3 className="h-4 w-4 mr-3" />
              Dashboard
            </Button>

            <Button
              variant={activeTab === 'components' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('components');
                setSidebarOpen(false);
              }}
            >
              <Package className="h-4 w-4 mr-3" />
              Components
            </Button>

            <Button
              variant={activeTab === 'transactions' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('transactions');
                setSidebarOpen(false);
              }}
            >
              <TrendingUp className="h-4 w-4 mr-3" />
              Transactions
            </Button>

            <Button
              variant={activeTab === 'notifications' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab('notifications');
                setSidebarOpen(false);
              }}
            >
              <Bell className="h-4 w-4 mr-3" />
              Notifications
              {notifications.length > 0 && (
                <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs bg-red-500">
                  {notifications.length}
                </Badge>
              )}
            </Button>

            {isAdmin && (
              <>
                <div className="border-t pt-2 mt-4">
                  <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Admin Tools
                  </p>
                </div>

                <Button
                  variant={activeTab === 'users' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveTab('users');
                    setSidebarOpen(false);
                  }}
                >
                  <Users className="h-4 w-4 mr-3" />
                  User Management
                </Button>

                <Button
                  variant={activeTab === 'settings' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveTab('settings');
                    setSidebarOpen(false);
                  }}
                >
                  <Settings className="h-4 w-4 mr-3" />
                  Settings
                </Button>
              </>
            )}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 max-w-full overflow-hidden">
          {activeTab === 'dashboard' && <Dashboard currentUser={currentUser} />}
          {activeTab === 'components' && <ComponentManagement currentUser={currentUser} />}
          {activeTab === 'transactions' && <Transactions currentUser={currentUser} />}
          {activeTab === 'notifications' && <Notifications notifications={notifications} />}
          {activeTab === 'users' && isAdmin && <UserManagement />}
          {activeTab === 'settings' && isAdmin && <SettingsComponent />}
        </main>
      </div>
    </div>
  );
}