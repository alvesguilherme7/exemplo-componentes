export default function ConteudoPrincipal(props) {
  return (
    <section className="flex-column flex-center text-left">
      {props.children}
    </section>
  );
}
