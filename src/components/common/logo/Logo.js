import React from 'react';

const width = 80;
const height = 25;
const aspect = width / height;

const Logo = ({ width = 80 }) => {
  const currentAspect = Math.round(width / aspect);

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={currentAspect} viewBox={`0 0 ${width} ${currentAspect}`}>
        <path fill={ '#dadada' } fillRule="evenodd" d="M16.45 2.663l-.677.906a8.585 8.585 0 0 0-5.962-2.435c-4.798 0-8.673 3.908-8.673 8.75 0 4.872 3.875 8.809 8.673 8.809 2.25 0 4.363-.907 5.962-2.408l.704.822c-1.76 1.697-4.173 2.746-6.694 2.746C4.391 19.853 0 15.408 0 9.913 0 4.42 4.391 0 9.783 0c2.548 0 4.906 1.02 6.667 2.663zm13.638 17.163h-1.112v-3.915c-.895 2.534-2.875 3.915-5.668 3.942-3.418 0-5.398-2.14-5.398-5.745v-8.96h1.112v8.734c0 3.014 1.682 4.79 4.53 4.79 3.417-.085 5.424-2.508 5.424-6.34V5.148h1.112v14.68zm15.761-7.415c0 4.216-2.899 7.236-6.996 7.236-2.844 0-5.073-1.468-6.16-3.797V25h-1.172V5.174h1.172v3.799c1.087-2.356 3.316-3.826 6.16-3.826 4.068 0 6.996 3.023 6.996 7.264zm-1.143 0c0-3.576-2.508-6.181-6.021-6.181-3.483 0-5.992 2.605-5.992 6.181 0 3.577 2.509 6.155 5.992 6.155 3.513 0 6.021-2.578 6.021-6.155zm36.246-.905v9.082h-3.075v-8.204c0-2.195-1.284-3.538-3.423-3.538-2.353.027-3.825 1.7-4.038 3.977v7.765h-3.075V5.992h3.075v2.799c1.016-2.03 2.834-2.909 5.242-2.909 3.316 0 5.294 2.14 5.294 5.624zm-24.358 9.082c-5.53 0-10.028-4.617-10.028-10.293C46.566 4.618 51.064 0 56.594 0s10.03 4.618 10.03 10.295c0 5.676-4.5 10.293-10.03 10.293zM55.372 3.676L53.47 5.471c.174.408.088.903-.245 1.217a.96.96 0 0 1-1.174.12l-1.903 1.793 7.67 9.046 1.903-1.793a1.095 1.095 0 0 1 .245-1.217.96.96 0 0 1 1.175-.121l1.903-1.795-7.67-9.045zm.729 3.494l-.49-.578.773-.73.49.58-.773.728zm-1.19 1.122l-.49-.579.772-.73.492.581-.774.728zM53.74 9.396l-.491-.579.774-.728.49.579-.773.728zm-1.15 1.09l-.49-.577.773-.73.49.58-.773.728z"/>
      </svg>
    </div>
  );
}

export default Logo