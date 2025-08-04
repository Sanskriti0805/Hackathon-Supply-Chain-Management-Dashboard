import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  TrendingUp, 
  TrendingDown,
  Plus,
  Search,
  Filter,
  Calendar,
  User,
  Package,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface TransactionsProps {
  currentUser: any;
}

export function Transactions({ currentUser }: TransactionsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [isInwardDialogOpen, setIsInwardDialogOpen] = useState(false);
  const [isOutwardDialogOpen, setIsOutwardDialogOpen] = useState(false);

  // Sample transaction data
  const transactions = [
    {
      id: 'TXN-2024-001',
      type: 'outward',
      component: 'NE555 Timer IC',
      partNumber: 'NE555P',
      quantity: 5,
      user: 'Dr. Priya Sharma',
      userRole: 'researcher',
      project: 'Oscillator Circuit Testing',
      reason: 'Circuit prototyping for new oscillator design',
      datetime: '2024-08-04 14:30:00',
      location: 'IC-Box-F1',
      status: 'completed'
    },
    {
      id: 'TXN-2024-002',
      type: 'inward',
      component: 'Ceramic Cap (0.1uF, 50V)',
      partNumber: 'C0.1UF_50V_CER',
      quantity: 200,
      user: 'Mike Rodriguez',
      userRole: 'technician',
      project: 'Stock Replenishment',
      reason: 'Regular stock replenishment from supplier order',
      datetime: '2024-08-04 10:15:00',
      location: 'C-Bin-B1',
      status: 'completed'
    },
    {
      id: 'TXN-2024-003',
      type: 'outward',
      component: 'BC547 NPN Transistor',
      partNumber: 'BC547B',
      quantity: 25,
      user: 'Alex Thompson',
      userRole: 'engineer',
      project: 'Amplifier Prototype',
      reason: 'Building amplifier circuits for audio system prototype',
      datetime: '2024-08-04 09:45:00',
      location: 'T-Tray-E1',
      status: 'completed'
    },
    {
      id: 'TXN-2024-004',
      type: 'inward',
      component: 'Arduino Uno R3',
      partNumber: 'A000066',
      quantity: 3,
      user: 'Dr. Sarah Chen',
      userRole: 'admin',
      project: 'Educational Kit Assembly',
      reason: 'Components for student lab kits preparation',
      datetime: '2024-08-03 16:20:00',
      location: 'DevBoard-Rack-I1',
      status: 'completed'
    },
    {
      id: 'TXN-2024-005',
      type: 'outward',
      component: 'Resistor (1k Ohm, 1/4W)',
      partNumber: 'R1K_1/4W',
      quantity: 50,
      user: 'Dr. Priya Sharma',
      userRole: 'researcher',
      project: 'Voltage Divider Circuits',
      reason: 'Building voltage divider networks for sensor calibration',
      datetime: '2024-08-03 13:10:00',
      location: 'R-Shelf-A1',
      status: 'completed'
    },
    {
      id: 'TXN-2024-006',
      type: 'inward',
      component: 'ESP32-WROOM-32U',
      partNumber: 'ESP32-WROOM-32U',
      quantity: 5,
      user: 'Mike Rodriguez',
      userRole: 'technician',
      project: 'IoT Module Restocking',
      reason: 'Emergency restock due to critical low levels',
      datetime: '2024-08-03 11:30:00',
      location: 'IC-Box-F4',
      status: 'completed'
    },
    {
      id: 'TXN-2024-007',
      type: 'outward',
      component: 'DHT11 Temperature/Humidity',
      partNumber: 'DHT11',
      quantity: 3,
      user: 'Alex Thompson',
      userRole: 'engineer',
      project: 'Environmental Monitoring',
      reason: 'Climate monitoring system for clean room',
      datetime: '2024-08-02 15:45:00',
      location: 'Sensor-Bin-H1',
      status: 'completed'
    },
    {
      id: 'TXN-2024-008',
      type: 'inward',
      component: 'Tantalum Cap (10uF, 16V)',
      partNumber: 'T491A106K016AT',
      quantity: 50,
      user: 'Dr. Sarah Chen',
      userRole: 'admin',
      project: 'Bulk Purchase Order',
      reason: 'Quarterly bulk purchase to meet upcoming project demands',
      datetime: '2024-08-02 09:00:00',
      location: 'C-Bin-B3',
      status: 'completed'
    }
  ];

  const components = [
    'NE555 Timer IC',
    'ESP32-WROOM-32U',
    'Arduino Uno R3',
    'BC547 NPN Transistor',
    'Resistor (1k Ohm, 1/4W)',
    'Ceramic Cap (0.1uF, 50V)',
    'DHT11 Temperature/Humidity',
    'Tantalum Cap (10uF, 16V)'
  ];

  const projects = [
    'Circuit Prototyping',
    'Stock Replenishment',
    'Student Lab Kits',
    'Research Project Alpha',
    'Manufacturing Prototype',
    'Quality Testing',
    'Educational Workshop',
    'Emergency Repair'
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || transaction.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    return type === 'inward' ? 
      <TrendingUp className="h-4 w-4 text-green-600" /> : 
      <TrendingDown className="h-4 w-4 text-blue-600" />;
  };

  const getTypeColor = (type: string) => {
    return type === 'inward' ? 'default' : 'secondary';
  };

  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Inventory Transactions</h2>
          <p className="text-muted-foreground">
            Track all inward and outward component movements
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog open={isInwardDialogOpen} onOpenChange={setIsInwardDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                Add Inward
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Record Inward Transaction</DialogTitle>
                <DialogDescription>
                  Add components to inventory
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inward-component">Component</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select component" />
                    </SelectTrigger>
                    <SelectContent>
                      {components.map(component => (
                        <SelectItem key={component} value={component}>{component}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inward-quantity">Quantity</Label>
                  <Input id="inward-quantity" type="number" placeholder="Enter quantity" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inward-project">Project/Reason</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map(project => (
                        <SelectItem key={project} value={project}>{project}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inward-reason">Additional Notes</Label>
                  <Textarea 
                    id="inward-reason" 
                    placeholder="Describe the reason for this transaction..."
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsInwardDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsInwardDialogOpen(false)}>
                  Record Inward
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isOutwardDialogOpen} onOpenChange={setIsOutwardDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <TrendingDown className="h-4 w-4 mr-2" />
                Add Outward
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Record Outward Transaction</DialogTitle>
                <DialogDescription>
                  Remove components from inventory
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="outward-component">Component</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select component" />
                    </SelectTrigger>
                    <SelectContent>
                      {components.map(component => (
                        <SelectItem key={component} value={component}>{component}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="outward-quantity">Quantity</Label>
                  <Input id="outward-quantity" type="number" placeholder="Enter quantity" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="outward-project">Project/Reason</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map(project => (
                        <SelectItem key={project} value={project}>{project}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="outward-reason">Additional Notes</Label>
                  <Textarea 
                    id="outward-reason" 
                    placeholder="Describe the reason for this transaction..."
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsOutwardDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsOutwardDialogOpen(false)}>
                  Record Outward
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search Transactions</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by component, user, or project..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Transaction Type</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="inward">Inward Only</SelectItem>
                  <SelectItem value="outward">Outward Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Time Period</Label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
              Total Inward
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,258</div>
            <div className="text-sm text-muted-foreground">Components added</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center">
              <TrendingDown className="h-4 w-4 mr-2 text-blue-600" />
              Total Outward
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">943</div>
            <div className="text-sm text-muted-foreground">Components used</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center">
              <Package className="h-4 w-4 mr-2" />
              Net Change
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+315</div>
            <div className="text-sm text-muted-foreground">This period</div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Latest inventory movements and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => {
              const { date, time } = formatDateTime(transaction.datetime);
              return (
                <div key={transaction.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'inward' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {getTypeIcon(transaction.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant={getTypeColor(transaction.type)} className="text-xs">
                        {transaction.type.toUpperCase()}
                      </Badge>
                      <span className="text-sm text-muted-foreground">#{transaction.id}</span>
                    </div>
                    
                    <h4 className="font-semibold text-sm mb-1">{transaction.component}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {transaction.partNumber} • {transaction.quantity} units
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {transaction.user} ({transaction.userRole})
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-3 w-3 mr-1" />
                        {transaction.project}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {date} at {time}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {transaction.status}
                      </div>
                    </div>
                    
                    {transaction.reason && (
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        "{transaction.reason}"
                      </p>
                    )}
                  </div>
                  
                  <div className="flex-shrink-0 text-right">
                    <div className="text-sm font-medium">
                      {transaction.type === 'inward' ? '+' : '-'}{transaction.quantity}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {transaction.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No transactions found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or record a new transaction.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}