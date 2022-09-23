import React from 'react';

export default Loader => (
    <div className="loaderContainer">
        <svg width="75" height="75" viewBox="0 0 178.96 178.96">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#0b57ac" />
                    <stop offset="1" stopColor="#538ccc" />
                </linearGradient>
            </defs>
            <g id="Group_189" data-name="Group 189" transform="translate(0 0)">
                <animateTransform attributeName="transform" type="rotate" dur="1s" values="0 89.55 89.55;360 89.55 89.55" repeatCount="indefinite" />
                <path id="Subtraction_1" data-name="Subtraction 1" d="M81.414,162.831A81.437,81.437,0,0,1,49.725,6.4a81.436,81.436,0,0,1,63.381,150.035A80.906,80.906,0,0,1,81.414,162.831Zm0-126.448a45.033,45.033,0,1,0,31.843,13.19A44.735,44.735,0,0,0,81.414,36.384Z" transform="matrix(-0.105, -0.995, 0.995, -0.105, 17.021, 178.96)" fill="url(#linear-gradient)" />
                <path id="Subtraction_3" data-name="Subtraction 3" d="M31.333,145.583l0,0c-.386-.3-.772-.608-1.148-.912a81.537,81.537,0,0,1-20.054-23.909A81.306,81.306,0,0,1,9.523,43.2,81.651,81.651,0,0,1,42.059,10.129,80.883,80.883,0,0,1,72.9.456,83.067,83.067,0,0,1,81.549,0a81,81,0,0,1,38.068,9.524,81.838,81.838,0,0,1,24.164,19.568c1.115,1.326,2.2,2.709,3.234,4.109a119.478,119.478,0,0,0-31.98,5.354A54.289,54.289,0,0,0,81.5,26.932a55.637,55.637,0,0,0-5.784.3,54.5,54.5,0,0,0-42.005,80.506A54.689,54.689,0,0,0,37.6,113.8a119.221,119.221,0,0,0-6.268,31.779Z" transform="translate(8.061 8.062)" fill="url(#linear-gradient)" />
            </g>
        </svg>
    </div>
);