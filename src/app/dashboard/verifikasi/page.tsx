'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Briefcase,
  Upload,
  Bot,
  RefreshCw
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  automatedDocumentVerification,
  AutomatedDocumentVerificationOutput,
} from '@/ai/flows/automated-document-verification';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

const documentExample = {
  applicantName: 'Siti Nurbaya',
  applicantId: 'CASN-002',
  position: 'Pranata Komputer',
  documentType: 'Ijazah S1 Informatika',
  submittedAt: '2023-07-22',
};

export default function VerifikasiPage() {
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [requirements, setRequirements] = useState<string>('Ijazah S1 dari program studi Informatika atau serumpun, terakreditasi minimal B, IPK minimal 3.00, dan dilegalisir.');
  const [verificationResult, setVerificationResult] = useState<AutomatedDocumentVerificationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setVerificationResult(null); // Reset result on new file
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleVerification = async () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "Gagal Memverifikasi",
        description: "Silakan unggah dokumen terlebih dahulu.",
      });
      return;
    }
    
    setIsLoading(true);
    setVerificationResult(null);

    try {
      const result = await automatedDocumentVerification({
        documentDataUri: filePreview!,
        documentRequirements: requirements,
      });
      setVerificationResult(result);
      toast({
        title: "Verifikasi Selesai",
        description: `Dokumen dinilai ${result.isValid ? "Valid" : "Tidak Valid"}.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: "Gagal saat memanggil AI untuk verifikasi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Verifikasi Dokumen Berbasis AI
        </h1>
        <p className="text-muted-foreground">
          Otomatisasi proses verifikasi berkas pelamar untuk efisiensi dan
          akurasi maksimal.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Area Verifikasi</CardTitle>
              <CardDescription>
                Unggah dokumen pelamar dan biarkan AI melakukan pemeriksaan
                awal.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-8 text-center">
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf"
                />
                 {filePreview ? (
                  <div className="relative w-full h-96">
                    <object data={filePreview} type={file?.type} width="100%" height="100%">
                      <p>Tidak dapat menampilkan pratinjau.</p>
                    </object>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <label htmlFor="file-upload" className="mt-4">
                      <Button asChild>
                        <span>Pilih Dokumen</span>
                      </Button>
                    </label>
                    <p className="mt-2 text-xs text-muted-foreground">
                      PNG, JPG, GIF, atau PDF hingga 10MB
                    </p>
                  </>
                )}
              </div>
               <div>
                  <label className="text-sm font-medium">Kebutuhan Dokumen</label>
                  <Textarea 
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Contoh: Ijazah S1, IPK min 3.0, Akreditasi A"
                    className="mt-1"
                  />
               </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                {file && (
                    <Button variant="outline" onClick={() => { setFile(null); setFilePreview(null); setVerificationResult(null)}}>
                        <RefreshCw className="mr-2 h-4 w-4" /> Ganti Dokumen
                    </Button>
                )}
                <Button onClick={handleVerification} disabled={!file || isLoading}>
                    {isLoading ? (
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Bot className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? 'Memverifikasi...' : 'Jalankan Verifikasi AI'}
                </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Pelamar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>{documentExample.applicantName} ({documentExample.applicantId})</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>{documentExample.position}</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>{documentExample.documentType}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Diunggah: {documentExample.submittedAt}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hasil Verifikasi AI</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && (
                 <div className="space-y-2">
                    <p className="text-sm text-muted-foreground text-center">AI sedang menganalisis dokumen...</p>
                    <Progress value={50} className="w-full animate-pulse" />
                </div>
              )}
              {verificationResult && (
                <div className="space-y-4">
                  <div
                    className={`flex items-center gap-2 font-bold ${
                      verificationResult.isValid
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {verificationResult.isValid ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <XCircle className="h-5 w-5" />
                    )}
                    <span>
                      {verificationResult.isValid ? 'Dokumen Valid' : 'Dokumen Tidak Valid'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Alasan:</h4>
                    <p className="text-sm text-muted-foreground">
                      {verificationResult.reason}
                    </p>
                  </div>
                </div>
              )}
               {!isLoading && !verificationResult && (
                 <p className="text-sm text-muted-foreground text-center">Hasil verifikasi akan muncul di sini.</p>
               )}
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button variant="destructive" disabled={!verificationResult || verificationResult.isValid}>Tolak Berkas</Button>
                <Button className="bg-green-600 hover:bg-green-700" disabled={!verificationResult || !verificationResult.isValid}>Setujui Berkas</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
