import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  Package, 
  Search, 
  Filter,
  Plus,
  Edit,
  TrendingUp,
  TrendingDown,
  MapPin,
  DollarSign,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Eye
} from 'lucide-react';

interface ComponentManagementProps {
  currentUser: any;
}

export function ComponentManagement({ currentUser }: ComponentManagementProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Sample component data based on the case study
  const components = [
    {
      id: 1,
      name: 'ESP32-WROOM-32U',
      manufacturer: 'Espressif',
      partNumber: 'ESP32-WROOM-32U',
      description: 'Wi-Fi & Bluetooth Module',
      quantity: 2,
      location: 'IC-Box-F4',
      unitPrice: 200.00,
      category: 'Integrated Circuits (ICs)',
      criticalThreshold: 3,
      datasheetLink: 'https://example.com/esp32-datasheet.pdf',
      lastUpdated: '2024-08-03',
      status: 'critical'
    },
    {
      id: 2,
      name: 'Arduino Uno R3',
      manufacturer: 'Arduino',
      partNumber: 'A000066',
      description: 'Development Board',
      quantity: 1,
      location: 'DevBoard-Rack-I1',
      unitPrice: 800.00,
      category: 'Microcontrollers/Dev Boards',
      criticalThreshold: 1,
      datasheetLink: 'https://example.com/arduino-uno-datasheet.pdf',
      lastUpdated: '2024-08-02',
      status: 'critical'
    },
    {
      id: 3,
      name: 'NE555 Timer IC',
      manufacturer: 'Texas Instruments',
      partNumber: 'NE555P',
      description: 'Precision Timer IC',
      quantity: 75,
      location: 'IC-Box-F1',
      unitPrice: 8.00,
      category: 'Integrated Circuits (ICs)',
      criticalThreshold: 20,
      datasheetLink: 'https://example.com/ne555-datasheet.pdf',
      lastUpdated: '2024-08-03',
      status: 'good'
    },
    {
      id: 4,
      name: 'Resistor (1k Ohm, 1/4W)',
      manufacturer: 'Generic',
      partNumber: 'R1K_1/4W',
      description: 'Carbon Film, 5% Tolerance',
      quantity: 450,
      location: 'R-Shelf-A1',
      unitPrice: 0.50,
      category: 'Resistors',
      criticalThreshold: 100,
      datasheetLink: '',
      lastUpdated: '2024-08-01',
      status: 'good'
    },
    {
      id: 5,
      name: 'Ceramic Cap (0.1uF, 50V)',
      manufacturer: 'Generic',
      partNumber: 'C0.1UF_50V_CER',
      description: 'Ceramic Disc Capacitor',
      quantity: 650,
      location: 'C-Bin-B1',
      unitPrice: 0.80,
      category: 'Capacitors',
      criticalThreshold: 200,
      datasheetLink: '',
      lastUpdated: '2024-08-03',
      status: 'good'
    },
    {
      id: 6,
      name: 'BC547 NPN Transistor',
      manufacturer: 'NXP',
      partNumber: 'BC547B',
      description: 'NPN BJT, General Purpose',
      quantity: 175,
      location: 'T-Tray-E1',
      unitPrice: 1.20,
      category: 'Transistors',
      criticalThreshold: 50,
      datasheetLink: 'https://example.com/bc547-datasheet.pdf',
      lastUpdated: '2024-08-02',
      status: 'good'
    },
    {
      id: 7,
      name: 'DHT11 Temperature/Humidity',
      manufacturer: 'Aosong',
      partNumber: 'DHT11',
      description: 'Digital Temperature & Humidity Sensor',
      quantity: 12,
      location: 'Sensor-Bin-H1',
      unitPrice: 50.00,
      category: 'Sensors',
      criticalThreshold: 3,
      datasheetLink: 'https://example.com/dht11-datasheet.pdf',
      lastUpdated: '2024-07-28',
      status: 'good'
    },
    {
      id: 8,
      name: 'Tantalum Cap (10uF, 16V)',
      manufacturer: 'KEMET',
      partNumber: 'T491A106K016AT',
      description: 'SMD Tantalum Capacitor',
      quantity: 18,
      location: 'C-Bin-B3',
      unitPrice: 5.00,
      category: 'Capacitors',
      criticalThreshold: 20,
      datasheetLink: 'https://example.com/tantalum-cap-datasheet.pdf',
      lastUpdated: '2024-08-01',
      status: 'low'
    }
  ];

  const categories = [
    'all',
    'Resistors',
    'Capacitors',
    'Inductors',
    'Diodes',
    'Transistors',
    'Integrated Circuits (ICs)',
    'Connectors',
    'Sensors',
    'Microcontrollers/Dev Boards',
    'Switches/Buttons',
    'LEDs/Displays',
    'Cables/Wires',
    'Mechanical Parts/Hardware',
    'Miscellaneous Lab Supplies'
  ];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || component.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'destructive';
      case 'low': return 'secondary';
      case 'good': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="h-3 w-3" />;
      case 'low': return <AlertTriangle className="h-3 w-3" />;
      case 'good': return <CheckCircle className="h-3 w-3" />;
      default: return <CheckCircle className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Component Inventory</h2>
          <p className="text-muted-foreground">
            Manage and track electronic components
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Component
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Component</DialogTitle>
                <DialogDescription>
                  Enter component details to add to inventory
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Component Name</Label>
                  <Input id="name" placeholder="e.g., NE555 Timer IC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="manufacturer">Manufacturer</Label>
                  <Input id="manufacturer" placeholder="e.g., Texas Instruments" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partNumber">Part Number</Label>
                  <Input id="partNumber" placeholder="e.g., NE555P" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location/Bin</Label>
                  <Input id="location" placeholder="e.g., IC-Box-F1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unitPrice">Unit Price (INR)</Label>
                  <Input id="unitPrice" type="number" step="0.01" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="threshold">Critical Low Threshold</Label>
                  <Input id="threshold" type="number" placeholder="10" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Component description..." />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="datasheet">Datasheet Link (Optional)</Label>
                  <Input id="datasheet" type="url" placeholder="https://..." />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>
                  Add Component
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.slice(1).map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="IC-Box">IC Boxes</SelectItem>
                  <SelectItem value="R-Shelf">Resistor Shelves</SelectItem>
                  <SelectItem value="C-Bin">Capacitor Bins</SelectItem>
                  <SelectItem value="T-Tray">Transistor Trays</SelectItem>
                  <SelectItem value="Sensor-Bin">Sensor Bins</SelectItem>
                  <SelectItem value="DevBoard-Rack">Dev Board Racks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="quantity">Quantity</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="updated">Last Updated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredComponents.map((component) => (
          <Card key={component.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight">{component.name}</CardTitle>
                  <CardDescription className="text-sm mt-1">
                    {component.manufacturer} • {component.partNumber}
                  </CardDescription>
                </div>
                <Badge 
                  variant={getStatusColor(component.status)}
                  className="ml-2"
                >
                  {getStatusIcon(component.status)}
                  <span className="ml-1 capitalize">{component.status}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {component.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-muted-foreground">Quantity</div>
                  <div className="font-semibold">
                    {component.quantity} units
                    {component.quantity <= component.criticalThreshold && (
                      <span className="text-red-500 ml-1">⚠</span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Unit Price</div>
                  <div className="font-semibold">₹{component.unitPrice}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Location</div>
                  <div className="font-semibold flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {component.location}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Category</div>
                  <div className="font-semibold text-xs">{component.category.split(' ')[0]}</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Updated: {component.lastUpdated}
                </div>
                <div className="flex items-center space-x-1">
                  {component.datasheetLink && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Inward
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Outward
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No components found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or add new components to get started.
            </p>
            <Button className="mt-4" onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add First Component
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}