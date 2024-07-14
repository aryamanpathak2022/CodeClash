/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/1XnKhHNhLQH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Work_Sans } from 'next/font/google'
import { Rubik } from 'next/font/google'

work_sans({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function Home() {
  return (
    (<div className="flex flex-col min-h-dvh">
      <header
        className="flex items-center justify-between px-4 py-3 bg-background shadow md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CodeIcon className="w-6 h-6" />
          <span className="text-lg font-bold">CodeClash</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none"
            prefetch={false}>
            Login
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-accent-foreground bg-accent rounded-md shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none"
            prefetch={false}>
            Sign Up
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section
          className=" grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-6 lg:py-16">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Compete and Conquer with CodeClash
            </h1>
            <p className="max-w-md text-muted-foreground md:text-xl">
              Join our vibrant community of competitive programmers and showcase your skills in challenging coding
              contests.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none"
                prefetch={false}>
                Join a Contest
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-accent-foreground bg-accent rounded-md shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none"
                prefetch={false}>
                View Leaderboard
              </Link>
            </div>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <pre className="p-6 font-mono text-sm text-muted-foreground">
              <code>{`
function findMaxSubarray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSubarray(nums)); // Output: 6
`}</code>
            </pre>
          </div>
        </section>
        <section className="flex items-center justify-center bg-muted py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Upcoming Contests</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Check out our upcoming coding challenges and sign up to showcase your skills.
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Algorithm Showdown</CardTitle>
                    <CardDescription>July 15, 2023 - July 22, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Test your algorithmic prowess in this week-long competition featuring a variety of problem-solving
                      challenges.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none"
                      prefetch={false}>
                      Join Now
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Data Structures Duel</CardTitle>
                    <CardDescription>August 1, 2023 - August 8, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Showcase your mastery of data structures in this high-stakes competition featuring complex coding
                      challenges.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none"
                      prefetch={false}>
                      Join Now
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex items-center justify-center py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leaderboard</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Check out the top performers in our coding challenges and see how you stack up.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Top Coders</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          <div className="font-medium">
                            <Link href="#" prefetch={false}>
                              johnsmith
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell>2,345</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>
                          <div className="font-medium">
                            <Link href="#" prefetch={false}>
                              janelee
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell>2,210</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>
                          <div className="font-medium">
                            <Link href="#" prefetch={false}>
                              davidkim
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell>2,150</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>
                          <div className="font-medium">
                            <Link href="#" prefetch={false}>
                              sarahjones
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell>2,100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>
                          <div className="font-medium">
                            <Link href="#" prefetch={false}>
                              michaelchen
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell>2,050</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none"
                    prefetch={false}>
                    View Full Leaderboard
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t py-4 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 CodeClash. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}>
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}>
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}>
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
