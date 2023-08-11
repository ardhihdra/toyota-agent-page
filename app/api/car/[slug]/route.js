export async function GET(
  request,
  { params }
) {
  const slug = params?.slug // 'a', 'b', or 'c'
  console.log("SLUG TEST CAR", slug)
}