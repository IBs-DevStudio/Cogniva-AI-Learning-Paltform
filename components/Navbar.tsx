import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";



const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={56}
                        height={54}
                        className="rounded-lg"
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems/>
                <SignedOut>
                    <SignInButton>
                  <button className="bg-[#1F2937] text-white px-4 py-2 rounded-md cursor-pointer">Sign In</button>
                    </SignInButton>
                 
                </SignedOut>
                <SignedIn>
                  <UserButton/>
                  
                </SignedIn>
                </div>
        </nav>
    )
}

export default Navbar