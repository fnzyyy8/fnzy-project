export default function Footer() {
    const years = new Date().getFullYear().toString()
    return (
        <footer className="flex items-center justify-center bg-primary text-dark h-20">
            <p>
                Copyright {years} - Farhan Septiansyah Portofolio
            </p>
        </footer>
    )
}
