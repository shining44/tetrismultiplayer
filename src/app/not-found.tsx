import Link from "next/link"
import { Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mountain className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-6xl font-bold text-slate-900 mb-4">۴۰۴</h1>
          <p className="text-xl text-slate-600 mb-8">
            صفحه مورد نظر یافت نشد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/fa">بازگشت به صفحه اصلی</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/en">Go to English Home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
