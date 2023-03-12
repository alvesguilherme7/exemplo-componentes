const conteudoPadrao =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a magna a diam commodo tincidunt cursus eget odio. Nullam placerat justo ut sapien luctus, a vehicula enim tincidunt. Donec facilisis tellus sapien, in dignissim turpis feugiat id. Nulla faucibus lectus sed erat rutrum vehicula. Maecenas mollis, mi ac aliquam pharetra, nisi nisl porta nisl, in lobortis nulla metus quis lectus. Aliquam aliquet auctor dignissim.";

export default function ItemConteudoPrincipal(props) {
  return (
    <div className="w-30">
      <h3>{props.titulo}</h3>
      <p>{props.conteudo === "" ? conteudoPadrao : props.conteudo}</p>
    </div>
  );
}
