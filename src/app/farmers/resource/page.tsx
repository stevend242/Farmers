
import { getPriceData } from "~/server/action/actions"

export default async function Page() {

  const pricedata = await getPriceData()
  console.log(pricedata)
  return (
    <div>gg</div>
  )
}
