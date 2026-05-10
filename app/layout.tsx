import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Painel Clean — Equipamentos profissionais para limpeza solar',
  description: 'Motor brushless, sem produtos químicos, até 260 painéis por hora. Equipamentos profissionais para quem vive de solar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
