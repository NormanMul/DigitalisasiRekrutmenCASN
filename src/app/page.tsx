import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BarChart,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  Gauge,
  HeartHandshake,
  Server,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const successMetrics = [
  {
    icon: Clock,
    title: 'Waktu Siklus Rekrutmen',
    description: 'Penurunan durasi total, dari administrasi hingga pengolahan hasil.',
  },
  {
    icon: TrendingUp,
    title: 'Tingkat Otomasi',
    description: 'Persentase tahapan tanpa berkas fisik dan surat-menyurat manual.',
  },
  {
    icon: BarChart,
    title: 'Produktivitas & Kapasitas',
    description: 'Peningkatan jumlah berkas terverifikasi per hari.',
  },
  {
    icon: TrendingDown,
    title: 'Tingkat Kesalahan',
    description: 'Penurunan false positive/negative dalam verifikasi dokumen.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparansi & Kepuasan',
    description: 'Peningkatan skor kepuasan dan ketersediaan peringkat real-time.',
  },
  {
    icon: Server,
    title: 'Kinerja Infrastruktur',
    description: 'Uptime portal, tingkat error pengguna, dan adopsi dashboard.',
  },
];

const asIsProcess = [
  'Pengumuman dan pendaftaran manual.',
  'Verifikasi dokumen memakan waktu.',
  'Alasan penolakan tidak rinci.',
  'Input nilai SKB cenderung manual.',
  'Pemberkasan akhir masih fisik.',
];

const toBeProcess = [
  'Akun terpadu dengan SSO & validasi AI.',
  'Verifikasi administrasi otomatis oleh RPA.',
  'Pengumuman hasil serentak dengan alasan jelas.',
  'Perhitungan nilai otomatis dan terintegrasi.',
  'Pemberkasan digital dan penetapan NIP elektronik.',
];


export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-landing')
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold">CASN Smart Recruit</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="#">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">
                Daftar Sekarang <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-5xl flex-col items-start gap-4">
            <h1 className="font-headline text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Mewujudkan Rekrutmen ASN yang Cerdas, Cepat, dan Transparan
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              CASN Smart Recruit adalah platform rekrutmen Aparatur Sipil Negara (ASN) generasi baru yang didukung oleh AI untuk efisiensi dan keadilan maksimal.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Buka Dashboard <ChevronRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#fitur">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </section>

        <section id="visual" className="container my-12">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={600}
                className="rounded-xl border shadow-lg"
                data-ai-hint={heroImage.imageHint}
              />
            )}
        </section>

        <section id="metriks" className="container py-12">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
            <h2 className="font-headline text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Metriks Keberhasilan yang Terukur
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Kami fokus pada peningkatan nyata di setiap tahap seleksi untuk memberikan hasil terbaik.
            </p>
          </div>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {successMetrics.map((metric) => (
              <Card key={metric.title} className="flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="font-headline text-lg font-medium">{metric.title}</CardTitle>
                  <metric.icon className="h-6 w-6 text-accent" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="proses" className="bg-muted/50 py-20">
          <div className="container grid gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-2xl font-bold">Proses Saat Ini (As-Is)</h3>
              <p className="text-muted-foreground">
                Tantangan proses rekrutmen konvensional yang lambat, rentan kesalahan, dan kurang transparan.
              </p>
              <ul className="mt-4 space-y-3">
                {asIsProcess.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-2xl font-bold">Proses Masa Depan (To-Be)</h3>
              <p className="text-muted-foreground">
                Solusi digital terintegrasi yang mengotomatiskan dan menyederhanakan setiap tahapan.
              </p>
              <ul className="mt-4 space-y-3">
                {toBeProcess.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CASN Smart Recruit. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5 text-primary" />
            <span className="font-headline font-semibold">CASN Smart Recruit</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
