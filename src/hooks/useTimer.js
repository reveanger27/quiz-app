import { useState, useEffect } from "react";

function useTimer (initialTime) {
    const [timer, setTimer] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if(prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev -1;
            })
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return timer;

}

export default useTimer;