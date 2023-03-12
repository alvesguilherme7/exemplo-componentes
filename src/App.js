import MenuTopo from "./components/Menu/MenuTopo";
import ConteudoTopo from "./components/ConteudoTopo/ConteudoTopo";
import ConteudoPrincipal from "./components/ConteudoPrincipal/ConteudoPrincipal";
import ItemConteudoPrincipal from "./components/ItemConteudoPrincipal/ItemConteudoPrincipal";
import Botao from "./components/Botao/Botao";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="cor-principal-bg">
        <MenuTopo></MenuTopo>
        <ConteudoTopo></ConteudoTopo>
      </header>
      <section>
        <ConteudoPrincipal>
          <h2>Últimas do blog</h2>
          <ItemConteudoPrincipal
            titulo="Titulo 1"
            conteudo=""
          ></ItemConteudoPrincipal>

          <ItemConteudoPrincipal
            titulo="Titulo 2"
            conteudo="Conteudo pequeno e não padrão."
          ></ItemConteudoPrincipal>

          <ItemConteudoPrincipal
            titulo="Titulo 3"
            conteudo=""
          ></ItemConteudoPrincipal>

          <Botao url="#" texto="Ver tudo"></Botao>
        </ConteudoPrincipal>
      </section>
    </div>
  );
}
