"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  UsersIcon,
  TicketIcon,
  CalendarCheckIcon,
  ChartBarIcon,
  DownloadSimpleIcon,
  ArrowClockwiseIcon,
  SignOutIcon,
  CheckCircleIcon,
  ClockIcon,
  SpinnerGapIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  TrendUpIcon,
  TrendDownIcon,
  WalletIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  checkAdminAccess,
  logoutAdmin,
  getRegistrationStats,
  getAllRegistrations,
  getRegistrationsForExport,
} from "@/lib/actions/admin";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import * as XLSX from "xlsx";

// Types
interface Stats {
  total: number;
  freeCount: number;
  paidCount: number;
  todayCount: number;
  confirmedCount: number;
  pendingCount: number;
  categoryStats: { name: string; value: number }[];
  dailyStats: { date: string; count: number }[];
  ticketStats: { name: string; value: number }[];
}

interface Registration {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  organization: string | null;
  role: string | null;
  category: string;
  ticketType: string;
  confirmationSent: boolean | null;
  createdAt: Date | null;
}

// VIBRANT COLOR PALETTE
const COLORS_CATEGORY = [
  "#F43F5E", // Rose
  "#8B5CF6", // Violet
  "#0EA5E9", // Sky
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EC4899", // Pink
  "#6366F1", // Indigo
];

