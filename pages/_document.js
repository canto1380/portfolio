/** Archivo que sirve alterar la cabeza/head del HTML. Sirve para editar las partes HTML de la App **/

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      {/* No se usa la etiqueta title del HEAD en este documento */}
      <Head>
        <meta name='descripcion' content="My Portfolio website"/>
        {/* CDN de libreria NPROGRESS - Sirve para mostrar linea de carga */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
