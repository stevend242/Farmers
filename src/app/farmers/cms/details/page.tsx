"use client"

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  FileText,
  MoreVertical,
  CheckCircle2,
  User,
  File,
  Edit,
  CheckCircle,
} from "lucide-react"

import { Button } from "../../../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu"
import { Separator } from "../../../../components/ui/separator"

const Timeline = ({ progressBar }) => (

  <div className="flex w-full mb-5">
    <div className="w-1/4">
      <div className="relative mb-2">
        <div className="mx-auto flex h-10 w-10 items-center rounded-full bg-green-500 text-lg text-white">
          <span className="w-full text-center text-white">
            <File className="w-full" />
          </span>
        </div>
      </div>

      <div className="text-center text-xs md:text-base">
        Initiated
      </div>
    </div>

    <div className="w-1/4">
      <div className="relative mb-2">
        <div
          className="align-center absolute flex content-center items-center align-middle"
          style={{
            width: "calc(100% - 2.5rem - 1rem)",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
            <div
              className={`w-0 py-1 ${progressBar >= 2 && "bg-green-300"
                } rounded`}
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div
          className={`mx-auto h-10 w-10 ${progressBar >= 2 && "bg-green-500"
            } ${progressBar < 2 && "border-2 border-gray-200"
            } flex items-center rounded-full text-lg text-white`}
        >
          <span
            className={`text-center ${progressBar >= 2 ? "text-white" : "text-gray-600"
              } w-full`}
          >
            <User className="w-full " />
          </span>
        </div>
      </div>

      <div className="text-center text-xs md:text-base">
        Bidder Found
      </div>
    </div>

    <div className="w-1/4">
      <div className="relative mb-2">
        <div
          className="align-center absolute flex content-center items-center align-middle"
          style={{
            width: "calc(100% - 2.5rem - 1rem)",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
            <div
              className={`w-0 ${progressBar >= 3 && "bg-green-300"
                } rounded py-1`}
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div
          className={`mx-auto h-10 w-10 ${progressBar >= 3 && "bg-green-500"
            } ${progressBar < 3 && "border-2 border-gray-200"
            } flex items-center rounded-full text-lg text-white`}
        >
          <span
            className={`text-center ${progressBar >= 3 ? "text-white" : "text-gray-600"
              } w-full`}
          >
            <ChevronRight className="w-full" />
          </span>
        </div>
      </div>

      <div className="text-center text-xs md:text-base">
        Proposal Approved
      </div>
    </div>

    <div className="w-1/4">
      <div className="relative mb-2">
        <div
          className="align-center absolute flex content-center items-center align-middle"
          style={{
            width: "calc(100% - 2.5rem - 1rem)",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
            <div
              className={`w-0 ${progressBar >= 4 && "bg-green-300"
                } rounded py-1`}
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div
          className={`mx-auto h-10 w-10 ${progressBar >= 4 && "bg-green-500"
            } ${progressBar < 4 && "border-2 border-gray-200"
            } flex items-center rounded-full text-lg text-white`}
        >
          <span
            className={`text-center ${progressBar >= 4 ? "text-white" : "text-gray-600"
              } w-full`}
          >
            <Edit className="w-full " />
          </span>
        </div>
      </div>

      <div className="text-center text-xs md:text-base">Signed</div>
    </div>

    <div className="w-1/4">
      <div className="relative mb-2">
        <div
          className="align-center absolute flex content-center items-center align-middle"
          style={{
            width: "calc(100% - 2.5rem - 1rem)",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle">
            <div
              className={`w-0 ${progressBar >= 5 && "bg-green-300"
                } rounded py-1`}
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <div
          className={`mx-auto h-10 w-10 ${progressBar >= 5 && "bg-green-500"
            } ${progressBar < 4 && "border-2 border-gray-200"
            } flex items-center rounded-full text-lg text-white`}
        >
          <span
            className={`text-center ${progressBar >= 5 ? "text-white" : "text-gray-600"
              } w-full`}
          >
            <CheckCircle className="w-full" />
          </span>
        </div>
      </div>

      <div className="text-center text-xs md:text-base">Finished</div>
    </div>
  </div>


)

export default function Component() {

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-col items-start bg-muted/50">
        <Timeline progressBar={3} />
        <div className="flex w-full items-start justify-between">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Contract Ct31b70H
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Contract ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: August 30, 2024</CardDescription>
          </div>
          <div className="flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                View Contract
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Archive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="md:p-14 p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Contract Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Contract Type</span>
              <span>Service Agreement</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Contract Duration</span>
              <span>12 months</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Monthly Fee</span>
              <span>$2,500.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Setup Fee</span>
              <span>$5,000.00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total Contract Value</span>
              <span>$35,000.00</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid auto-rows-max gap-3">
            <div className="font-semibold">Client Information</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Acme Corporation</span>
              <span>123 Business Ave.</span>
              <span>Metropolis, NY 10001</span>
            </address>
          </div>
          <div className="flex justify-center flex-col items-end">
            <div className="font-semibold">Service Provider Information</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Your Company Name</span>
              <span>456 Service St.</span>
              <span>Techville, CA 90210</span>
            </address>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Key Contacts</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Client Representative</dt>
              <dd>Jane Smith</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href="mailto:jane@acme.com">jane@acme.com</a>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Phone</dt>
              <dd>
                <a href="tel:+12345678901">+1 234 567 8901</a>
              </dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Last updated <time dateTime="2024-08-30">August 30, 2024</time>
        </div>
      </CardFooter>
    </Card>
  )
}
