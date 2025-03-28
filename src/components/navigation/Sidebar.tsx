import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Building,
  Truck,
  Package,
  DollarSign,
  FileText,
  Settings,
  BarChart3,
  TrendingUp
} from 'lucide-react';

export function Sidebar() {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Cases', icon: Users, path: '/admin/cases' },
    { name: 'Services', icon: Calendar, path: '/admin/services' },
    { name: 'Facilities', icon: Building, path: '/admin/facilities' },
    { name: 'Transportation', icon: Truck, path: '/admin/transportation' },
    { name: 'Inventory', icon: Package, path: '/admin/inventory' },
    { name: 'Financials', icon: DollarSign, path: '/admin/financials' },
    { name: 'Documents', icon: FileText, path: '/admin/documents' },
    { name: 'Reports', icon: FileText, path: '/admin/reports' },
    { name: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl min-h-screen" aria-label="Sidebar Navigation">
      <nav className="mt-5 px-2" aria-label="Sidebar Menu">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
              aria-label={item.name}
            >
              <item.icon
                className="mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}