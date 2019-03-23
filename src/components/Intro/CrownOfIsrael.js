import React from "react";

const crownDimension = 30;
const blueColor = '#214496';

export default function() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 120 55"
      width="300px"
    >
      <rect width="120" height="55" fill="white" y="0" />
      <rect width="120" height="4" fill={blueColor} y="2" />
      <rect width="120" height="4" fill={blueColor} y="49" />
      <g style={{transform: `translate(45px, 12px)`}}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={crownDimension}
          height={crownDimension}
          viewBox="0 0 168.528 168.528"
          style={{enableBackground: 'new 0 0 168.528 168.528'}}
        >
          <g fill="gold" >
            <path
              d="M168.528,66.208c0-9.181-7.467-16.648-16.653-16.648c-9.176,0-16.643,7.467-16.643,16.648c0,4.912,2.183,9.303,5.59,12.343
		l-20.999,7.552L91.357,52.236c5.695-2.64,9.671-8.385,9.671-15.066c0-9.173-7.467-16.648-16.653-16.648
		c-9.176,0-16.643,7.476-16.643,16.648c0,6.632,3.916,12.303,9.521,14.979l-28.54,33.942l-20.996-7.546
		c3.404-3.04,5.59-7.43,5.59-12.35c0-9.173-7.467-16.648-16.654-16.648C7.478,49.547,0,57.022,0,66.195
		c0,7.815,5.442,14.344,12.712,16.126v45.125c0,2.235,1.813,4.05,4.05,4.05h134.997c2.236,0,4.05-1.814,4.05-4.05V82.321
		C163.103,80.549,168.528,74.026,168.528,66.208z M84.386,28.635c4.714,0,8.543,3.834,8.543,8.549c0,4.706-3.829,8.548-8.543,8.548
		c-4.715,0-8.554-3.842-8.554-8.548C75.832,32.469,79.661,28.635,84.386,28.635z M8.11,66.208c0-4.714,3.839-8.548,8.554-8.548
		s8.543,3.834,8.543,8.548c0,4.707-3.829,8.549-8.543,8.549S8.11,70.915,8.11,66.208z M147.72,123.406H20.822V84.689l27.799,9.998
		c1.593,0.569,3.386,0.095,4.472-1.213l31.174-37.069l31.169,37.069c1.086,1.292,2.879,1.782,4.472,1.213l27.802-9.998v38.717
		H147.72z M151.886,74.757c-4.715,0-8.554-3.842-8.554-8.549c0-4.714,3.839-8.548,8.554-8.548c4.714,0,8.554,3.834,8.554,8.548
		C160.439,70.915,156.605,74.757,151.886,74.757z M155.819,143.957c0,2.23-1.813,4.05-4.05,4.05H16.772
		c-2.236,0-4.05-1.819-4.05-4.05c0-2.236,1.814-4.05,4.05-4.05H151.77C154.006,139.907,155.819,141.721,155.819,143.957z"
            />
          </g>
        </svg>
      </g>
    </svg>
  );
}
