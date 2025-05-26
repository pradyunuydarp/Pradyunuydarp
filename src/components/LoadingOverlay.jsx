// src/components/LoadingOverlay.jsx
import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export default function LoadingOverlay() {
    const { active, progress } = useProgress();
    // active=true as long as any R3F suspense boundary is loading
    return active ? (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: '#1A1A1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                color: 'white',
                fontSize: '1.2rem',
                flexDirection: 'column',
            }}
        >
            <div>Loading {progress.toFixed(0)}%</div>
            <div style={{ marginTop: 12 }}>
                <div
                    style={{
                        width: 200,
                        height: 4,
                        background: '#333',
                        overflow: 'hidden',
                        borderRadius: 2,
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: '#4cc9f0',
                            transition: 'width 0.2s',
                        }}
                    />
                </div>
            </div>
        </div>
    ) : null;
}
