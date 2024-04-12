export default function HelloWorld(props: any) {
    return (
      <div>
        <h1 style={{ color: props.h1Color, fontSize: props.fsize }}>
          Hello World Data: {props.dataAtual}
        </h1>
      </div>
    );
  }