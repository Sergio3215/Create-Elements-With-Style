import React from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" />
        <meta name="description" content="Una pagina para crear elementos con lindos estilos" />
        <title>Styling Element</title>
      </head>
      <body>{children}</body>
    </html>
  )
}