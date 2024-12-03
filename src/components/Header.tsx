import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";

type HeaderProps = {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`py-8 xl:py-12 text-white ${className}`}>
      <div className="container mx-auto flex items-center justify-between flex-row">
        {/* Site Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">Paolo<span className="text-accent">.</span></h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center">
          <Nav />
          <Link href="/contact">
            <Button className="ml-8">View Resume →</Button>
          </Link>
        </div>
        {/* Mobile Navigation */}
      </div>
    </header>
  )
};

export default Header;