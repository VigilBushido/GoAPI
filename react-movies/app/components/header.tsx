import cone from "app/images/cone.png";

export function Header() {
    return (
        <header className="fixed top-2 z-30 w-full md:top-8">
            <div className="mx-auto max-w-6xl px-4 sm:px-20">
                <div className="relative flex h-12 items-center justify-between gap-1 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <img
                            src={cone}
                            alt="Construction Cone"
                            className="cone"
                        />
                    </div>

                    {/*Links*/}
                    <ul className="flex flex-1 items-center gap-3 text-orange-300">
                        <li>
                            <h1 className="increase">Currently In Construction</h1>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};;