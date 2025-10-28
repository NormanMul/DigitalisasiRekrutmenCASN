import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TrendingUp,
  Users,
  Clock,
  FileCheck2,
} from "lucide-react"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { AutomationChart } from "@/components/dashboard/automation-chart"
import { RecruitmentCycleChart } from "@/components/dashboard/recruitment-cycle-chart"
import { VerificationProductivityChart } from "@/components/dashboard/verification-productivity-chart"
import { RecentApplicantsTable } from "@/components/dashboard/recent-applicants-table"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <KpiCard
          title="Total Pelamar"
          value="45,231"
          change="+20.1% dari bulan lalu"
          icon={Users}
        />
        <KpiCard
          title="Verifikasi Selesai"
          value="32,876"
          change="+18.3% dari bulan lalu"
          icon={FileCheck2}
        />
        <KpiCard
          title="Waktu Proses Rata-rata"
          value="2.5 hari"
          change="-5.2% dari bulan lalu"
          icon={Clock}
        />
        <KpiCard
          title="Tingkat Otomasi"
          value="85%"
          change="+12% dari target"
          icon={TrendingUp}
        />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Waktu Siklus Rekrutmen</CardTitle>
            <CardDescription>
              Durasi rata-rata (hari) per tahap seleksi dalam 6 bulan terakhir.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecruitmentCycleChart />
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-lg">Tingkat Otomasi</CardTitle>
              <CardDescription>Persentase verifikasi dokumen otomatis.</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <AutomationChart />
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="pb-2">
              <CardTitle className="font-headline text-lg">Produktivitas Verifikasi</CardTitle>
               <CardDescription>Jumlah berkas diverifikasi per hari.</CardDescription>
            </CardHeader>
            <CardContent>
                <VerificationProductivityChart />
            </CardContent>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Aktivitas Pelamar Terbaru</CardTitle>
          <CardDescription>
            Daftar pelamar yang baru saja menyelesaikan pendaftaran atau mengubah status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentApplicantsTable />
        </CardContent>
      </Card>
    </div>
  )
}
