import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-red-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    アートワインバー コンペ
                </h1>
                <div className="space-x-4">
                    <Link href="#about" className="hover:underline">概要</Link>
                    <Link href="#entry" className="hover:underline">参加</Link>
                    <Link href="#access" className="hover:underline">アクセス</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;