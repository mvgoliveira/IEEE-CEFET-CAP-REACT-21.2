export default function Button({text, children}) {
  return (
    <button type="button">
      {text}
      {children}
    </button>
  )
}