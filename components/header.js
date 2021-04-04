import Link from 'next/link'

export default function Header(){
    const menu= [
        {title:'Hakkımıda', to:'/'},
        {title:'Blog',to:'/blog'},
    ]

    return (
        <header className="site-container py-6">
            <nav className="space-x-4">
                {menu.map(({ title, to }, index) => (
                    <Link href={to} key={index}>
                        <a>{title}</a>
                    </Link>
                ))}
            </nav>
        </header>
    )
}