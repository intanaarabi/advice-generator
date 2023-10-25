import { useState, useEffect } from 'react';
import { fetchRandomAdvice } from '../api/advice';  // Adjust the import path according to your directory structure.
import BeatLoader from "react-spinners/BeatLoader";

function AdviceGenerator() {

    const [adviceData, setAdviceData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [buttonDisabled, setButtonDisabled] = useState(false);

    async function fetchAdvice() {
        setLoading(true); // Start loading state immediately
    
        // Introduce a delay before making the actual fetch
        await new Promise(resolve => setTimeout(resolve, 500));
    
        try {
            const response = await fetchRandomAdvice();
            setAdviceData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
    <>
      <div className="bg-secondary text-contrast w-[90%] sm:w-[570px] rounded-xl">
            <div className="flex flex-col justify-center items-center p-8 sm:p-10 pb-14 text-center gap-10 relative">
                {loading && <div><BeatLoader color="#52FFA8" /></div>}
                {error && <div>Error: {error.message}</div>}
                {!loading && !error && adviceData && (
                    <>
                        <p className="text-sm tracking-[.25em] uppercase text-accent ">
                            Advice #{adviceData.slip.id}
                        </p>
                        <p className="text-2xl sm:text-3xl tracking-wide font-extrabold text-contrast ">
                        &quot;{adviceData.slip.advice}&quot;
                        </p>
                    </>
                )}
                <div className='hidden sm:block pb-6'>
                    <img src="/images/pattern-divider-desktop.svg"></img>
                </div>
                <div className='block sm:hidden pb-2'>
                    <img src="/images/pattern-divider-mobile.svg"></img>
                </div>
                <div className="absolute bottom-[-25px]">
                <button disabled={loading } onClick={fetchAdvice} 
                    className="rounded-full bg-accent p-4 transition-shadow duration-150 hover:shadow-glow disabled:pointer-events-none	">
                    <img src="/images/icon-dice.svg" alt="Dice Icon" className="w-6 h-6" />
                </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default AdviceGenerator
