import { useEffect, useState } from "react";

const PacketLatency = () => {
    const [latency, setLatency] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:55455");

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            try {
                const time = Number(event.data);
                const now = Date.now();
                const packetLatency = now - time;
                setLatency(packetLatency);
            } catch (err) {
                console.error("An error occurred:", err);
                setError("Error parsing incoming data");
            }
        };

        ws.onerror = (err) => {
            console.error("WebSocket error:", err);
            setError("WebSocket connection error");
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className="container">
            <h2 className="packet">Packet Latency</h2>
            {error ? (
                <p className="error">{error}</p>
            ) : latency !== null ? (
                <p className="latency">{latency} ms</p>
            ) : (
                <p className="waiting">Waiting for packets...</p>
            )}
        </div>
    );
};

export default PacketLatency;
