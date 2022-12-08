//Agora nos adicionamos uma variavel fx, mas para que ela serve?
export default function Button({text, fx, children}) {
  return (
    //O fx será uma variavel que sempre que o botão for clicado ela será executada, por isso usamos a função onClick que executa tudo isso
    <button type="button" onClick={fx}>
      {text}
      {children}
    </button>
  )
}