const CATEGORY_LABELS: Record<string, string> = {
  student: "Students",
  professional: "Professionals",
  entrepreneur: "Entrepreneurs",
  contestant: "Contestants",
  ngo: "NGO Representatives",
  government: "Government Officials",
  media: "Media/Journalists",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<Stats | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [ticketFilter, setTicketFilter] = useState("all");
  const [isPending, startTransition] = useTransition();
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Check access on mount
  useEffect(() => {
    checkAccess();
  }, []);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 80000);

    return () => clearInterval(interval);
  }, []);

  // Filter registrations
  useEffect(() => {
    let filtered = [...registrations];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.firstName.toLowerCase().includes(query) ||
          r.lastName.toLowerCase().includes(query) ||
          r.email.toLowerCase().includes(query) ||
          r.organization?.toLowerCase().includes(query)
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter((r) => r.category === categoryFilter);
    }

    if (ticketFilter !== "all") {
      filtered = filtered.filter((r) => r.ticketType === ticketFilter);
    }

    setFilteredRegistrations(filtered);
  }, [registrations, searchQuery, categoryFilter, ticketFilter]);

  async function checkAccess() {
    const hasAccess = await checkAdminAccess();
    if (!hasAccess) {
      router.push("/admin");
      return;
    }
    await loadData();
  }

  async function loadData() {
    setIsLoading(true);
    try {
      const [statsData, registrationsData] = await Promise.all([
        getRegistrationStats(),
        getAllRegistrations(),
      ]);
      setStats(statsData);
      setRegistrations(registrationsData);
      setLastUpdated(new Date());
    } catch (error) {
      toast.error("Failed to load data");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function refreshData() {
    startTransition(async () => {
      await loadData();
      toast.success("Data refreshed");
    });
  }

  async function handleLogout() {
    await logoutAdmin();
    router.push("/admin");
  }

  async function exportToExcel() {
    try {
      const data = await getRegistrationsForExport();
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

      // Auto-width columns
      const maxWidth = 30;
      const colWidths = Object.keys(data[0] || {}).map((key) => ({
        wch: Math.min(
          maxWidth,
          Math.max(key.length, ...data.map((row) => String(row[key as keyof typeof row] || "").length))
        ),
      }));
      worksheet["!cols"] = colWidths;

      XLSX.writeFile(workbook, `AYBCIF_Registrations_${new Date().toISOString().split("T")[0]}.xlsx`);
      toast.success("Excel file downloaded");
    } catch (error) {
      toast.error("Failed to export data");
      console.error(error);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <SpinnerGapIcon className="w-12 h-12 text-blue-500 animate-spin mb-4" />
        <p className="text-zinc-400 font-medium">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <ChartBarIcon className="w-5 h-5 text-white" weight="bold" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Admin Dashboard</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
                AYBCIF 2026 Admin
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="hidden md:flex items-center text-xs text-zinc-500 mr-4 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-white/5">
                <ClockIcon className="w-3.5 h-3.5 mr-1.5" />
                Updated: {lastUpdated?.toLocaleTimeString()}
             </div>
             
             <Button 
                onClick={refreshData} 
                className="h-9 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all shadow-sm"
             >
                <ArrowClockwiseIcon className={`w-4 h-4 mr-2 ${isPending ? "animate-spin" : ""}`} />
                Refresh
             </Button>

             <Button 
                onClick={exportToExcel}
                className="h-9 bg-emerald-600/10 border border-emerald-500/20 hover:bg-emerald-600/20 text-emerald-400 hover:text-emerald-300 transition-all shadow-sm"
             >
                <DownloadSimpleIcon className="w-4 h-4 mr-2" />
                Export
             </Button>

             <Button 
                onClick={handleLogout}
                variant="ghost"
                className="h-9 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
             >
                <SignOutIcon className="w-4 h-4" />
             </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-6 py-8 space-y-8">
        
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard 
            title="Total Registrations" 
            value={stats?.total || 0} 
            icon={<UsersIcon className="w-5 h-5 text-white" />}
            trend="+12%" // Mock trend or calculate if possible
            trendUp={true}
            gradient="from-blue-600 to-cyan-500"
            subtext="Lifetime total"
          />
          <KpiCard 
            title="Revenue Potential" 
            value={`KES ${(stats?.paidCount || 0) * 1000}`} 
            icon={<WalletIcon className="w-5 h-5 text-white" />}
            trend="Active"
            trendUp={true}
            gradient="from-emerald-500 to-teal-400"
            subtext={`${stats?.paidCount} Paid Tickets`}
          />
          <KpiCard 
            title="Today's Signups" 
            value={stats?.todayCount || 0}
            icon={<CalendarCheckIcon className="w-5 h-5 text-white" />}
            trend={stats?.todayCount === 0 ? "Quiet day" : "Moving fast"}
            trendUp={!!(stats?.todayCount && stats.todayCount > 0)}
            gradient="from-violet-600 to-purple-500"
            subtext="Since midnight"
          />
          <KpiCard 
            title="Pending Confirmations" 
            value={stats?.pendingCount || 0} 
            icon={<ClockIcon className="w-5 h-5 text-white" />}
            trend="Action needed"
            trendUp={false}
            gradient="from-amber-500 to-orange-400"
            subtext={`${stats?.confirmedCount} Confirmed`}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
          {/* Main Area Chart */}
          <div className="lg:col-span-2 bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-xl flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div>
                   <h3 className="text-zinc-100 font-semibold text-lg">Registration Trends</h3>
                   <p className="text-zinc-500 text-sm">Last 30 Days Activity</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center text-xs text-zinc-400 gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> Signups
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stats?.dailyStats || []}>
                        <defs>
                            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis 
                            dataKey="date" 
                            stroke="#52525b" 
                            fontSize={12} 
                            tickMargin={10}
                            tickFormatter={(val) => {
                                const d = new Date(val);
                                return `${d.getDate()}/${d.getMonth()+1}`;
                            }}
                        />
                        <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#f4f4f5' }}
                            itemStyle={{ color: '#60a5fa' }}
                            labelStyle={{ color: '#a1a1aa' }}
                            formatter={(value: number) => [value, "Registrations"]}
                            labelFormatter={(label) => new Date(label).toDateString()}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="count" 
                            stroke="#3B82F6" 
                            strokeWidth={3} 
                            fillOpacity={1} 
                            fill="url(#colorCount)" 
                            animationDuration={1500}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-xl flex flex-col">
             <h3 className="text-zinc-100 font-semibold text-lg mb-1">Demographics</h3>
             <p className="text-zinc-500 text-sm mb-6">Participant Categories</p>
             <div className="flex-1 w-full min-h-0 relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={stats?.categoryStats || []}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {stats?.categoryStats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS_CATEGORY[index % COLORS_CATEGORY.length]} />
                            ))}
                        </Pie>
                        <Tooltip 
                             contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                             itemStyle={{ color: '#e4e4e7' }}
                        />
                    </PieChart>
                 </ResponsiveContainer>
                 {/* Center Text */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <span className="block text-2xl font-bold text-white">{stats?.total}</span>
                        <span className="text-xs text-zinc-500 uppercase">Total</span>
                    </div>
                 </div>
             </div>
             {/* Legend */}
             <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                {stats?.categoryStats.slice(0, 6).map((cat, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS_CATEGORY[i % COLORS_CATEGORY.length] }} />
                        <span className="text-zinc-400 truncate">{CATEGORY_LABELS[cat.name] || cat.name}</span>
                    </div>
                ))}
             </div>
          </div>
        </div>

         {/* Charts Row 2 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[300px]">
            {/* Ticket Breakdown */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                 <h3 className="text-zinc-100 font-semibold text-lg mb-6">Ticket Types</h3>
                 <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={stats?.ticketStats || []} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
                            <XAxis type="number" stroke="#52525b" fontSize={12} hide />
                            <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={14} width={80} tickLine={false} axisLine={false} />
                            <Tooltip cursor={{ fill: '#ffffff05' }} contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a' }} />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                                {stats?.ticketStats.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.name === 'Paid' ? '#10B981' : '#6366F1'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                 </div>
            </div>

            {/* Category Progress Bars (Detail) */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-xl overflow-y-auto custom-scrollbar">
                <h3 className="text-zinc-100 font-semibold text-lg mb-6">Category Detail</h3>
                <div className="space-y-4">
                    {stats?.categoryStats.map((cat, index) => {
                        const percent = stats.total > 0 ? (cat.value / stats.total) * 100 : 0;
                        return (
                            <div key={cat.name} className="space-y-1.5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-300 font-medium">{CATEGORY_LABELS[cat.name] || cat.name}</span>
                                    <span className="text-zinc-400">{cat.value} <span className="text-zinc-600">({percent.toFixed(1)}%)</span></span>
                                </div>
                                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{ 
                                            width: `${percent}%`, 
                                            backgroundColor: COLORS_CATEGORY[index % COLORS_CATEGORY.length] 
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
         </div>

        {/* Data Table Section */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm">
             <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center">
                 <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <UsersIcon className="w-6 h-6 text-blue-500" />
                    Registrations 
                    <span className="text-sm font-normal text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full ml-2">
                        {filteredRegistrations.length}
                    </span>
                 </h2>

                 <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative group flex-1 sm:flex-none">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-200 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 w-full sm:w-64 transition-all"
                        />
                    </div>
                    {/* Filters could go here nicely */}
                    <div className="flex gap-2">
                        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                            <SelectTrigger className="w-[140px] bg-black/20 border-white/10 text-zinc-300">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
                                <SelectItem value="all">All</SelectItem>
                                {Object.keys(CATEGORY_LABELS).map(k => (
                                    <SelectItem key={k} value={k}>{CATEGORY_LABELS[k]}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        
                        <Select value={ticketFilter} onValueChange={setTicketFilter}>
                            <SelectTrigger className="w-[100px] bg-black/20 border-white/10 text-zinc-300">
                                <SelectValue placeholder="Ticket" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="free">Free</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                 </div>
             </div>

             <div className="overflow-x-auto max-h-[600px] overflow-y-auto custom-scrollbar">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-500 font-semibold tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Participant</th>
                            <th className="px-6 py-4">Contact</th>
                            <th className="px-6 py-4">Role & Org</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm text-zinc-300">
                        {filteredRegistrations.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 italic">
                                    No registrations found matching your filters.
                                </td>
                            </tr>
                        ) : filteredRegistrations.map((reg) => (
                            <tr key={reg.id} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-white">{reg.firstName} {reg.lastName}</div>
                                    <div className="text-xs text-zinc-500 capitalize">{reg.category}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        {reg.email}
                                    </div>
                                    <div className="text-xs text-zinc-600 font-mono mt-0.5">{reg.phone || "-"}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-zinc-300 truncate max-w-[200px]">{reg.organization || "N/A"}</div>
                                    <div className="text-xs text-zinc-500 capitalize">{reg.role || "Attendee"}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1 items-start">
                                        <TicketBadge type={reg.ticketType} />
                                        {reg.confirmationSent && (
                                            <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                                                <CheckCircleIcon weight="fill" /> Confirmed
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right text-zinc-500 font-mono text-xs">
                                    {reg.createdAt ? new Date(reg.createdAt).toLocaleDateString() : "-"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
             </div>
        </div>

      </main>
    </div>
  );
}

// Components
function KpiCard({ title, value, icon, trend, trendUp, gradient, subtext }: any) {
    return (
        <div className="relative overflow-hidden bg-zinc-900/50 border border-white/5 rounded-2xl p-5 backdrop-blur-sm shadow-lg group hover:border-white/10 transition-colors">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 blur-2xl rounded-full -mr-10 -mt-10`} />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg shadow-black/20`}>
                    {icon}
                </div>
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold ${trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                    {trendUp ? <TrendUpIcon className="w-3.5 h-3.5" /> : <TrendDownIcon className="w-3.5 h-3.5" />}
                    {trend}
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-zinc-400 text-sm font-medium mb-1">{title}</h3>
                <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
                {subtext && <p className="text-xs text-zinc-500 mt-2">{subtext}</p>}
            </div>
        </div>
    )
}

function TicketBadge({ type }: { type: string }) {
    if (type === 'paid') {
        return (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Paid Ticket
            </span>
        )
    }
    return (
        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Free Ticket
        </span>
    )
}
