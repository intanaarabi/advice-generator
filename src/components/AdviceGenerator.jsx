function AdviceGenerator() {
    return (
        <div className="bg-secondary text-contrast w-1/3 rounded-xl">
            <div className="flex flex-col justify-center items-center p-10 pb-14 text-center gap-10 relative">
                <p className="text-sm tracking-[.25em] uppercase text-accent ">
                    Advice #117
                </p>
                <p className="text-3xl tracking-wide font-extrabold text-contrast ">
                    It is easy to sit up and take notice, what&apos;s difficult is getting up and taking action.
                </p>
                <img src="/images/pattern-divider-desktop.svg"></img>
                <div className="absolute bottom-[-40px]">
                    <button className="rounded-full bg-accent p-4 transition-shadow duration-150 hover:shadow-glow">
                        <img src="/images/icon-dice.svg" alt="Dice Icon" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdviceGenerator
