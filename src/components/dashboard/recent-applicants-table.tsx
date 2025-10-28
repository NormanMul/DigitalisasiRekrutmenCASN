import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const applicants = [
  { name: "Ahmad Subarjo", position: "Analis Kebijakan Ahli Pertama", date: "2023-07-22", status: "Terverifikasi" },
  { name: "Siti Nurbaya", position: "Pranata Komputer", date: "2023-07-22", status: "Menunggu" },
  { name: "Budi Santoso", position: "Auditor Ahli Pertama", date: "2023-07-21", status: "Terverifikasi" },
  { name: "Dewi Lestari", position: "Analis Sumber Daya Manusia", date: "2023-07-21", status: "Ditolak" },
  { name: "Eko Prasetyo", position: "Pranata Komputer", date: "2023-07-20", status: "Terverifikasi" },
]

export function RecentApplicantsTable() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Terverifikasi":
        return "default"
      case "Menunggu":
        return "secondary"
      case "Ditolak":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nama Pelamar</TableHead>
          <TableHead className="hidden sm:table-cell">Posisi Dilamar</TableHead>
          <TableHead className="hidden md:table-cell">Tanggal</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants.map((applicant) => (
          <TableRow key={applicant.name}>
            <TableCell>
              <div className="font-medium">{applicant.name}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{applicant.position}</TableCell>
            <TableCell className="hidden md:table-cell">{applicant.date}</TableCell>
            <TableCell className="text-right">
              <Badge variant={getStatusVariant(applicant.status) as any} className="capitalize">
                {applicant.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
