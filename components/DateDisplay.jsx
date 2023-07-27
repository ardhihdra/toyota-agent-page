export default function DateDisplay({ children, className }) {
  return <span className={(className || '') + 'italic text-stone-400'}>{children}</span>
}