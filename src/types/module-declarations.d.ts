/// <reference types="vite/client" />

// Déclaration pour les modules CSS (pour que TypeScript puisse les importer)
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Déclaration spécifique pour le CSS de react-datepicker
declare module 'react-datepicker/dist/react-datepicker.css' {
  const content: any;
  export default content;
}

// Ajout d'autres déclarations pour les types de fichiers courants
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
