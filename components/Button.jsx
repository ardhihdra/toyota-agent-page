export default function Button({
  className,
  transparent,
  children,
}) {
  let classStyle = "text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-light-orange transition-colors "
  if (!transparent) classStyle += 'bg-green-500 '
  if (transparent) classStyle += 'border '

  return (
    <button className={classStyle + className}>
      {children}
    </button>
  )
}