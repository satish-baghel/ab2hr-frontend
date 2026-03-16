import { Footer, Header } from "@/components/layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-background pt-32 pb-24">
        {children}
      </main>
      <Footer />
    </>
  )
}
