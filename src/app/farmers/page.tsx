import { SignedIn, UserProfile } from "@clerk/nextjs";

export default function Page(){
    return(
        <><SignedIn><UserProfile/></SignedIn></>
    )
}