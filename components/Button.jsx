export default function Button({
  className,
  children
}) {
  return <button className={"bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-light-orange transition-colors " + className}>
    {children}
  </button>
}