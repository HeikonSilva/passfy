import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Check() {
  return (
    <>
      <div className="px-4 lg:px-6">
        <Card className="@container/card">
          <CardHeader className="relative">
            <CardTitle>Check</CardTitle>
            <CardDescription>
              <span className="@[540px]/card:block hidden">
                Your description for larger screens
              </span>
              <span className="@[540px]/card:hidden">
                Your description for smaller screens
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <p>Your text content goes here.</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
